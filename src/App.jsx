import React, { useState, useRef, useEffect } from 'react';
import TimelineEntry from './components/timeline/TimelineEntry';
import { 
  Globe2, 
  Info, 
  Languages, 
  ChevronDown, 
  Download, 
  Eye, 
  EyeOff,
  FileText,
  FileImage,    // Add this line
  Building,
  Scale,
  HeartHandshake,
  Laptop,
  BarChart,
  HelpCircle,
  ChevronRight,
  ListFilter,
  Menu
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { timelineGroups } from './timelineData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Import new search components
import SearchBar from './components/SearchBar';
import { useSearch } from './hooks/useSearch';

const highlightText = (text, matches) => {
  if (!matches || matches.length === 0) return text;
  
  const segments = [];
  let lastIndex = 0;
  
  matches.forEach(({ start, end }) => {
    segments.push(text.substring(lastIndex, start));
    segments.push(
      <mark key={start} className="bg-yellow-100">
        {text.substring(start, end)}
      </mark>
    );
    lastIndex = end;
  });
  
  segments.push(text.substring(lastIndex));
  return segments;
};

const IndexSection = ({ index, language, onIndexClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!index || !index[language]) {
    return null;
  }

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors w-full"
      >
        {isExpanded ? (
          <ChevronDown className="w-5 h-5" />
        ) : (
          <ChevronRight className="w-5 h-5" />
        )}
        <ListFilter className="w-5 h-5" />
        <span className="font-medium">
          {language === 'en' ? 'Index' : 'सूची'}
        </span>
      </button>
      
      {isExpanded && (
        <div className="mt-4 pl-4 pr-2">
          <ul className="space-y-2">
            {index[language].map((item, idx) => (
              <li 
                key={idx}
                className="cursor-pointer hover:text-blue-600 transition-colors text-sm"
                onClick={() => onIndexClick(idx)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
const Timeline = ({ timelineData, title, index, language, isActive, showContent, searchTerm, currentMatchIndex }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);

  const handleIndexClick = (idx) => {
    setActiveIndex(idx);
  };

  const [isExporting, setIsExporting] = useState(false);

const exportToPDFAsImage = async (exportLanguage) => {
  if (timelineRef.current) {
    try {
      setIsExporting(true);
      const element = timelineRef.current;
      const scrollHeight = element.scrollHeight;
      
      const canvas = await html2canvas(element, {
        height: scrollHeight,
        windowHeight: scrollHeight,
        scrollY: -window.scrollY,
        useCORS: true,
        scale: 2,
        logging: false,
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.querySelector('.card-content');
          if (clonedElement) {
            clonedElement.style.height = 'auto';
            clonedElement.style.overflow = 'visible';
          }
        }
      });

      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      let heightLeft = imgHeight;
      let position = 0;
      
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save(`${title[exportLanguage].replace(/\s+/g, '-').toLowerCase()}-snapshot.pdf`);
    } catch (error) {
      console.error('Error generating image PDF:', error);
    } finally {
      setIsExporting(false);
    }
  }
};

const exportToPDFAsDoc = async (exportLanguage) => {
  if (timelineRef.current) {
    try {
      setIsExporting(true);
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 15;
      const contentWidth = pageWidth - (2 * margin);
      let yPosition = margin;
      const lineHeight = 6;

      // Title styling
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      
      // Center align title
      const titleWidth = pdf.getStringUnitWidth(title[exportLanguage]) * 16 / pdf.internal.scaleFactor;
      const titleXPosition = (pageWidth - titleWidth) / 2;
      pdf.text(title[exportLanguage], titleXPosition, yPosition);
      yPosition += lineHeight * 2;

      // Content
      timelineData.forEach((entry, index) => {
        // Check for new page
        if (yPosition > pageHeight - margin * 2) {
          pdf.addPage();
          yPosition = margin;
        }

        // Year and title block
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        const yearTitle = `${entry.year} - ${entry.title[exportLanguage]}`;
        const splitYearTitle = pdf.splitTextToSize(yearTitle, contentWidth);
        
        // Add a box around each entry
        pdf.setDrawColor(200, 200, 200);
        pdf.setFillColor(250, 250, 250);
        const entryHeight = (splitYearTitle.length * lineHeight) + 
                          (pdf.splitTextToSize(entry.description[exportLanguage], contentWidth).length * lineHeight) + 
                          margin;
        pdf.roundedRect(margin, yPosition - 4, contentWidth, entryHeight, 2, 2, 'FD');

        pdf.text(splitYearTitle, margin + 5, yPosition);
        yPosition += lineHeight * splitYearTitle.length;

        // Description
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'normal');
        const description = entry.description[exportLanguage];
        const splitDescription = pdf.splitTextToSize(description, contentWidth - 10);
        pdf.text(splitDescription, margin + 5, yPosition);
        yPosition += (lineHeight * splitDescription.length) + margin;
      });

      // Footer
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'italic');
      pdf.setTextColor(100, 100, 100);
      pdf.text('Shiva Prasad Acharya', margin, pageHeight - margin);
      pdf.text('Supreme Court (2081)', margin, pageHeight - margin + lineHeight);

      pdf.save(`${title[exportLanguage].replace(/\s+/g, '-').toLowerCase()}-document.pdf`);
    } catch (error) {
      console.error('Error generating document PDF:', error);
    } finally {
      setIsExporting(false);
    }
  }
};

  if (!isActive) return null;

  let currentMatch = 0;

  return (
    <Card className="w-full max-w-3xl mx-auto mb-8">
      <CardContent className="p-4" ref={timelineRef}>
       <div className="flex justify-between items-center mb-6">
  <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
    {title[language]}
  </h2>
  <ExportDropdown 
    isExporting={isExporting} 
    language={language} 
    onExportImage={exportToPDFAsImage} 
    onExportDoc={exportToPDFAsDoc} 
  />
</div>

        <IndexSection 
          index={index}
          language={language}
          onIndexClick={handleIndexClick}
        />
        
        <div className="relative max-w-3xl mx-auto">
          {timelineData.map((entry, index) => {
            const entryText = [
              entry.year,
              entry.title[language],
              entry.description[language]
            ].join(' ').toLowerCase();

            const hasMatch = searchTerm && entryText.includes(searchTerm.toLowerCase());
            if (hasMatch) currentMatch++;

            return (
              <TimelineEntry
                key={entry.year}
                data={entry}
                isActive={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                index={index}
                language={language}
                showContent={showContent}
                searchTerm={searchTerm}
                isCurrentMatch={hasMatch && currentMatch === currentMatchIndex}
              />
            );
          })}
        </div>
        <div className="mt-8 pt-4 border-t border-gray-200">
          <p className="text-right text-sm text-gray-600 italic">
            Shiva Prasad Acharya
            <br />
            Supreme Court (2081)
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

// Add this component in your App.jsx, after your other component definitions
const ExportDropdown = ({ isExporting, language, onExportImage, onExportDoc }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        disabled={isExporting}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors border border-blue-200 disabled:opacity-50"
      >
        {isExporting ? (
          <>
            <svg className="animate-spin h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Exporting...
          </>
        ) : (
          <>
            <Download className="w-4 h-4" />
            Export PDF
          </>
        )}
      </button>

      {isOpen && !isExporting && (
        <div className="absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <button
              className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => {
                onExportImage(language);
                setIsOpen(false);
              }}
            >
              <FileImage className="w-4 h-4 mr-2" />
              Export as Image
            </button>
            <button
              className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => {
                onExportDoc(language);
                setIsOpen(false);
              }}
            >
              <FileText className="w-4 h-4 mr-2" />
              Export as Document
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

function App() {
  const [language, setLanguage] = useState('en');
  const [activeTimeline, setActiveTimeline] = useState(Object.keys(timelineGroups)[0]);
  const [showContent, setShowContent] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  // Use the search hook for all search functionality
  const {
    searchTerm,
    setSearchTerm,
    currentMatchIndex,
    matchCount,
    nextMatch,
    prevMatch
  } = useSearch(timelineGroups, activeTimeline, language);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Menu Trigger */}
      <div 
        className="fixed top-4 left-4 z-50 cursor-pointer"
        onMouseEnter={() => setIsHeaderVisible(true)}
      >
        <div className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300">
          <Menu className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* Floating Header Menu */}
      <div 
        className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-40 transition-all duration-300 ${
          isHeaderVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform -translate-y-full pointer-events-none'
        }`}
        onMouseLeave={() => setIsHeaderVisible(false)}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <button 
                onClick={() => setLanguage(prev => prev === 'en' ? 'ne' : 'en')}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
              >
                <Globe2 className="w-5 h-5 text-blue-600" />
                <span className="font-medium">
                  {language === 'en' ? 'नेपाली' : 'English'}
                </span>
              </button>

              {/* SearchBar Component */}
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                matchCount={matchCount}
                currentMatchIndex={currentMatchIndex}
                prevMatch={prevMatch}
                nextMatch={nextMatch}
              />
            </div>

            <Select value={activeTimeline} onValueChange={setActiveTimeline}>
              <SelectTrigger className="w-[280px] bg-white">
                <SelectValue placeholder="Select Timeline">
                  {timelineGroups[activeTimeline].title[language]}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {Object.values(timelineGroups).map((timeline) => (
                  <SelectItem key={timeline.id} value={timeline.id}>
                    {timeline.title[language]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <button
              onClick={() => setShowContent(prev => !prev)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
            >
              {showContent ? (
                <>
                  <EyeOff className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">Hide Content</span>
                </>
              ) : (
                <>
                  <Eye className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">Show Content</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        {Object.values(timelineGroups).map((timeline) => (
          <Timeline
            key={timeline.id}
            timelineData={timeline.data}
            title={timeline.title}
            index={timeline.index}
            language={language}
            isActive={activeTimeline === timeline.id}
            showContent={showContent}
            searchTerm={searchTerm}
            currentMatchIndex={currentMatchIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

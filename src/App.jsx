import React, { useState, useRef, useEffect } from 'react';
import { 
  Globe2, 
  Info, 
  Languages, 
  ChevronDown, 
  Download, 
  Eye, 
  EyeOff,
  FileText,
  Building,
  Scale,
  HeartHandshake,
  Laptop,
  BarChart,
  HelpCircle,
  ChevronRight,  // New icon for index
  ListFilter,      // New icon for index
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


const CategoryIcon = ({ category }) => {
  const iconClass = "w-5 h-5";
  
  const getIconStyle = () => {
    switch (category) {
      case 'complaint':
        return {
          icon: FileText,
          color: 'text-red-500',
          bgColor: 'bg-red-50'
        };
      case 'administration':
        return {
          icon: Building,
          color: 'text-blue-500',
          bgColor: 'bg-blue-50'
        };
      case 'monitoring':
        return {
          icon: Eye,
          color: 'text-purple-500',
          bgColor: 'bg-purple-50'
        };
      case 'governance':
        return {
          icon: Scale,
          color: 'text-green-500',
          bgColor: 'bg-green-50'
        };
      case 'service':
        return {
          icon: HeartHandshake,
          color: 'text-orange-500',
          bgColor: 'bg-orange-50'
        };
      case 'digital':
        return {
          icon: Laptop,
          color: 'text-cyan-500',
          bgColor: 'bg-cyan-50'
        };
      case 'planning':
        return {
          icon: BarChart,
          color: 'text-yellow-500',
          bgColor: 'bg-yellow-50'
        };
      default:
        return {
          icon: HelpCircle,
          color: 'text-gray-500',
          bgColor: 'bg-gray-50'
        };
    }
  };
  
  const { icon: Icon, color, bgColor } = getIconStyle();
  
  return (
    <div className={`${bgColor} p-1.5 rounded-full`}>
      <Icon className={`${iconClass} ${color} stroke-2`} />
    </div>
  );
};
  
const HighlightedText = ({ text, searchTerm, isCurrentMatch }) => {
  if (!searchTerm || !text) return <span>{text}</span>;

  const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
  return (
    <span>
      {parts.map((part, i) => {
        if (part.toLowerCase() === searchTerm.toLowerCase()) {
          return (
            <mark 
              key={i} 
              className={`bg-yellow-200 ${isCurrentMatch ? 'ring-2 ring-blue-500' : ''}`}
            >
              {part}
            </mark>
          );
        }
        return part;
      })}
    </span>
  );
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

const TimelineEntry = ({ data, isActive, onClick, index, language, showContent, searchTerm, isCurrentMatch }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group">
      <div className="flex items-start gap-3">
        <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200" />
        
        <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center ${
          isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
        } text-sm`}>
          {index + 1}
        </div>

        <div className="flex-1 pb-6">
          <div className="flex flex-col gap-2">
            <div 
              className={`cursor-pointer transition-all duration-300 ${
                isActive 
                  ? 'bg-blue-50 border-blue-500 shadow-sm' 
                  : 'bg-white hover:bg-gray-50 border-gray-200'
              } border rounded-lg p-3 flex items-center gap-3 w-full md:w-64`}
              onClick={onClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <CategoryIcon category={data.category} />
              <div>
                <div className="font-medium text-base">
                  <HighlightedText 
                    text={data.year}
                    searchTerm={searchTerm}
                    isCurrentMatch={isCurrentMatch}
                  />
                </div>
                <div className={`text-sm ${isActive ? 'text-blue-800' : 'text-gray-600'}`}>
                  <HighlightedText 
                    text={data.title[language]}
                    searchTerm={searchTerm}
                    isCurrentMatch={isCurrentMatch}
                  />
                </div>
              </div>
            </div>
{showContent && (
  <div 
    className="ml-0 md:ml-4 text-gray-700"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <div className="text-sm whitespace-pre-line"> {/* Add whitespace-pre-line here */}
      <HighlightedText 
        text={data.description[language]}
        searchTerm={searchTerm}
        isCurrentMatch={isCurrentMatch}
      />
    </div>
    {isHovered && (
      <div className="mt-2 p-3 bg-white rounded-lg shadow-md border border-gray-200">
        <div className="text-sm whitespace-pre-line"> {/* Add whitespace-pre-line here too */}
          {data.description[language === 'en' ? 'ne' : 'en']}
        </div>
      </div>
    )}
  </div>
)}
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline = ({ timelineData, title, index, language, isActive, showContent, searchTerm, currentMatchIndex }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);

  const handleIndexClick = (idx) => {
    setActiveIndex(idx);
  };

  const exportToPDF = async (exportLanguage) => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    if (timelineRef.current) {
      try {
        const canvas = await html2canvas(timelineRef.current);
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
        pdf.save(`${title[exportLanguage].replace(/\s+/g, '-').toLowerCase()}.pdf`);
      } catch (error) {
        console.error('Error generating PDF:', error);
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
          <button
            onClick={() => exportToPDF(language)}
            className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors border border-blue-200"
          >
            <Download className="w-4 h-4" />
            Export PDF
          </button>
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
              entry.title.en,
              entry.title.ne,
              entry.description.en,
              entry.description.ne
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

function App() {
  const [language, setLanguage] = useState('en');
  const [activeTimeline, setActiveTimeline] = useState(Object.keys(timelineGroups)[0]);
  const [showContent, setShowContent] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [matchCount, setMatchCount] = useState(0);
 const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Menu Trigger - Always visible in top-left corner */}
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

              <div className="relative flex-1 md:w-[400px]">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search timeline..."
                  className="w-full px-4 py-2 pl-10 pr-24 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                
                {searchTerm && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                    {matchCount > 0 && (
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <span>{currentMatchIndex}/{matchCount}</span>
                        <div className="flex gap-1">
                          <button
                            onClick={prevMatch}
                            className="p-1 hover:bg-gray-100 rounded-full"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button
                            onClick={nextMatch}
                            className="p-1 hover:bg-gray-100 rounded-full"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}
                    <button
                      onClick={() => setSearchTerm('')}
                      className="p-1 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
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

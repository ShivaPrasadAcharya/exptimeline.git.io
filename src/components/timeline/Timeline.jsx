// src/components/timeline/Timeline.jsx
import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import TimelineEntry from './TimelineEntry';
import IndexSection from './IndexSection';
import ExportDropdown from './ExportDropdown';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Timeline = ({ 
  timelineData, 
  title, 
  index, 
  language, 
  isActive, 
  showContent, 
  searchTerm, 
  currentMatchIndex 
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);
  const [isExporting, setIsExporting] = useState(false);

  const handleIndexClick = (idx) => {
    setActiveIndex(idx);
  };

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
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
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
           टिपोटः शिवप्रसाद आचार्य
            <br />
            इजलास अधिकृत, संवैधानिक इजलास (२०८१।०९।२१)
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Timeline;

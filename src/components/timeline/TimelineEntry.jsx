// src/components/timeline/TimelineEntry.jsx
import React, { useState } from 'react';
import CategoryIcon from './CategoryIcon';
import HighlightedText from './HighlightedText';

const TimelineEntry = ({ 
  data, 
  isActive, 
  onClick, 
  index, 
  language, 
  showContent, 
  searchTerm, 
  isCurrentMatch 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group" data-entry-index={index}>
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
                    text={data.year.toString()}
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
                <div className="text-sm whitespace-pre-line">
                  <HighlightedText 
                    text={data.description[language]}
                    searchTerm={searchTerm}
                    isCurrentMatch={isCurrentMatch}
                  />
                </div>
                {isHovered && (
                  <div className="mt-2 p-3 bg-white rounded-lg shadow-md border border-gray-200">
                    <div className="text-sm whitespace-pre-line">
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

export default TimelineEntry;

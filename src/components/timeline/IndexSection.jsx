// src/components/timeline/IndexSection.jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ListFilter } from 'lucide-react';

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

export default IndexSection;

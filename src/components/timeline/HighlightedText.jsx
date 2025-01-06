// src/components/timeline/HighlightedText.jsx
import React from 'react';

// Mapping between Nepali and English numerals
const nepaliToEnglishMap = {
  '०': '0',
  '१': '1',
  '२': '2',
  '३': '3',
  '४': '4',
  '५': '5',
  '६': '6',
  '७': '7',
  '८': '8',
  '९': '9'
};

const englishToNepaliMap = Object.fromEntries(
  Object.entries(nepaliToEnglishMap).map(([key, value]) => [value, key])
);

// Check if string contains only numbers (in either system)
const isNumericString = (str) => /^\d+$/.test(
  str.split('').map(char => nepaliToEnglishMap[char] || char).join('')
);

const HighlightedText = ({ text, searchTerm, isCurrentMatch }) => {
  if (!searchTerm || !text) return text;
  
  const stringifiedText = text.toString();
  
  // If search term is numeric, create pattern for both numeral systems
  if (isNumericString(searchTerm)) {
    let pattern = searchTerm.split('').map(char => {
      const englishNum = nepaliToEnglishMap[char] || char;
      const nepaliNum = englishToNepaliMap[char] || englishToNepaliMap[englishNum] || char;
      return `[${englishNum}${nepaliNum}]`;
    }).join('');
    
    const regex = new RegExp(`(${pattern})`, 'g');
    const parts = stringifiedText.split(regex);
    
    return (
      <span>
        {parts.map((part, i) => {
          if (regex.test(part)) {
            return (
              <mark 
                key={i} 
                className={`${isCurrentMatch ? 'bg-orange-200' : 'bg-yellow-200'}`}
              >
                {part}
              </mark>
            );
          }
          return part;
        })}
      </span>
    );
  }
  
  // For non-numeric search terms, use the original logic
  const parts = stringifiedText.split(new RegExp(`(${searchTerm})`, 'gi'));
  return (
    <span>
      {parts.map((part, i) => {
        if (part.toLowerCase() === searchTerm.toLowerCase()) {
          return (
            <mark 
              key={i} 
              className={`${isCurrentMatch ? 'bg-orange-200' : 'bg-yellow-200'}`}
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

export default HighlightedText;

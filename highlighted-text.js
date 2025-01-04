import React from 'react';

const HighlightedText = ({ text, searchTerm, isCurrentMatch }) => {
  if (!searchTerm || !text) return text;
  
  const parts = text.toString().split(new RegExp(`(${searchTerm})`, 'gi'));
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
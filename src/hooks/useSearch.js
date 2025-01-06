// src/hooks/useSearch.js
import { useState, useEffect } from 'react';

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

// Convert between numeral systems
const convertNumerals = (text) => {
  // Convert Nepali to English
  const englishVersion = text.split('')
    .map(char => nepaliToEnglishMap[char] || char)
    .join('');
  
  // Convert English to Nepali
  const nepaliVersion = text.split('')
    .map(char => englishToNepaliMap[char] || char)
    .join('');
    
  return { englishVersion, nepaliVersion };
};

// Check if string contains only numbers
const isNumericString = (str) => /^\d+$/.test(str.split('').map(char => nepaliToEnglishMap[char] || char).join(''));

export const useSearch = (timelineGroups, activeTimeline, language) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [matchCount, setMatchCount] = useState(0);
  const [matchedEntries, setMatchedEntries] = useState([]);

  useEffect(() => {
    if (!searchTerm) {
      setMatchCount(0);
      setCurrentMatchIndex(0);
      setMatchedEntries([]);
      return;
    }

    const timeline = timelineGroups[activeTimeline];
    const matches = [];
    
    // Convert search term if it's numeric
    const { englishVersion: searchEnglish, nepaliVersion: searchNepali } = convertNumerals(searchTerm);
    const isNumeric = isNumericString(searchTerm);
    
    timeline.data.forEach((entry, index) => {
      const entryTexts = {
        year: entry.year.toString(),
        title: entry.title[language],
        description: entry.description[language]
      };

      // Create search patterns based on whether the search term is numeric
      const searchPatterns = isNumeric 
        ? [searchEnglish, searchNepali] 
        : [searchTerm];
      
      const searchRegexes = searchPatterns.map(pattern => 
        new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')
      );
      
      // Check each field for matches
      Object.entries(entryTexts).forEach(([field, text]) => {
        let isMatch = false;
        let positions = [];
        
        searchRegexes.forEach(regex => {
          let match;
          while ((match = regex.exec(text)) !== null) {
            isMatch = true;
            positions.push({
              start: match.index,
              end: match.index + match[0].length
            });
          }
        });
        
        // If numeric search, also check converted version of the text
        if (isNumeric) {
          const { englishVersion: textEnglish, nepaliVersion: textNepali } = convertNumerals(text);
          [textEnglish, textNepali].forEach(convertedText => {
            searchRegexes.forEach(regex => {
              const originalText = text;
              let match;
              while ((match = regex.exec(convertedText)) !== null) {
                isMatch = true;
                positions.push({
                  start: match.index,
                  end: match.index + match[0].length
                });
              }
            });
          });
        }
        
        if (positions.length > 0) {
          matches.push({
            entryIndex: index,
            field,
            positions: positions.sort((a, b) => a.start - b.start)
          });
        }
      });
    });

    setMatchedEntries(matches);
    setMatchCount(matches.length);
    setCurrentMatchIndex(prev => (prev > matches.length ? 1 : prev));
  }, [searchTerm, activeTimeline, language, timelineGroups]);

  const scrollToMatch = (index) => {
    if (matchedEntries[index - 1]) {
      const match = matchedEntries[index - 1];
      const element = document.querySelector(`[data-entry-index="${match.entryIndex}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.classList.add('search-highlight');
        setTimeout(() => {
          element.classList.remove('search-highlight');
        }, 1000);
      }
    }
  };

  const nextMatch = () => {
    const nextIndex = currentMatchIndex >= matchCount ? 1 : currentMatchIndex + 1;
    setCurrentMatchIndex(nextIndex);
    scrollToMatch(nextIndex);
  };

  const prevMatch = () => {
    const prevIndex = currentMatchIndex <= 1 ? matchCount : currentMatchIndex - 1;
    setCurrentMatchIndex(prevIndex);
    scrollToMatch(prevIndex);
  };

  return {
    searchTerm,
    setSearchTerm,
    currentMatchIndex,
    matchCount,
    nextMatch,
    prevMatch,
    matchedEntries
  };
};

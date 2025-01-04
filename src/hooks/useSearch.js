// src/hooks/useSearch.js
import { useState, useEffect } from 'react';

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
    
    timeline.data.forEach((entry, index) => {
      const entryTexts = {
        year: entry.year.toString(),
        title: entry.title[language],
        description: entry.description[language]
      };

      const searchRegex = new RegExp(searchTerm, 'gi');
      let isMatch = false;
      
      // Check each field for matches
      Object.entries(entryTexts).forEach(([field, text]) => {
        if (text.toLowerCase().includes(searchTerm.toLowerCase())) {
          isMatch = true;
          // Store the match positions for highlighting
          const positions = [];
          let match;
          while ((match = searchRegex.exec(text)) !== null) {
            positions.push({
              start: match.index,
              end: match.index + searchTerm.length
            });
          }
          
          if (positions.length > 0) {
            matches.push({
              entryIndex: index,
              field,
              positions
            });
          }
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
        // Add temporary highlight class
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

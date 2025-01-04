import { useState, useEffect } from 'react';

export const useSearch = (timelineGroups, activeTimeline, language) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [matchCount, setMatchCount] = useState(0);

  useEffect(() => {
    if (!searchTerm) {
      setMatchCount(0);
      setCurrentMatchIndex(0);
      return;
    }

    const timeline = timelineGroups[activeTimeline];
    let count = 0;

    timeline.data.forEach(entry => {
      const entryText = [
        entry.year,
        entry.title[language],
        entry.description[language]
      ].join(' ').toLowerCase();

      if (entryText.includes(searchTerm.toLowerCase())) {
        count++;
      }
    });

    setMatchCount(count);
    setCurrentMatchIndex(prev => (prev > count ? 1 : prev));
  }, [searchTerm, activeTimeline, language, timelineGroups]);

  const nextMatch = () => {
    setCurrentMatchIndex(prev => (prev >= matchCount ? 1 : prev + 1));
  };

  const prevMatch = () => {
    setCurrentMatchIndex(prev => (prev <= 1 ? matchCount : prev - 1));
  };

  return {
    searchTerm,
    setSearchTerm,
    currentMatchIndex,
    matchCount,
    nextMatch,
    prevMatch
  };
};

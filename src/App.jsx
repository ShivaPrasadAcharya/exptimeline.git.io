// src/App.jsx
import React, { useState } from 'react';
import { 
  Globe2, 
  Eye, 
  EyeOff,
  Menu
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Import components
import Timeline from './components/timeline/Timeline';
import SearchBar from './components/SearchBar';
import { useSearch } from './hooks/useSearch';
import { timelineGroups } from './timelineData';

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

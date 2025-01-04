// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ 
  searchTerm, 
  setSearchTerm, 
  matchCount, 
  currentMatchIndex,
  prevMatch,
  nextMatch 
}) => {
  return (
    <div className="relative flex-1 md:w-[400px]">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search timeline..."
        className="w-full px-4 py-2 pl-10 pr-32 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
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
          {matchCount > 0 ? (
            <div className="flex items-center gap-1 text-sm">
              <span className="text-gray-600">
                <span className="font-medium">{currentMatchIndex}</span>
                <span className="mx-1">/</span>
                <span className="font-medium">{matchCount}</span>
                <span className="ml-1 text-gray-400">matches</span>
              </span>
              <div className="flex gap-1">
                <button
                  onClick={prevMatch}
                  className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                  title="Previous match"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextMatch}
                  className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                  title="Next match"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ) : searchTerm.length > 0 ? (
            <span className="text-sm text-gray-500">No matches</span>
          ) : null}
          <button
            onClick={() => setSearchTerm('')}
            className="p-1.5 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
            title="Clear search"
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
  );
};

export default SearchBar;

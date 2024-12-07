import React from 'react';
import { destinations, Destinations } from '@/app/data/destinations';

interface DestinationDropdownProps {
  searchText: string;
  onInputChange: (input: string) => void;
}

const DestinationDropdown: React.FC<DestinationDropdownProps> = ({ searchText, onInputChange }) => {
  // Filter the destinations based on search text
  const filteredDestinations = destinations.filter(dest => 
    dest.label.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="relative">
      {/* Search bar input */}
      <input
        type="text"
        value={searchText}
        onChange={(e) => onInputChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded text-black"
        placeholder="Search for destination"
      />
      
      {/* Show dropdown suggestions if search text is present */}
      {searchText && filteredDestinations.length > 0 && (
        <ul className="absolute w-full bg-white border border-gray-300 mt-1 max-h-60 overflow-auto z-10">
          {filteredDestinations.map((dest) => (
            <li
              key={dest.label}
              className="px-4 py-2 text-black cursor-pointer hover:bg-gray-100"
              onClick={() => onInputChange(dest.label)}  // When clicked, set the selected destination text
            >
              {dest.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DestinationDropdown;

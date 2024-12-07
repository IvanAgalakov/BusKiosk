import React, { useState } from 'react';
import Select, { components, ControlProps } from 'react-select';
import { destinations, Destinations } from '@/app/data/destinations';
import SelectedDestinationCard from '@/app/components/SelectedDestinationCard';

// Custom control styles for dropdown
const controlStyles = {
  border: 'none',
  padding: '5px',
  background: 'none',
  color: 'black',
};

// Custom Control Component
const ControlComponent = (props: ControlProps<Destinations, false>) => (
  <div style={controlStyles}>
    <components.Control {...props} />
  </div>
);

interface DestinationDropdownProps {
  searchText: string; // Text from the keyboard or other input source
  onDestinationSelect: (destination: Destinations | null) => void; // Callback for destination selection
}

export default function DestinationDropdown({
  searchText,
  onDestinationSelect,
}: DestinationDropdownProps) {
  const [selectedDestination, setSelectedDestination] = useState<Destinations | null>(null);

  const handleSelectChange = (destination: Destinations | null) => {
    setSelectedDestination(destination);
    onDestinationSelect(destination); // Inform parent of the selection
  };

  return (
    <div>
      <Select
        isClearable
        components={{ Control: ControlComponent }}
        isSearchable
        name="destination"
        options={destinations}
        styles={{
          option: (baseStyles) => ({
            ...baseStyles,
            color: 'black', // Adjusted for visibility
            position: 'static',
            width: '100%',
            borderRadius: '15px',
          }),
        }}
        value={selectedDestination}
        onChange={handleSelectChange}
        inputValue={searchText} // Sync with keyboard input
        onInputChange={(value) => handleSelectChange(null)} // Clear selection when input changes
      />
      {/* Display route select buttons */}
      <SelectedDestinationCard
        label={selectedDestination?.label}
        routes={selectedDestination?.routes}
      />
    </div>
  );
}

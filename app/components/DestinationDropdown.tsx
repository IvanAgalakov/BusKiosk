import React, { useState } from 'react';
import Select, { components, ControlProps } from 'react-select';
import { destinations, Destinations, getDestinations } from '@/app/data/destinations';
import SelectedDestinationCard from '@/app/components/SelectedDestinationCard';
import { translate } from '../data/translate'; // Assuming you still need to translate

//source: https://react-select.com/components#replaceable-components

const controlStyles = {
  border: 'none',
  padding: '5px',
  background: 'none',
  color: 'black',
};

const ControlComponent = (props: ControlProps<Destinations, false>) => (
  <div style={controlStyles}>
    <components.Control {...props} />
  </div>
);

interface DestinationSelectorProps {
  language: string;
}

const DestinationSelector: React.FC<DestinationSelectorProps> = ({ language }) => {
  const [selectedDestination, setSelectedDestination] = useState<Destinations | null>(null);

  return (
    <div>
      <Select
        isClearable
        components={{ Control: ControlComponent }}
        isSearchable
        name="destination"
        options={getDestinations(language)}
        styles={{
          option: (baseStyles, state) => ({
            ...baseStyles,
            color: 'grey',
            position: 'static',
            width: '100%',
            borderRadius: '15px',
          }),
        }}
        value={selectedDestination}
        onChange={setSelectedDestination}
        placeholder={translate('⌕ Search...', language)}
      />
      <div className="mx-auto">
        <SelectedDestinationCard label={selectedDestination?.label} routes={selectedDestination?.routes} />
      </div>
    </div>
  );
};

export default DestinationSelector;

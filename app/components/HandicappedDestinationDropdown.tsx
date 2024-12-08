import React, { useState } from 'react';

import Select, { components, ControlProps } from 'react-select';
import { destinations, Destinations } from '@/app/data/destinations';
import SelectedDestinationCard from '@/app/components/SelectedDestinationCard'

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


export default () => {
  const [selectedDestination, setSelectedDestination] = useState<Destinations | null>(null);


  return(
    <div >
    <div className="mx-auto">
      <SelectedDestinationCard label = {selectedDestination?.label} routes = {selectedDestination?.routes}/>
    </div>
    <Select
      isClearable
      components={{ Control: ControlComponent }}
      isSearchable
      name="destination"
      options={destinations}
      styles={{
        option: (baseStyles, state) => ({
          ...baseStyles,
          color: 'grey',
          position: 'static',
          width: '100%',
          borderRadius: '15px'
          
        }),
      }}
      value = {selectedDestination}
      onChange = {setSelectedDestination}
      menuPlacement='top'
    />

  </div>
  );
};
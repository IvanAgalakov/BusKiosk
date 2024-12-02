import React from 'react';

import Select, { components, ControlProps } from 'react-select';
import { destinations, Destinations } from '@/app/data/destinations';
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

export default () => (
  <Select
    isClearable
    components={{ Control: ControlComponent }}
    isSearchable
    name="destination"
    options={destinations}
    styles={{
      option: (baseStyles, state) => ({
        ...baseStyles,
        color: 'grey'
      }),
    }}
  />
);
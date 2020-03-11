import React from 'react';

/* Font awesome icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default () => {
  return (
    <div className = 'cursor-pointer'>
      <div id = 'menuToggle' className = 'block relative select-none text-2xl text-gray-700 transition-colors duration-500 ease-in-out hover:text-gray-800'>
        <FontAwesomeIcon icon = { faBars } />
      </div>
    </div>
  );
};

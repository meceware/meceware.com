import React from 'react';
import loadable from '@loadable/component';

/* Font awesome icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavMenuScript = loadable( () => import( './menu-script' ) );

export default ( props ) => {
  return (
    <div className = 'cursor-pointer'>
      <div id = 'menuToggle' className = 'block relative select-none text-2xl text-gray-700 transition-colors duration-500 ease-in-out hover:text-gray-800'>
        <FontAwesomeIcon icon = { faBars } />
      </div>
      <NavMenuScript fixed = { props.fixed } />
    </div>
  );
};

import React from 'react';
import classNames from 'classnames';
import Link from './link';

/* Font awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ( props ) => {
  const iconColors = props.color || 'text-gray-600 hover:text-gray-700';
  const iconsSize = props.icons.length;
  return (
    <div className = { props.className || 'block relative my-2 text-center text-xl' } >
      { props.icons.map( ( icon, index ) => {
        return (
          <div
            id = { icon.id }
            className = {
              classNames(
                'inline-block transition-colors duration-500 ease-in-out w-6 sm:mx-2',
                { 'mx-2': index !== 0 && index !== iconsSize - 1 },
                { 'ml-2': index === 0 },
                { 'mr-2': index === iconsSize - 1 },
                icon.className,
                iconColors,
              )
            }
            key = { `icon-${ index }` }
          >
            <Link to = { icon.link || '/' } out = { icon.out || undefined } className = 'no-underline' target = { icon.target || undefined } >
              <FontAwesomeIcon icon = { icon.icon } />
            </Link>
          </div>
        );
      } ) }
    </div>
  );
};

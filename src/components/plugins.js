import React from 'react';
import classNames from 'classnames';

import Link from './link';

export default ( props ) => {
  return (
    <div className = 'flex flex-wrap items-stretch justify-center'>
      { props.plugins.map( plugin => {
        return (
          <div className = 'flex relative w-full sm:w-1/2 xl:w-1/3 p-2 max-w-md' key = { plugin.title }>
            <Link to = { plugin.link || '#' } out = { plugin.out } target = { plugin.target } className = 'w-full relative block'>
              <div className = { classNames( 'w-full h-full flex-shrink-0 relative overflow-hidden rounded-lg shadow-lg transition-background duration-500 ease-in-out', plugin.className ) }>
                <svg className = 'absolute bottom-0 right-0 opacity-01' viewBox = '0 0 375 283' fill = 'none' >
                  <rect x = '159.52' y = '175' width = '152' height = '152' rx = '8' transform = 'rotate(-45 159.52 175)' fill = 'white' />
                  <rect y = '107.48' width = '152' height = '152' rx = '8' transform = 'rotate(-45 0 107.48)' fill = 'white' />
                </svg>
                <div className = 'relative text-white p-6'>
                  <span className = 'block opacity-75 -mb-1 text-sm'>{ plugin.desc }</span>
                  <span className = 'block font-semibold text-xl'>{ plugin.title }</span>
                </div>
              </div>
            </Link>
          </div>
        );
      } ) }
    </div>
  );
};

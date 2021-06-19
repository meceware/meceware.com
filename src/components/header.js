import React, { Fragment } from 'react';
import classNames from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';

/* Font awesome */
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Icons from './icons';
import Link from './link';
import NavMenu from './menu';

const Header = ( props ) => {
  return (
    <Fragment>
      <header className = { classNames(
        'bg-body flex flex-initial flex-col border border-r-0 border-t-0 border-l-0 border-gray-400 border-solid',
        { 'fixed z-20 left-0 right-0 top-0 px-4': props.fixed },
        { relative: ! props.fixed },
      ) } >
        <div className = 'container mx-auto' >
          <div className = 'relative select-none bg-grey flex items-stretch w-full'>
            <div className = 'flex flex-shrink-0 items-stretch h-12 my-1'>
              <div className = 'flex-no-grow flex-shrink-0 relative py-1 px-0 sm:px-2 leading-normal flex items-center'>
                <Link to = '/' className = 'group flex items-center'>
                  <StaticImage
                    alt = 'meceware.com Logo'
                    src = '../images/mcw_fav.png'
                    placeholder = 'blurred'
                    layout = 'fullWidth'
                    className = 'inline-block select-none w-8 h-auto mx-auto opacity-75 transition duration-500 ease-in-out transform group-hover:opacity-100 group-hover:scale-110'
                  />
                  <div className = 'inline-block relative py-1 px-2 leading-normal text-lg text-gray-700 group-hover:text-gray-900 transition duration-500 ease-in-out transform'>
                    <span className = 'font-bold'>meceware</span><span className = 'text-sm text-gray-600 group-hover:text-gray-700'>.com</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className = 'flex items-stretch flex-shrink-0 flex-grow'>
              <div className = 'flex items-stretch justify-end ml-auto'>
                <div className = 'flex-no-grow flex-shrink-0 relative py-1 px-1 leading-normal flex items-center'>
                  { props.icons && (
                    <Icons icons = { [
                      { link: '/docs/', icon: faFileAlt },
                      { link: '/contact/', icon: faEnvelope },
                      { link: 'https://github.com/meceware', icon: faGithub, target: '_blank' },
                    ] } />
                  ) }

                </div>
                <div className = 'flex-no-grow flex-shrink-0 relative py-1 px-2 lg:px-4 leading-normal text-white no-underline flex items-center' style = { { maxWidth: '4rem' } }>
                  <NavMenu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

Header.defaultProps = {
  icons: true,
};

export default Header;

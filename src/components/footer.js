import React, { Fragment } from 'react';
import Link from './link';
import { withPrefix } from 'gatsby';
import loadable from '@loadable/component';

const NavMenuScript = loadable( () => import( './menu-script' ) );

export default ( props ) => {
  return (
    <Fragment>
      <footer className = 'relative flex flex-initial border border-r-0 border-b-0 border-l-0 border-gray-400 border-solid'>
        <div className = 'w-full py-4'>
          <p className = 'block relative text-gray-500 text-center text-sm cursor-default'>© { new Date().getFullYear() } — All Rights Reserved <br /><span className = 'font-bold'><Link to = '/'>meceware.com</Link></span></p>
        </div>
      </footer>
      <div id = 'menu-wrapper' className = 'hemenu'>
        <div className = 'hemenu-content'>
          <div className = 'hemenu-menu'>
            <nav id = 'menu' className = 'bg-body'>
              <ul>
                <li><Link to = '/' activeClassName = 'selected'>Home</Link></li>
                <li><Link to = '/docs/' activeClassName = 'selected'>Documentation</Link></li>
                <li><span>FullPage for Elementor</span>
                  <ul>
                    <li><Link to = 'https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/' out = { true } target = '_blank'>Buy Now!</Link></li>
                    <li><Link to = '/docs/fullpage-for-elementor/' activeClassName = 'selected'>Documentation</Link></li>
                    <li><Link to = { withPrefix( '/fullpage-for-elementor/' ) } out = { true }>FullPage Demo</Link></li>
                    <li><Link to = { withPrefix( '/fullpage-for-elementor/responsive-mode/' ) } out = { true }>Responsive FullPage</Link></li>
                    <li><Link to = { withPrefix( '/fullpage-for-elementor/scroll-overflow/' ) } out = { true }>Scroll Overflow</Link></li>
                    <li><Link to = { withPrefix( '/fullpage-for-elementor/scrollbars/' ) } out = { true }>Scroll Bars</Link></li>
                    <li><Link to = { withPrefix( '/fullpage-for-elementor/page-piling/' ) } out = { true }>Page Piling</Link></li>
                  </ul>
                </li>
                <li><span>FullPage for Divi</span>
                  <ul>
                    <li><Link to = 'https://alvarotrigo.com/fullPage/wordpress-plugin-divi/' out = { true } target = '_blank'>Buy Now!</Link></li>
                    <li><Link to = '/docs/fullpage-for-divi/' activeClassName = 'selected'>Documentation</Link></li>
                    <li><Link to = { withPrefix( '/fullpage-for-divi/' ) } out = { true }>FullPage Demo</Link></li>
                    <li><Link to = { withPrefix( '/fullpage-for-divi/responsive-mode/' ) } out = { true }>Responsive FullPage</Link></li>
                    <li><Link to = { withPrefix( '/fullpage-for-divi/scroll-overflow/' ) } out = { true }>Scroll Overflow</Link></li>
                    <li><Link to = { withPrefix( '/fullpage-for-divi/scrollbars/' ) } out = { true }>Scroll Bars</Link></li>
                    <li><Link to = { withPrefix( '/fullpage-for-divi/page-piling/' ) } out = { true }>Page Piling</Link></li>
                  </ul>
                </li>
                <li><span>FullPage for Gutenberg</span>
                  <ul>
                    <li><Link to = 'https://alvarotrigo.com/fullPage/wordpress-plugin-gutenberg/' out = { true } target = '_blank'>Buy Now!</Link></li>
                    <li><Link to = '/docs/fullpage-for-gutenberg/' activeClassName = 'selected'>Documentation</Link></li>
                    <li><Link to = '/fullpage-for-gutenberg/' out = { true }>FullPage Demo</Link></li>
                    <li><Link to = '/fullpage-for-gutenberg/responsive-mode/' out = { true }>Responsive FullPage</Link></li>
                    <li><Link to = '/fullpage-for-gutenberg/scroll-overflow/' out = { true }>Scroll Overflow</Link></li>
                    <li><Link to = '/fullpage-for-gutenberg/scrollbars/' out = { true }>Scroll Bars</Link></li>
                    <li><Link to = '/fullpage-for-gutenberg/page-piling/' out = { true }>Page Piling</Link></li>
                    <li><Link to = '/fullpage-for-gutenberg/video-background/' out = { true }>Video Background</Link></li>
                  </ul>
                </li>
                <li><span>Block Permissions</span>
                  <ul>
                    <li><Link to = 'https://wordpress.org/plugins/block-permissions/' out = { true } target = '_blank'>Download</Link></li>
                    <li><Link to = '/docs/block-permissions-for-gutenberg/' activeClassName = 'selected'>Documentation</Link></li>
                  </ul>
                </li>
                <li><span>Custom JS & CSS for Gutenberg</span>
                  <ul>
                    <li><Link to = '/contact' out = { true }>Buy Now!</Link></li>
                    <li><Link to = '/docs/custom-js-css-gutenberg/' activeClassName = 'selected'>Documentation</Link></li>
                  </ul>
                </li>
                <li><Link to = 'https://meceware.github.io/iwideo/' out = { true } target = '_blank'>iWideo</Link></li>
                <li><Link to = 'https://github.com/meceware/heMenu/' out = { true } target = '_blank'>heMenu</Link></li>
                <li><Link to = '/contact/' activeClassName = 'selected'>Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <NavMenuScript fixed = { props.fixed } />
    </Fragment>
  );
};

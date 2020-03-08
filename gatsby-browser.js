import './src/css/style.css';
import './third-party/heMenu/dist/hemenu.min.css';
import './node_modules/mhead-js/dist/mhead.css';

import './third-party/heMenu/dist/hemenu.min.js';

// export const disableCorePrefetching = () => true;

// export const onPreRouteUpdate = ( { location, prevLocation } ) => {};

export const onRouteUpdate = ( { location, prevLocation } ) => {
  // Static pages don't use route
  // TODO: find a better way
  if ( prevLocation && location && prevLocation.pathname !== location.pathname ) {
    if (
      location.pathname.startsWith( '/fullpage-for-elementor' ) ||
      location.pathname.startsWith( '/fullpage-for-gutenberg' ) ||
      location.pathname.startsWith( '/fullpage-for-wpbakery-page-builder' ) ||
      location.pathname.startsWith( '/elements-for-users' )
    ) {
      window.location.href = location.pathname;
    }
  }
};

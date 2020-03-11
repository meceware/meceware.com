import React, { Fragment } from 'react';
import 'mhead-js';

class NavMenuScript extends React.Component {
  componentDidMount() {
    new window.heMenu( '#menu-wrapper', {
      trigger: '#menuToggle',
      menu: '.hemenu-menu',
      title: 'Menu',
      selected: 'selected',
      theme: 'light',
      position: 'right',
    } );
    if ( ! this.props.fixed ) {
      new window.Mhead( 'header' );
    }

    // TODO: Disable router for out links, otherwise 404 error is returned
    const links = document.querySelectorAll( 'a[data-out]' );
    for ( const link of links ) {
      link.addEventListener( 'click', function( event ) {
        event.stopImmediatePropagation();
        return true;
      } );
    }
  }

  componentWillUnmount() {
    window.heMenu.destroy();
  }

  render() {
    return (
      <Fragment>
        { /* Nothing to render */ }
      </Fragment>
    );
  }
}

NavMenuScript.defaultProps = {
  fixed: false,
};

export default NavMenuScript;

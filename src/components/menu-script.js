import React, { Fragment } from 'react';
import 'mhead-js';

class NavMenuScript extends React.Component {
  componentDidMount() {
    window.heMenu.scan();
    if ( ! this.props.fixed ) {
      new window.Mhead( 'header' );
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

import React, { Fragment } from 'react';
import 'mhead-js';
import heMenu from '../../third-party/hemenu';

class NavMenuScript extends React.Component {
  componentDidMount() {
    heMenu.scan();
    if ( ! this.props.fixed ) {
      new window.Mhead( 'header' );
    }
  }

  componentWillUnmount() {
    heMenu.destroy();
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

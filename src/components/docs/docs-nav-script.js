import React, { Fragment } from 'react';
import SmoothScroll from 'smooth-scroll';

// Initializes smooth scroll on links
class DocsNavScript extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      initialized: undefined,
    };
  }

  componentDidMount() {
    this.setState( {
      initialized: new SmoothScroll(
        'a[href*="#"]',
        {
          header: 'header',
          speed: 500,
          speedAsDuration: true,
          popstate: false,
        },
      ),
    } );
  }

  componentWillUnmount() {
    if ( this.state.initialized ) {
      this.state.initialized.destroy();
    }
  }

  render() {
    return (
      <Fragment>
        { /* Nothing to render */ }
      </Fragment>
    );
  }
}

export default DocsNavScript;

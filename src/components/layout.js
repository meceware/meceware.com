import React from 'react';
import classNames from 'classnames';

import Header from '../components/header';
import Footer from '../components/footer';

export default ( props ) => {
  return (
    <div id = 'site' className = 'flex flex-col min-h-screen relative px-4'>
      <Header fixed = { props.fixed } />
      <main className = { classNames(
        'relative flex flex-auto content-center flex-wrap -mx-4 p-4',
        { 'mt-12': props.fixed },
        props.mainClassName,
      ) } >
        { props.children }
      </main>
      <Footer />
    </div>
  );
};

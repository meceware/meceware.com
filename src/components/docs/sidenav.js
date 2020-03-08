import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import classNames from 'classnames';

import Link from '../link';

const DocsSideNav = ( props ) => {
  const docs = props.docs;
  const groups = {};
  for ( const key in props.docs ) {
    if ( ! groups[ docs[ key ].node.frontmatter.group ] ) {
      groups[ docs[ key ].node.frontmatter.group ] = {};
    }
    groups[ docs[ key ].node.frontmatter.group ][ docs[ key ].node.frontmatter.id ] = { ...docs[ key ].node.frontmatter };
  }

  return (
    <div className = { classNames(
      'docs-nav-container hidden lg:block lg:pt-0 lg:sticky lg:mr-4 lg:overflow-y-auto lg:self-start transition duration-500 ease-in-out transform',
    ) }>
      <nav className = 'relative'>
        <div className = { classNames(
          'relative p-4 lg:block lg:p-0 transition duration-500 ease-in-out transform',
        ) }>
          { Object.keys( groups ).map( title => {
            return (
              <div className = 'mb-4' key = { title }>
                <h3 className = 'font-semibold text-xl leading-8 text-gray-700'>{ title }</h3>
                <ul className = 'p-2'>
                  { Object.values( groups[ title ] ).map( doc => {
                    // TODO: active class name
                    return (
                      <li
                        className = { classNames(
                          'text-sm leading-8 hover:text-blue-900',
                          { 'text-blue-600': props.active === doc.id },
                          { 'text-gray-800': props.active !== doc.id },
                        ) }
                        key = { doc.id }
                      >
                        <Link to = { `/docs/${ doc.id }/` } className = 'no-underline'>
                          { doc.title }
                        </Link>
                      </li>
                    );
                  } ) }
                </ul>
              </div>
            );
          } ) }
        </div>
      </nav>
    </div>
  );
};

export default props => (
  <StaticQuery
    query = { graphql`
      query {
        allMarkdownRemark(sort: {fields: frontmatter___sort}) {
          edges {
            node {
              frontmatter {
                id
                title
                group
              }
            }
          }
        }
      }
    ` }
    render = { data => <DocsSideNav docs = { data.allMarkdownRemark.edges } { ...props } /> }
  />
);

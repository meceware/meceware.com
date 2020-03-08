import React, { Component, Fragment } from 'react';
import { graphql } from 'gatsby';
import classNames from 'classnames';
import loadable from '@loadable/component';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Section from '../components/section';
import DocsSideNav from '../components/docs/sidenav';

const DocsNavScript = loadable( () => import( '../components/docs/docs-nav-script' ) );

export default class DocsTemplate extends Component {
  render() {
    const { data } = this.props;
    if ( ! data ) {
      return null;
    }

    const { single } = data;

    return (
      <Fragment>
        <SEO
          title = { `${ single.frontmatter.title } Documentation` }
          description = { single.frontmatter.description }
        />
        <Layout fixed = { true } mainClassName = 'docs-main bg-white' >
          <Section>
            <div className = 'block'>
              <div className = 'doc-wrapper py-4 block relative lg:p-4 md:flex md:flex-row md:flex-no-wrap'>
                <DocsSideNav active = { this.props.pageContext.id } />
                <div className = 'docs-container flex-1 md:mx-4 xl:mx-8 max-w-full'>
                  <div className = 'block relative'>
                    <div className = 'mb-4'>
                      <h1 className = 'text-4xl font-bold text-gray-900 text-center'>{ single.frontmatter.title }</h1>
                    </div>
                    <article
                      className = 'markdown'
                      dangerouslySetInnerHTML = { { __html: single.html } }
                    />
                  </div>
                </div>
                <div className = { classNames(
                  'docs-toc hidden overflow-y-auto md:block md:sticky md:ml-4',
                ) } >
                  <nav
                    className = 'border-l border-solid border-gray-400 py-2 pl-4'
                    dangerouslySetInnerHTML = { { __html: single.tableOfContents } }
                  >
                  </nav>
                </div>
              </div>
            </div>
          </Section>
          <DocsNavScript />
        </Layout>
      </Fragment>
    );
  }
}

export const pageQuery = graphql`
  query( $id: String! ) {
    single: markdownRemark(frontmatter: { id: { eq: $id } }) {
      html
      frontmatter {
        id
        title
        description
      }
      headings {
        depth
        value
      }
      tableOfContents(
        absolute: false,
        maxDepth: 3,
        heading: ""
      )
    }
  }
`;

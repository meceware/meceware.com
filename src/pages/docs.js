import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/* SEO */
import SEO from '../components/seo';
import Layout from '../components/layout';
import Section from '../components/section';

import Link from '../components/link';

const DocsCard = ( { doc } ) => {
  return (
    <div className = 'w-full px-0 lg:px-8 my-4 w-full sm:px-4 sm:w-1/2 xl:w-1/3'>
      <div className = 'bg-white rounded-lg overflow-hidden shadow-md relative'>
        <Img
          className = 'h-auto w-full object-cover object-center'
          fluid = { doc.featuredImage.childImageSharp.fluid }
          alt = { doc.description }
        />
        <div className = 'flex flex-col p-4 h-auto md:h-40 lg:h-48'>
          <Link to = { `/docs/${ doc.id }/` } className = 'flex-initial block text-blue-600 hover:text-blue-500 font-semibold mb-2 text-lg md:text-base lg:text-lg transition-colors duration-500 ease-in-out'>
            { doc.title }
          </Link>
          <div className = 'flex-auto text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm'>
            { doc.description }
          </div>
          <div className = 'relative flex-initial mt-4'>
            <Link to = { `/docs/${ doc.id }/` } className = 'cursor-pointer bg-blue-600 hover:bg-blue-500 shadow px-5 py-2 inline-block text-blue-100 hover:text-white rounded transition-background duration-500 ease-in-out'>docs</Link>
            <div className = 'inline-block mx-2'></div>
            <Link to = { doc.link } out = { true } target = '_blank' className = 'cursor-pointer bg-green-600 hover:bg-green-500 shadow px-5 py-2 inline-block text-green-100 hover:text-white rounded transition-background duration-500 ease-in-out'>{ doc.button }</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const DocsCards = props => (
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
                description
                link
                button
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 768) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    ` }
    // render = { data =>  }
    render = { data => {
      return data.allMarkdownRemark.edges.map( node => <DocsCard key = { node.node.frontmatter.id } doc = { node.node.frontmatter } { ...props } /> );
    } }
  />
);

export default () => {
  return (
    <Fragment>
      <SEO
        title = 'Docs'
        description = 'The documentation index for plugins and libraries developed by meceware.'
      />
      <Layout>
        <Section>
          <div className = 'block px-4'>
            <div className = 'flex flex-wrap -mx-1 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-4 xl:-mx-3'>
              <DocsCards />
            </div>
          </div>
        </Section>

      </Layout>
    </Fragment>
  );
};

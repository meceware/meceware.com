import React, { Fragment } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

/* Font awesome */
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

/* SEO */
import SEO from '../components/seo';
import Layout from '../components/layout';
import Section from '../components/section';
import Icons from '../components/icons';
import Plugins from '../components/plugins';

const PageIndex = () => {
  return (
    <Fragment>
      <SEO />
      <Layout>
        <Section>
          <div className = 'relative mt-2 mb-1 text-center'>
            <div className = 'block'>
              <StaticImage
                alt = 'meceware.com Logo'
                src = '../images/mcw_fav.png'
                placeholder = 'blurred'
                layout = 'fullWidth'
                className = 'select-none w-12 h-auto mx-auto opacity-75 transition duration-500 ease-in-out transform hover:opacity-100 hover:scale-110'
              />
            </div>
            <div className = 'block'>
              <h1 className = 'font-bold text-4xl text-gray-700 cursor-default select-none'>mehmet celik</h1>
            </div>
            <div className = 'block'>
              <div className = 'flex items-center justify-center'>
                <div className = 'relative mx-4 sm:mx-3 text-3xl sm:text-xl'><span className = 'text-gray-600 opacity-50 select-none'>&#123;</span></div>
                <div className = 'relative'>
                  <div className = 'block sm:inline-block text-xl text-gray-600 cursor-default select-none'>senior software engineer</div>
                </div>
                <div className = 'relative mx-4 sm:mx-3 text-3xl sm:text-xl'><span className = 'text-gray-600 opacity-50 select-none'>&#125;</span></div>
              </div>
            </div>
          </div>
          <Icons icons = { [
            { link: '/contact', icon: faEnvelope },
            { link: 'https://github.com/meceware', icon: faGithub, target: '_blank' },
          ] } />
        </Section>

        <Section>
          <Plugins plugins = {
            [
              {
                className: 'bg-yellow-500 hover:bg-yellow-600',
                desc: 'WordPress Plugin',
                title: 'FullPage for Elementor',
                link: '/fullpage-for-elementor/',
                out: true,
              },
              {
                className: 'bg-purple-500 hover:bg-purple-600',
                desc: 'WordPress Plugin',
                title: 'FullPage for Divi',
                link: '/fullpage-for-divi/',
                out: true,
              },
              {
                className: 'bg-teal-500 hover:bg-teal-600',
                desc: 'WordPress Plugin',
                title: 'FullPage for Gutenberg',
                link: '/fullpage-for-gutenberg/',
                out: true,
              },
              {
                className: 'bg-red-500 hover:bg-red-600',
                desc: 'WordPress Plugin',
                title: 'Custom JS & CSS for Gutenberg',
                link: '/docs/custom-js-css-gutenberg/',
              },
              {
                className: 'bg-pink-500 hover:bg-pink-600',
                desc: 'WordPress Plugin',
                title: 'Block Permissions',
                link: '/docs/block-permissions-for-gutenberg/',
              },
              {
                className: 'bg-indigo-500 hover:bg-indigo-600',
                desc: 'JavaScript Library',
                title: 'iWideo',
                link: 'https://meceware.github.io/iwideo/',
                target: '_blank',
                out: true,
              },
              {
                className: 'bg-green-500 hover:bg-green-600',
                desc: 'JavaScript Library',
                title: 'heMenu',
                link: 'https://github.com/meceware/heMenu/',
                target: '_blank',
                out: true,
              },
            ]
          } />
        </Section>
      </Layout>
    </Fragment>
  );
};

export default PageIndex;

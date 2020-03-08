import React, { Fragment } from 'react';

/* Font awesome */
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

/* SEO */
import SEO from '../components/seo';
import Layout from '../components/layout';
import Section from '../components/section';
import Icons from '../components/icons';
import Plugins from '../components/plugins';

/* Fav icon */
import McwLogo from '../images/mcw_fav.png';

export default () => {
  return (
    <Fragment>
      <SEO />
      <Layout>
        <Section>
          <div className = 'relative mt-2 mb-1 text-center'>
            <div className = 'block'>
              <img alt = 'meceware.com Logo' src = { McwLogo } className = 'select-none w-12 h-auto mx-auto opacity-75 transition duration-500 ease-in-out transform hover:opacity-100 hover:scale-110' />
            </div>
            <div className = 'block'>
              <h1 className = 'font-title font-bold text-4xl text-gray-700 cursor-default select-none'>mehmet celik</h1>
            </div>
            <div className = 'block'>
              <div className = 'flex items-center justify-center'>
                <div className = 'relative mx-4 sm:mx-3 text-3xl sm:text-xl'><span className = 'text-gray-600 opacity-50 select-none'>&#123;</span></div>
                <div className = 'relative'>
                  <div className = 'block sm:inline-block text-xl text-gray-600 cursor-default select-none'>software engineer</div>
                  <div className = 'hidden sm:inline-block text-xl text-gray-600 opacity-50 mx-2 cursor-default select-none'>/</div>
                  <div className = 'block sm:inline-block text-xl text-gray-600 cursor-default select-none'>backend developer</div>
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
                className: 'bg-orange-500 hover:bg-orange-600',
                desc: 'WordPress Plugin',
                title: 'FullPage for Elementor',
                link: '/fullpage-for-elementor/',
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
                className: 'bg-blue-500 hover:bg-blue-600',
                desc: 'WordPress Plugin',
                title: 'FullPage for WPBakery Page Builder',
                link: '/fullpage-for-wpbakery-page-builder/',
                out: true,
              },
              {
                className: 'bg-red-500 hover:bg-red-600',
                desc: 'WordPress Plugin',
                title: 'Custom JS & CSS for Gutenberg',
                link: '/docs/custom-js-css-gutenberg/',
              },
              {
                className: 'bg-purple-500 hover:bg-purple-600',
                desc: 'WordPress Plugin',
                title: 'Elements for Users',
                link: '/elements-for-users/',
                out: true,
              },
              {
                className: 'bg-pink-500 hover:bg-pink-600',
                desc: 'WordPress Plugin',
                title: 'Block Permissions',
                link: '/docs/block-permissions-for-gutenberg/',
              },
              {
                className: 'bg-indigo-500 hover:bg-indigo-600',
                desc: 'Javascript Library',
                title: 'iWideo',
                link: 'https://meceware.github.io/iwideo/',
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

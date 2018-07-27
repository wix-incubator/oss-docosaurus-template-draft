/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/wix_header.png',
    infoLink: 'https://wix.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Quix' /* title for your website */,
  tagline: 'Insights, data trends, and customer behavior metrics collected from the combines external data from multiple sources.',
  url: 'https://wix-incubator.github.io' /* your website url */,
  baseUrl: '/oss-docosaurus-template-draft/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'oss-docosaurus-template-draft',
  organizationName: 'wix-incubator',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'discover/getting_started', label: 'discover'},
    {doc: 'basic_use/intro', label: 'use'},
    {doc: 'doc6', label: 'develop'},
    {doc: 'doc8', label: 'learn'},
    {doc: 'formatting', label: 'format'},
    {page: 'help', label: 'contribute'},
    { search: true },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/wix_header2.png',
  footerIcon: 'img/wix.png',
  favicon: 'img/favicon.png',

  /* colors for website */
  colors: {
    primaryColor: '#EB5E51',
    secondaryColor: '#EB5E51',
  },

  cleanUrl: true,

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Wix.com ltd ',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/wix.png',
  twitterImage: 'img/wix.png',

  algolia: {
    apiKey: 'my-api-key',
    indexName: 'my-index-name',
    algoliaOptions: {} // Optional, if provided by Algolia
  },

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;

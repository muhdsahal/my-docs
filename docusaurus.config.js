// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docusaurus Docs Guide',
  tagline: 'Learn how to create and host documentation using Docusaurus',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // 🔗 Change this based on hosting
  url: 'https://yourusername.github.io', // GitHub Pages OR Vercel domain
  baseUrl: '/docusaurus-docs/', // repo name (use '/' for Vercel)

  organizationName: 'yourusername', // GitHub username
  projectName: 'docusaurus-docs', // GitHub repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // makes docs load at homepage
          editUrl:
            'https://github.com/yourusername/docusaurus-docs/edit/main/',
        },
        blog: false, // ❌ disable blog (docs-only site)
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',

    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Docusaurus Guide',
      // logo: {
      //   alt: 'Docusaurus Guide Logo',
      //   src: '/static/img/logo.svg',
      // },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          label: 'Documentation',
          position: 'left',
        },
        {
          href: 'https://github.com/yourusername/docusaurus-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/intro',
            },
            {
              label: 'Hosting Guide',
              to: '/hosting',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/yourusername/docusaurus-docs',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Sahal. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
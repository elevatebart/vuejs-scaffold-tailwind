const path = require('path');
const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project 
  content: [
    '../../src/**/*.vue',
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  postcss: {
    plugins: [
      require('tailwindcss')(path.join(__dirname, '../../tailwind.config.js')),
      require('autoprefixer')({
        add: true,
        grid: true
      }),
      ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
    ],
  },
  plugins: [
    ['live'],
    ['docgen', {
      componentsDir: path.join(__dirname, '../../src/components')
    }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, '../../src')
      }
    }
  }
}
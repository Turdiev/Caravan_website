/*
  autoprefixer - https://github.com/postcss/autoprefixer
  cssnano - https://github.com/hail2u/node-css-mqpacker
  css-mqpacker - HAS BEEN REMOVED! Do not use!
*/
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project 
  content: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})


module.exports = {
  plugins: [
    require('autoprefixer'),
    require('tailwindcss'),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true
          }
        }
      ]
    }),
    ...process.env.NODE_ENV === 'production'
    ? [purgecss]
    : []
  ]
}

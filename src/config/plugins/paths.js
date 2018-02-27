const {resolve, join} = require('path')
const projectRoot = resolve(__dirname, '..', '..', '..')

module.exports = {
  projectRoot,
  distribution: join(projectRoot, 'web'),
  // Metalsmith
  metalsmithSource: 'content',
  metalsmithDestination: join(projectRoot, 'web'),
  // Webpack
  webpackSource: join(projectRoot, 'assets'),
  webpackDestination: join(projectRoot, 'src', 'assets'),
  webpackPublicPath: '/assets/',
  // Server
  serverRoot: './web',
  pageBasePath: process.env.NODE_ENV !== 'production' ? '' : './web',
  // Favicons
  faviconDestination: 'assets/favicons',
  faviconPublicPath: '/assets/favicons/'
}

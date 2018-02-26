import paths from './paths'
import sitemeta from './sitemeta'

module.exports = {
  src: '**/favicon.png', // A pattern defining your source image used to generate favicons.
  dest: paths.faviconDestination, // The destination directory, same as src dir if not set.
  path: paths.faviconPublicPath, // Path for overriding default icons path. `string`
  appName: null, // Your application's name. `string`
  appDescription: null, // Your application's description. `string`
  developerName: sitemeta.author, // Your (or your developer's) name. `string`
  developerURL: sitemeta.url, // Your (or your developer's) URL. `string`
  background: '#ffffff', // Background colour for flattened icons. `string`
  url: '/', // Absolute URL for OpenGraph image. `string`
  display: 'standalone', // Android display: 'browser' or 'standalone'. `string`
  orientation: 'portrait', // Android orientation: 'portrait' or 'landscape'. `string`
  version: '1.0', // Your application's version number. `number`
  logging: true, // Print logs to console? `boolean`
  online: false, // Use RealFaviconGenerator to create favicons? `boolean`
  icons: {
    android: false, // Create Android homescreen icon. `boolean` !!! SEEMS BUGGY
    appleIcon: true, // Create Apple touch icons. `boolean`
    appleStartup: false, // Create Apple startup images. `boolean`
    coast: false, // Create Opera Coast icon. `boolean`
    favicons: true, // Create regular favicons. `boolean`
    firefox: false, // Create Firefox OS icons. `boolean` !!! SEEMS BUGGY
    opengraph: false, // Create Facebook OpenGraph image. `boolean`
    twitter: false, // Create Twitter Summary Card image. `boolean`
    windows: false, // Create Windows 8 tile icons. `boolean` !!! SEEMS BUGGY
    yandex: false // Create Yandex browser icon. `boolean`
  }
}

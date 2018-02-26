// This is the actual metalsmith configuration script.
import Metalsmith from 'metalsmith'
import assets from 'metalsmith-assets'
import multiLanguage from 'metalsmith-multi-language'
import fingerprint from 'metalsmith-fingerprint-ignore'
import faviconGenerator from 'metalsmith-favicons'
// import collections from 'metalsmith-collections'
import publish from 'metalsmith-publish'
import permalinks from 'metalsmith-permalinks'
import markdown from 'metalsmith-markdownit'
import inplace from 'metalsmith-in-place'

import {DebugPlugin, StatisticsPlugin} from './metalsmith-helpers'

// import configs
import navigation from '../config/navigation'
import paths from '../config/paths'
import sitemeta from '../config/sitemeta'
import favicons from '../config/favicons'
import filters from '../config/filters'

const __PROD__ = process.env.NODE_ENV === 'production'

export default new Metalsmith(paths.projectRoot)
  .clean(__PROD__)
  .source(paths.metalsmithSource)
  .destination(paths.metalsmithDestination)
  .use(assets({
    source: './src/assets',
    destination: './assets'
  }))
  .use(multiLanguage({default: 'de', locales: ['de', 'en']}))
  .use(fingerprint({pattern: 'assets/app.bundle.css'}))
  .use(fingerprint({pattern: 'assets/immediate.bundle.js'}))
  .use(fingerprint({pattern: 'assets/app.bundle.js'}))
  .use(faviconGenerator(favicons))
  .metadata({
    sitemeta: sitemeta
  })
  // .use(collections({
  //     page: {
  //         pattern: '**/*.njk',
  //         sortBy: 'priority',
  //         reverse: true,
  //         refer: false
  //     }
  // }))
  .use(publish())
  .use(permalinks({
    pattern: ':locale/:title',
    relative: false
  }))
  .use(navigation)
  .use(inplace({
    engine: 'nunjucks',
    pattern: '**/*.njk',
    engineOptions: {
      pattern: '**/*.njk',
      path: paths.projectRoot + '/src/layouts',
      filters: {
        jsonDump: filters.jsonDump
      }
    }
  }))
  .use(markdown({
    html: true
  }))
  .use(DebugPlugin())
  .use(StatisticsPlugin())

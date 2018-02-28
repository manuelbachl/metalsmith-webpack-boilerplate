// This is the actual metalsmith configuration script.
import Metalsmith from 'metalsmith'
import assets from 'metalsmith-assets'
import fingerprint from 'metalsmith-fingerprint-ignore'
import faviconGenerator from 'metalsmith-favicons'
import publish from 'metalsmith-publish'
import multiLanguage from 'metalsmith-multi-language'
import i18n from 'metalsmith-i18n'
import markdown from 'metalsmith-markdownit'
import imagemin from 'metalsmith-imagemin'
import inlineSVG from 'metalsmith-inline-svg'
import inplace from 'metalsmith-in-place'
import validate from 'metalsmith-validate'
import beautify from 'metalsmith-beautify'
import permalinks from 'metalsmith-permalinks'
import alias from 'metalsmith-alias'
import sitemap from 'metalsmith-sitemap'
import {report} from 'metalsmith-debug-ui'

import {DebugPlugin, StatisticsPlugin} from './metalsmith-helpers'

// import configs
import config from '../config/config'

const __PROD__ = process.env.NODE_ENV === 'production'

export default new Metalsmith(config.paths.projectRoot)
  .clean(__PROD__)
  .source(config.paths.metalsmithSource)
  .destination(config.paths.metalsmithDestination)
  .use(assets(config.assets))
  .use(fingerprint({pattern: 'assets/app.bundle.css'}))
  .use(fingerprint({pattern: 'assets/immediate.bundle.js'}))
  .use(fingerprint({pattern: 'assets/app.bundle.js'}))
  .use(report('fingerprint'))
  .use(faviconGenerator(config.favicons))
  .use(report('faviconGenerator'))
  .metadata(config.metadata)
  .use(report('metadata'))
  .use(publish())
  .use(report('publish'))
  .use(multiLanguage(config.multilanguage))
  .use(report('multilanguage'))
  .use(i18n(config.i18n))
  .use(report('i18n'))
  .use(markdown(config.markdown))
  .use(report('markdown'))
  .use(imagemin(config.imagemin))
  .use(report('imagemin'))
  .use(inlineSVG())
  .use(report('inlineSVG'))
  .use(inplace(config.inplace))
  .use(report('inplace'))
  .use(validate(config.validate))
  .use(report('validate'))
  .use(beautify(config.beautify))
  .use(report('beautify'))
  .use(permalinks(config.permalinks))
  .use(report('permalinks'))
  .use(alias(config.alias))
  .use(report('alias'))
  .use(config.navigation)
  .use(report('navigation'))
  .use(sitemap(config.sitemap))
  .use(report('sitemap'))
  .use(DebugPlugin())
  .use(StatisticsPlugin())

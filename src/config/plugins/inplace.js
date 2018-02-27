import paths from './paths'
import filters from './filters'

module.exports = {
  engine: 'nunjucks',
  pattern: '**/*.njk',
  engineOptions: {
    pattern: '**/*.njk',
    path: paths.projectRoot + '/src/layouts',
    filters: {
      jsonDump: filters.jsonDump
    }
  }
}

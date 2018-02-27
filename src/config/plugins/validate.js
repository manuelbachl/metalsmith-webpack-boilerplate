module.exports = [
  {
    pattern: '*.njk',
    metadata: {
      layout: {
        default: 'default.njk'
      },
      title: {
        exists: true,
        type: 'String'
      },
      position: {
        exists: true,
        pattern: /^[0-9]$/
      },
      navGroup: {
        exists: true,
        type: 'Array'
      },
      canonical: {
        exist: false,
        type: 'String'
      },
      lastmod: {
        pattern: /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/
      },
      priority: {
        default: '0.5',
        pattern: /^(0.[1-9]|1.0)$/
      },
      private: {
        exists: true,
        type: 'Boolean'
      }
    }
  }
]

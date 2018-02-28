module.exports = {
  configs: {
    header: {
      sortBy: 'priority',
      sortByNameFirst: false,
      filterProperty: 'navGroup',
      filterValue: 'header',
      breadcrumbProperty: 'breadcrumbPath',
      pathProperty: 'navPath',
      childrenProperty: 'navChildren',
      mergeMatchingFilesAndDirs: true,
      includeDirs: true
    },
    headerMeta: {
      sortBy: 'priority',
      sortByNameFirst: false,
      filterProperty: 'navGroup',
      filterValue: 'headerMeta',
      breadcrumbProperty: 'breadcrumbPath',
      pathProperty: 'navPath',
      childrenProperty: 'navChildren',
      mergeMatchingFilesAndDirs: true,
      includeDirs: true
    },
    footer: {
      sortBy: 'priority',
      sortByNameFirst: false,
      filterProperty: 'navGroup',
      filterValue: 'footer',
      breadcrumbProperty: 'breadcrumbPath',
      pathProperty: 'navPath',
      childrenProperty: 'navChildren',
      mergeMatchingFilesAndDirs: true,
      includeDirs: true
    },
    footerMeta: {
      sortBy: 'priority',
      sortByNameFirst: false,
      filterProperty: 'navGroup',
      filterValue: 'footerMeta',
      breadcrumbProperty: 'breadcrumbPath',
      pathProperty: 'navPath',
      childrenProperty: 'navChildren',
      mergeMatchingFilesAndDirs: true,
      includeDirs: true
    }
  },
  settings: {
    navListProperty: 'navs',
    permalinks: true
  }
}

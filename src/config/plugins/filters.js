import util from 'util'

module.exports = {
  jsonDump: function (obj) {
    return util.inspect(obj)
  }
}

const ram = require('random-access-memory')
const dwtrie = require('../../')

module.exports = function (key, opts) {
  return module.exports.create(key, opts)
}

module.exports.create = function (key, opts) {
  opts = Object.assign({ valueEncoding: 'json' }, opts)
  return dwtrie(ram, key, opts)
}

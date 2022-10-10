
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plasmic-chakra-ui-cc.cjs.production.min.js')
} else {
  module.exports = require('./plasmic-chakra-ui-cc.cjs.development.js')
}

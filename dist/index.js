
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./formik-strap.cjs.production.min.js')
} else {
  module.exports = require('./formik-strap.cjs.development.js')
}

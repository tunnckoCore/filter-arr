/*!
 * filter-arr <https://github.com/tunnckoCore/filter-arr>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var filter = require('arr-filter')
var matcher = require('is-match')

module.exports = function filterArr (arr, filters, opts) {
  if (arr.length === 0) {
    return []
  }

  var isMatch = matcher(filters, opts)
  return filter(arr, isMatch)
}

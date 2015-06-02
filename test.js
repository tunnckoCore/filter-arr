/*!
 * filter-arr <https://github.com/tunnckoCore/filter-arr>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var filterArr = require('./index')

test('filter-arr:', function () {
  test('should return empty array if empty array given', function () {
    var actual = filterArr([], 'foo*')
    var expected = []

    test.deepEqual(actual, expected)
  })
  test('should filter array with glob string', function () {
    var actual = filterArr(['foo', 'boo', 'baz'], '*o*')
    var expected = ['foo', 'boo']

    test.deepEqual(actual, expected)
  })
  test('should filter array with glob array', function () {
    var actual = filterArr(['foo', 'boo', 'baz'], ['*oo', '!f*'])
    var expected = ['boo']

    test.deepEqual(actual, expected)
  })
  test('should filter array with function', function () {
    var actual = filterArr(['foo', 'boo', 'baz'], function filter (val) {
      var lastChar = val[val.length - 1]
      return lastChar === 'z'
    })
    var expected = ['baz']

    test.deepEqual(actual, expected)
  })
  test('should filter array with regex', function () {
    var actual = filterArr(['foo', 'boo', 'baz'], /.*o.*/)
    var expected = ['foo', 'boo']

    test.deepEqual(actual, expected)
  })
})

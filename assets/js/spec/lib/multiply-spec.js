/* jslint node: true */
/* global describe, it, expect */

"use strict";

var expect        = require('chai').expect;
var multiply_lib  = require('../../lib/multiply');

describe("#multiply", function () {
  it("returns the correct multiplied value", function () {
    var product = multiply_lib.multiply(2, 3);
    expect(product).to.equal(6);
  });
});

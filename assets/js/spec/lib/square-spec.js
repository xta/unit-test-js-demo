/* jslint node: true */
/* global describe, it, expect */

"use strict";

var expect      = require('chai').expect;
var square_lib  = require('../../lib/square');

describe("#square", function () {
  it("returns the correct squared value", function () {
    var squared = square_lib.square(3);
    expect(squared).to.equal(9);
  });
});

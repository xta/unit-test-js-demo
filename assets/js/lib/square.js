var multiply_lib = require('./multiply');

exports.square = function(x) {

  "use strict";

  return multiply_lib.multiply(x, x);
};

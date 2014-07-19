var $           = require('jquery');
var square_lib  = require('./lib/square');

$(function() {

  "use strict";

  $("#squareValue").change(function() {
    var $this       = $(this),
        squareValue = $this.val(),
        squareResult;

    // if squareValue is not numeric
    if (isNaN(squareValue)) {

      $("#squareResult").html('N/A');
      return false;

    // else squareValue is numeric
    } else {

      squareResult = square_lib.square(squareValue);
      $("#squareResult").html(squareResult);
      return true;
    }
  });

});

$(function() {

  // set unitTestJsDemo on window
  window.unitTestJsDemo = window.unitTestJsDemo || {};

  // define multiply()
  window.unitTestJsDemo.multiply = function(x, y) {
    return x*y;
  };

  // define square()
  window.unitTestJsDemo.square = function(x) {
    return unitTestJsDemo.multiply(x, x);
  };

  // event listener for #squareValue input field
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

      squareResult = unitTestJsDemo.square(squareValue);
      $("#squareResult").html(squareResult);
      return true;
    }
  });

});

"use strict";

function outer() {
  var count = 5;
  debugger;
  console.log(count);

  function inner() {
    var count = 10;
    debugger;
    console.log(count);
  }

  inner();
}

outer();

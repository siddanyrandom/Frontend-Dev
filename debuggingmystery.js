"use strict";

function showMessage() {
  try {
    let greeting = createGreeting();
    debugger; 
    console.log(greeting);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

function createGreeting() {
  let msg = "Welcome";
  return msg;
}

function startApp() {
  debugger;
  showMessage();
}

startApp();

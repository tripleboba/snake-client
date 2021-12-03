/**
 * Handling all the logic for setting up and handling user input
 */

const {connect} = require("./client");  // exports using es6 syntax
// connect(); // not taking connect so need to add ()
const {setupInput} = require("./input");

console.log("Connecting....");
const conn = connect(); // conn - return obj from connect 

setupInput(conn); // pass conn into setupInput
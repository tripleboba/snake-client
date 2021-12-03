const {connect} = require("./client");  // exports using es6 syntax
connect(); // not taking connect so need to add ()


// setup interface to handle user input from stdin
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // register an event listener for stdin
  // the listener will run handleUserInput() when receive input from keyboard
  stdin.on("data", handleUserInput);
  // data: received from stdin -> handleUserInput

  return stdin;   // stdin obj listening for keyboard input and react to it
};

const handleUserInput = function(data){
  // register the func as the "data" callback handler for stdin
  if (data === "\u0003"){  // Ctrl + C code
    console.log("Quit the server!");
    process.exit();
  }
};



module.exports = {setupInput};
/**
 * Input module to handle and manage user's input
 */

const handleUserInput = function(data){
  // register the func as the "data" callback handler for stdin
  if (data === "\u0003"){  // Ctrl^ + C code
    console.log("Quit the server!");
    process.exit();
  }
};

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


module.exports = {setupInput};
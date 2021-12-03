/**
 * Input module to handle and manage user's input
 */

let connection;
/** ^
 * connection object for input module send msg to the server
 * allow connection obj to have access to data from keyboard
 * keyboard data needs to be in the same scope as the connection obj
 * -> pass the conn obj returned by connect() to the setupInput()
 */

const handleUserInput = function(data){
  // register the func as the "data" callback handler for stdin
  if (data === "\u0003"){  // Ctrl^ + C code
    console.log("Quit the server!");
    process.exit();
  }
  // handle keyboard input
  switch (data) {
    case 'w':
      console.log('up');
      break;
    case 'a':
      console.log('left');
      break;
    case 's':
      console.log('down');
    case 'd':
      console.log('right');
  }
};

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
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
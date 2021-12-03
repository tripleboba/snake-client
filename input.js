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
  // need to press keys when on client terminal, not the board display server
  switch (data) {
    case 'w':
      console.log('up');
      connection.write("Move: up");
      break;
    case 'a':
      console.log('left');
      connection.write("Move: left");
      break;
    case 's':
      console.log('down');
      connection.write("Move: down");
    case 'd':
      console.log('right');
      connection.write("Move: right");
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

/**
 * Note:
 * How connection object is being passed around:
 *    - connect() returns an object that can be used to interact with the server
 *    - the object returned by connect() should be passed into setupInput()
 *    - setupInput() places a reference to that object in another variable connection
 *      which is in a global scope of that module
 * When data comes in from your keyboard, the stdin event handler can now interact with the server
 * because the scope in the handler now includes both data from the keyboard AND the connection object!
 * Your input module can now use the connection variable to send movement commands/messages to the server.
 */
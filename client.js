/**
 * Local Server Play - npm run play
 * IP addresss: localhost
 * 
 */

const net = require("net");
// establishes a connection with the game server
const connect = function() {
  /**
   *  using Node's net library (createConnection() func)
   * -> create an object named conn
   * conn obj has useful methods and properties to interact with the server
   */
  const conn = net.createConnection({ // the connection with the server
    host: "localhost",  // IP address here,
    port: 50541         // PORT number here,
  });
  conn.setEncoding("utf8"); // interpret incoming data as text

  // events when connected
  conn.on("connect", () => {
    console.log("Connected to the server!");
    conn.write("Name: Anh");
  });

  return conn;
};

module.exports = {connect}; // exports using es6 syntax
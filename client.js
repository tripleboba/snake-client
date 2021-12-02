/**
 * Local Server Play - npm run play
 * IP addresss: localhost
 */

const net = require("net");
// establishes a connection with the game server
const connect = () => {
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

  conn.on("connect", () => {
    console.log("Connected to the server!");
  });
  conn.on("close", () => {
    console.log("U ded cuz you idled! OUT!");
  });

  return conn;
};
console.log("Connecting...");

module.exports = {connect}; // exports using es6 syntax
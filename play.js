/**
 * Local Server Play
 * IP addresss: localhost
 */

 const net = require("net");

 // establishes a connection with the game server
const connect = function () {
  /**
   *  using Node's net library (createConnection() func)
   * -> create an object named conn
   * conn obj has useful methods and properties to interact with the server
   */
  const conn = net.createConnection({ // the connection with the server
    host: "localhost",  // IP address here,
    port: 50541         // PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connecting...");
  });
  conn.on("close", () => {
    console.log("U ded cuz you idled! OUT!");
  });

  return conn;
};

connect();
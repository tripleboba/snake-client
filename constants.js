/**
 * Keep constant value of IP and PORT for cleaner code
 */

const IP = 'localhost';
const PORT = 50541;

module.exports = {IP, PORT};

/**
 * Extra to turn into constants
 *  - Player's name/initials: provide as a command line argument
 *  - Movement keys (W, A, S, D) >>>> MOVE_UP_KEY
 *  - Key mappings for messages: every time a user presses the key 'x' >>> displays the message 'y'
 *    a mapping likes an object ({ x: "y" })
 *    instead of using if statements to implement >>>> define an object (as a constant)
 *    which defines these message mappings.
 *    >> simply lookup the appropriate mapping in the object >>> send the value as the message string
 */
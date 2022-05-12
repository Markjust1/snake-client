const { connect } = require("http2");
const { 
  UP_KEY,
  LEFT_KEY,
  DOWN_KEY,
  RIGHT_KEY,
  SAY

} = require("./constants");

let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === "\u0077") {
    connection.write(UP_KEY);
  }
  if (data === "\u0061") {
    connection.write(LEFT_KEY);
  }
  if (data === "\u0073") {
    connection.write(DOWN_KEY);
  }
  if (data === "\u0064") {
    connection.write(RIGHT_KEY);
  }
  if (data === "y") {
    connection.write(SAY);
  }
};
module.exports = { setupInput }
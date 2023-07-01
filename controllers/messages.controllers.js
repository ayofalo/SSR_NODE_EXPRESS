const path = require("path");

function getMessages(req, res) {
  //res.send("<ul><li>Hello</li></ul>");

  res.sendFile(path.join(__dirname, "..", "public", "Jesus.jpg"));
}

function postMessage(req, res) {
  res.send("updating messages");
}

module.exports = {
  getMessages,
  postMessage,
};

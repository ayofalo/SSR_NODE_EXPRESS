const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express();
const PORT = 3000;

//Middleware

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
});

app.use("/site", express.static(path.join(__dirname, "public"))); //helps to serve everything on that particular path
app.use(express.json()); //sets the req.body to a javascript object when content type is application

friendsRouter.use((req, res, next) => {
  console.log("ip.address:", req.ip);
  next();
});

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`);
});

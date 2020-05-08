const express = require("express");

const projectRouter = require("./api-router/project-router");
const actionRouter = require("./api-router/action-router");

const server = express();

server.use(express.json()); // Built in middleware, no need to npm install it

server.get("/", (req, res) => {
    res.status(200).json({ message: "We're good to go. "});
})

server.use("/api/actions", actionRouter);
server.use("/api/project", projectRouter);

module.exports = server;
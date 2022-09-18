const express = require("express");
const path = require("path");
const { createServer } = require('http');
const app = express();
const { Server } =  require("socket.io");

const pathPublicDirectory  = path.join(__dirname, "../public");
app.use(express.static(pathPublicDirectory));
const httpServer = createServer(app);

const io = new Server(httpServer, {
    
})


io.on("connection", (socket) => {
    console.log("new client connect");
})

httpServer.listen(5000, () => {
    console.log(`app run on port 5000`);
})
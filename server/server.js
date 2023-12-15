/// import express and socket io modules
const express = require("express");
const socketio = require("socket.io");



/// create express and server
const app = express();
const server = app.listen(3000, () => {
    console.log("SERVER IS LISTENING");
});

//// create a socketio  instance and attach it to the server
const io = socketio(server);


/// serve the static files in the client folder
app.use(express.static("../client"));




/// handle event when client connected to the server
io.on("connection", (socket) => {

    console.log(socket.id + " CONNECTED");

    //handle client events 
    socket.on("message", (stream) => {
        
        //emit data to all the clients
        io.emit("message", stream);
    })
    // handle event when client disconnects
    socket.on("disconnect", () => {
        console.log(socket.id + " DISCONNECTED");
    });
});



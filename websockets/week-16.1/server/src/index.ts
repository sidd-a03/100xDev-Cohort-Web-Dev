import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8000 });

// event handler
wss.on("connection", (socket) => {
    console.log("Connected to the WebSocketServer");

    socket.on("message", (msg) => {
        console.log(msg.toString());
        console.log(msg.toString() === "ping");
        if (msg.toString() === "ping") {
            socket.send("pong");
        }
    })
})
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8000 });

// event handler
wss.on("connection", (socket) => {
    console.log("Connected to the WebSocketServer");
    setInterval(() => {
        socket.send(`Current price of solana is $${Math.floor(Math.random() * 1000)}`);
    }, 500)

    socket.on("message", (msg) => {
        console.log("Received message: " + msg);
    })
})
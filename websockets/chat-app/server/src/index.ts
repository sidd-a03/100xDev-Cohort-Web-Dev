import 'dotenv/config'
import { type WebSocket, WebSocketServer } from 'ws';
import { env } from "./schemas";

const wss = new WebSocketServer({ port: env.WS_PORT });

let userCount: number = 0;
let allSockets: WebSocket[] = [];

wss.on('connection', (socket) => {
    allSockets.push(socket);
    // console.log("Connected to Websocket server");
    userCount++;
    console.log(`Connected to Websocket server: #${userCount}`);

    socket.on("message", ( msg) => {
        console.log(`Received ${ msg }`);
        allSockets.forEach( socket => socket.send(`"${ msg }" sent from the server`))
    })
})
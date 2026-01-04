import 'dotenv/config'
import { WebSocketServer } from 'ws';
import { env } from "./schemas";

const wss = new WebSocketServer({ port: env.WS_PORT });

wss.on('connection', (socket) => {
    console.log("Connected to Websocket server");
})

console.log("hello");
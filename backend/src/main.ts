import express from 'express';
import ws from 'ws';


const app = express();

const server = app.listen(3030, () => console.log("Chat ta online  😎"));

const wss = new ws.Server({
    server
});

wss.on('connection', (ws) => {
    ws.on("message", (msg) => {
        wss.clients.forEach(client=>client.send(msg.toString()))
    })
})
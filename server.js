

const { Server } = require('socket.io');
const http = require('http');

const server = http.createServer((req, res) => {

    console.log('Solicitud recibida: ' + req.url + ' Método: ' + req.method);

    io.emit('mensaje', 'Hola a todos');

});

const io = new Server(server);

io.on('connection', (socket) => {

    console.log('A user connected');

    // ? Ante cualquier evento
    socket.onAny((event, ...args) => {
        console.log(event, args);
    });

    // ? Evento mensaje
    socket.on('mensaje', (msg) => {
        console.log('message: ' + msg);
    });

});

server.listen(3000, () => {
    console.log('listening on *:3000');
});

const express = require('express');
const app = express();

const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// Socket.io handling
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });

    socket.on('chat-message', (data) => {
        console.log(data);
    });

    socket.on('online', (data)=>{
        console.log(data);
        console.log(`Emmiting on online-${data.owner._id}`);
        socket.emit(`online-${data.owner._id}`, data);
    });
});



const cors = require('cors');
app.use(express.json());

// import All Routes

const errorMiddleware = require('../app/Middleware/Error');
const products = require('./product');
const users = require('./user');
const roles = require('./roles');
const chats = require('./chat');
const { testAllQueries } = require('../app/Helpers/QueryTester')

app.get('/test-query', testAllQueries);


app.get('/', (req, res, next)=>{
    res.send("Welcome to the MERN STACK tutorials");
});

app.use(cors());
app.use('/api/v1', products);
app.use('/api/v1', users);
app.use('/api/v1', roles);
app.use('/api/v1', chats);

// using error middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Socket is running on port ${PORT}`);
});


module.exports = app;

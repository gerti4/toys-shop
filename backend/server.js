'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const session = require('express-session');


const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


const toyRoutes = require('./api/toy/toy.routes');
// const authRoutes = require('./api/auth/auth.routes');
const connectSockets = require('./api/socket/socket.routes')




app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));



if (process.env.NODE_ENV !== 'production') {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080','http://localhost:8080'],
        credentials: true
    };
    app.use(cors(corsOptions));
}
 



//routes
app.use('/toy',toyRoutes)
connectSockets(io)




// app.use(express.static(path.resolve(__dirname, 'public')));



module.exports = http
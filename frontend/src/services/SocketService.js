import io from 'socket.io-client';


const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/'
    : '//localhost:3000' 
const socket = io(BASE_URL);

export default {
    on,
    emit    
}

function on(eventName, cb) {
    socket.on(eventName, cb)
}

function emit(eventName, data) {    
    socket.emit(eventName, data)
}

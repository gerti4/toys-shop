
module.exports = connectSockets

function connectSockets(io) {
    console.log('1');
    io.on('connection', socket => {

        socket.on('chat newMsg', msg=>{
            
            console.log(msg)
            console.log(socket.myTopic);
            
            // io.emit('chat addMsg', msg)
            // emits only to sockets in the same room
            io.to(socket.myTopic).emit('chat addMsg', msg)
        })
        socket.on('chat topic', topic=>{
            if (socket.myTopic) {
                socket.leave(socket.myTopic)
            }
            socket.join(topic)
            socket.myTopic = topic;
        })
    })
}
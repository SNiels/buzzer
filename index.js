var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('startbuzz', function(){
    socket.volatile.broadcast.emit('startbuzz');
  });
  socket.on('stopbuzz', function(){
    socket.volatile.broadcast.emit('stopbuzz');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
var express = require('express');
var app     = express();
var server  = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));

var io = require('socket.io')(server);
io.on('connection', function(socket){

  socket.on('message', function(data){
    console.log(data);

    socket.broadcast.emit('message', data);
  });

});

server.listen(3000);

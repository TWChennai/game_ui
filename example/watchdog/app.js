var express = require('express');
var app = express();
var socket = null;
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

server.listen(80);
// WARNING: app.listen(80) will NOT work here!

app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (soc) {
  socket = soc;
  soc.emit('news', { hello: 'world' });
  soc.on('my other event', function (data) {
    console.log(data);
  });
});

app.post('/echo', jsonParser, function (req, res) {
  socket.emit('Game update', req.body);
  res.json(req.body);
});



import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function subscribeToEvent(cb) {
  socket.on('level1', data => cb(null, data));

  socket.emit('subscribeToEvent', 1000);
}
export { subscribeToEvent };
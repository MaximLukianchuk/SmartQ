const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketServer =require('socket.io');

const memberModel = require('./models/Member');

const app = express();
const server = http.createServer(app);
const io = socketServer(server);

const PORT = process.env.PORT;
const URI = process.env.DB_URI;

async function start() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    server.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
  } catch(e) {
    console.log('Server Error:', e.message);
    process.exit(1)
  }
}

start();

io.on('connection', function(socket) {
  console.log("Connected to Socket!! " + socket.id);

  socket.on('disconnect', function() {
    console.log('Disconnected - ' + socket.id);
  });

  memberModel.find({}, function(error, result) {
    if (error) {
      console.log(error)
    } else {
      socket.emit('membersLoaded', result)
    }
  })
});

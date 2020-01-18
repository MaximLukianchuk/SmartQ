const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.DB_PORT;
const URI = process.env.DB_URI;

async function start() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
  } catch(e) {
    console.log('Server Error:', e.message);
    process.exit(1)
  }
}

start();

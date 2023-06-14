const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
// const cors = require('cors');
const app = express();
app.use(cookieParser());
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
require('./db/conn');

app.use(express.json());
const PORT = process.env.PORT;

const { router } = require('./router/auth');

// Enable CORS for all routes
// app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Mount the router
app.use( router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at port number ${PORT}`);
});

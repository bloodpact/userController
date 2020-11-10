const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbConnect = require('./config/db');
const cors = require('cors')
const server = express();
server.use(cors())
const users = require('./routes/userRoutes');

server.use(bodyParser.urlencoded({ extended: false }));

server.use(bodyParser.json());
server.use('/', users);
const PORT = 3333 || process.env.PORT;

server.listen(PORT,()=>{
    dbConnect;
    console.log(`server started at ${PORT}`)
})
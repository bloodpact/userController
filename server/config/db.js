const mongoose = require('mongoose');
const dbConnect = mongoose.connect('mongodb://localhost:27017/userControl', {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('DB connected'));
module.exports = dbConnect;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Users = new Schema({
    parkingNum : Number,
    place: Number,
    account: Number,
    FIO: String,
    phone: Number,
    email: String,
    carName: String,
    carNum: String,
    comment: String,
    isMember: String || Boolean

})
module.exports = mongoose.model('Users',  Users);
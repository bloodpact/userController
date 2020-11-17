const Users = require('../models/users');
const getUser = async (req, res) => {
    const data = await Users.find({});
    
    res.send(data);
}
const postUser = async (req, res) => {
    const userData = await req.body;
    const newUser = new Users(userData);
    newUser.save();
}
const userDelete = async (req, res) => {
    const userID = await req.params._id;
    await Users.deleteOne({_id :userID});
    res.send('user deleted');
}
const userUpdate = async (req, res) => {
    const {_id,
        parkingNum,
        place,
        account,
        FIO,
        pass,
        address,
        phone,
        email,
        carName,
        carNum,
        comment,
        isMember} = req.body
    await Users.updateOne({_id},
            {parkingNum,
            place,
            account,
            FIO,
            pass,
            address,
            phone,
            email,
            carName,
            carNum,
            comment,
            isMember})
            await res.send('updated')
}
module.exports = {getUser, postUser, userDelete, userUpdate}
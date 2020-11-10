const Users = require('../models/users');
const getUser = async (req, res) => {
    const data = await Users.find({})
    res.send(data)
}
const postUser = async(req, res)=>{
    const userData = await req.body
    const newUser = new Users(userData)
    newUser.save()
}
module.exports = {getUser, postUser}
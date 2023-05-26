/* const Users = require('../models/model');
const db = require('../configs/config');

async function insertUser(req, res){
    const user = new Users(JSON.stringify(users));
    const result = await user.savesave();
    console.loglog(user);
}

async function showUser(req, res){
    let sp = [];
    sp = await Users.find({});
    res.send(sp);
    console.log(sp);
}

async function findbyidUser(req, res){
    const id = req.params.id;
    const result = await Users.findById(id).exec();
    res.send(result);
    console.log(result);
}

module.exports = {insertUser , showUser, findbyidUser}; */
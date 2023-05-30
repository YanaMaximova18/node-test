const Users = require('../models/model');
const Keys = require('../models/key');
const Models = require('../models/infomod');


function CheckApiKey(req, res, next){
    try{
        const apiKey = req.query.apiKey;
        Key
        .findById(apiKey)
        .then((result) => {
            if(result){
                next();
            } else {
                const error = new Error("Неверный ключ");
                error.statusCode = 401;
                throw error;
            }
        })
        .catch((err) => {
            next(err);
        })
    } catch(err){
        next(err);
    }
}

////
async function insertApi(req, res){
    try{
        const key = new Key(req.body);
        key
        .save()
        .then(() => {
            res.status(201).json('Ваш APIKey ');
        })
        .catch((err) => {
            res.status(500).send(err.message);
        })
    }catch(err){
        next(err);
    }
}
async function deleteApi(req, res){
    try{
        const id = req.params.id;
        Key
        .findByIdAndDelete(id)
        .then((result) => {
            if (result){
                res.status(201).json('Данные отправлены!');
            } else{
                const error = new Error('Несуществующий документ!');
                error.statusCode = 400;
                throw error;
            }
        })
        .catch((err) => {
            next(err);
        })
    }catch(err){
        next(err);
    }
}
//////

async function insertUser(req, res){
    if (req.headers['content-type'] === 'application/json'){
        const user = new Users(req.body);
        user
        .save()
        .then(() => {
            res.status(201).json('Данные отправлены!');
        })
        .catch((err) => {
            res.status(500).send(err.message);
        })
    }else
    res.status(400).json('Неверный формат данных!');
}

async function showUser(req, res){
    Users
    .find()
    .then((users) => {
        res.status(200).json(users);
    })
    .catch((err) => {
        res.status(500).send(err.message);
    })
}

async function findbyidUser(req, res){
    const id = req.params.id;
    Users
    .findById(id)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        res.status(404).json('Несуществующий документ');
    })
}

async function insertModel(req, res){
    const model = new Models(req.body);
    model
    .save()
    .then(() => {
        res.status(201).json('Данные отправлены!');
    })
    .catch((err) => {
        res.status(500).send(err.message);
    })
}

async function showModel(req, res){
    Models
    .find({}, '_id name_model')
    .then((models) => {
        res.status(200).json(models);
    })
    .catch((err) => {
        res.status(500).send(err.message);
    })
}
async function findbyidModel(req, res){
    const id = req.params.id;
    Models
    .findById(id)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        res.status(404).json('Несуществующий документ');
    })
}
async function UpdateModel(req, res){
    const id = req.params.id;
    body = req.body;
    Models
    .findByIdAndUpdate(id,{
        name: body.name,
        name_model: body.name_model,
        type_model: body.type_model,
        object: body.object,
        description: body.description,
        comments: body.comments,
        date_update: body.date_update})
    .then((result) => {
        res.status(200).json('Данные обновлены!');
    })
    .catch((err) => {
        res.status(404).json('Несуществующий документ');
    })
}
async function DeleteModel(req, res){
    const id = req.params.id;
    Models
    .findByIdAndDelete(id)
    .then((result) => {
        res.status(200).json('Данные удалены!');
    })
    .catch((err) => {
        res.status(404).json('Несуществующий документ');
    })
}

module.exports = {insertUser, showUser, findbyidUser, insertModel, showModel, findbyidModel, UpdateModel, CheckApiKey, DeleteModel, insertApi, deleteApi}; 
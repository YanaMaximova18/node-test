const express = require('express');
const {insertUser , showUser, findbyidUser, insertModel, showModel, findbyidModel, UpdateModel, CheckApiKey, DeleteModel, insertApi, deleteApi} = require('../services/servic');
const control = express.Router();
const jsonParse = express.json();

control.post('/comments', jsonParse, insertUser);
control.get('/comments', showUser);
control.get('/comments/:id', findbyidUser);

control.get('/models', showModel);
control.get('/models/:id', findbyidModel);
control.post('/models', jsonParse, CheckApiKey, insertModel);
control.put('/models/:id', CheckApiKey, UpdateModel);
control.delete('/models/:id', CheckApiKey, DeleteModel);

/*control.post('/keyapi'); */

module.exports = control;

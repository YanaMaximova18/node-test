const express = require('express');
const router = express.Router();

const users = [{id: 1, name: "Yana"}, {id: 2, name: "Margo"}];
const us = {user_agent: 0};

const jsonParse = express.json();

function autores (req, res, next){
    const apiKey = req.query.apiKey;
    if (apiKey != 'qq'){
        res.status(401).send('Не осуществлена авторизация!');
    }else
        next;
} 


router.get('/', (req, res) => {
    res.send('Hi!');
});

router.post('/comments', (req, res) => {
    res.send(JSON.stringify(users));
});

router.get('/stats', (req, res) => {
    us.user_agent++;
    res.send(`<table>
    <tr><th>User-agent:</th><th>Request:</th></tr>
    <tr><td>${req.headers['user-agent']}</td><td>${us.user_agent}</td></tr>
    </table>`) 
});

module.exports = router;
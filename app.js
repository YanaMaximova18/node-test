const http = require('node:http');
const host = "127.0.0.1"
const port = 5500

const express = require('express');
const app = express();

const routerApi = require('./v1/router');


app.use(express.static('public'));
app.use('/v1', routerApi)


app.listen(port, host, () =>{
    console.log(`Server is on. http://${host}:${port}`);
});


// const server = http.createServer((req, res) => {
//     if (req.url === "/"){
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/plain");
//         res.end("Hi!");
//     }else if (req.url === "/comments"){
//         if (req.method === "POST"){
//             res.statusCode = 200;
//             res.setHeader("Content-Type", "application/json");
//             res.end(JSON.stringify(users));
//         }   
//     }else if (req.url === "/stats"){
//         if (req.method === "GET"){
//             res.statusCode = 200;
//             us.user_agent++;
//             res.setHeader("Content-Type", "text/html");
//             res.end(`<table>
//             <tr><th>User-agent:</th><th>Request:</th></tr>
//             <tr><td>${req.headers['user-agent']}</td><td>${us.user_agent}</td></tr>
//             </table>`) 
//         }  
//     }else {
//         res.statusCode = 400;
//         res.setHeader("Content-Type", "text/plain");
//         res.end("Bad Request");
//     }
// });





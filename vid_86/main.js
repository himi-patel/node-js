// const http = require('node:http');

// import http from 'http'

// import {a,b} from './module.js'
// console.log(a,b)

// import obj from './module.js'
// console.log(obj)

const a=require("./module2")
console.log(a)

// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1 style="color:red;">Hello World</h1> \n');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
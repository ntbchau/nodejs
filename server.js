const http = require('http');

const server = http.createServer((req, res) => {
    console.log('run request....')
    res.setHeader('Content-Type', 'text/html');
    res.write('Hello World');
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('Nodee.js is running in port 3000');
})
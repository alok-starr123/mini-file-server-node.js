const http = require('http');
const fs = require('fs');
const path = require('path');
const readFile = require('./modules/readFile');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        readFile('./pages/home.html', 'text/html', res);
    } else if (url === '/about') {
        readFile('./pages/about.html', 'text/html', res);
    } else if (url === '/contact') {
        readFile('./pages/contact.html', 'text/html', res);
    } else if (url === '/style.css') {
        readFile('./public/style.css', 'text/css', res);
    } else if (url === '/logo.png') {
        readFile('./public/logo.png', 'image/png', res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Page Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

        
    

    

    
    
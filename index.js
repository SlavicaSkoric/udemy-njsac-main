// I'm a child, I'm going to act like a server and do nothing else
const express = require('express');
const crypto = require('crypto');
const app = express();

/*   function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  } */

app.get('/', (req, res) => {
  // doWork(5000);
  // simulate some work, some computation on our server:
  // work on our hash:
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    // console.log('1:', Date.now() - start, 'ms');
    res.send('Hiii thereee');
  });
});

app.get('/fast', (req, res) => {
  res.send('This was fast!');
});

app.listen(3000);

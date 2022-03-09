const https = require('https');

const start = Date.now();

function doRequest() {
  https
    .request('https://www.google.com', (res) => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log(Date.now() - start, 'ms');
      });
    })
    .end();
}

// res - not our usual axios or jquery res object, not the entire response object - it is an object that emits events as we receive data from google servers

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();

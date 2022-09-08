const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const client2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const client3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const getIndex = (request, response) => {
  getHtml(request, response, index);
};

const getClient2 = (request, response) => {
  getHtml(request, response, client2);
};

const getClient3 = (request, response) => {
  getHtml(request, response, client3);
};

const getHtml = (request, response, file) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(file);
  response.end();
}

module.exports = {
    getIndex,
    getClient2,
    getClient3
};
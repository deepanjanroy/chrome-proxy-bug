const http = require('http');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function serveIndex(response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  const content = await readFile('./flood-client.html');
  response.end(content, 'utf-8');
}

const server = http.createServer((request, response) => {
  const url = request.url;
  console.log(`<= ${url}`);

  if (url === '/') return serveIndex(response);
  // For all other urls, send back the url path without the first slash.
  // "/1" -> "1".
  setTimeout(() => {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(url.substring(1));  // Strips the first slash.
    console.log(`=> ${url}`);
    response.end();
  }, 0);  // You can change this to vary response delay.
});

console.log("Serving http://localhost:7000")
server.listen(7000, "localhost");

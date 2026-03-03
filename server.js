import http from 'http';

const server = http.createServer((req, res) => {
  res.write('Hello World with Import');
  res.end();
});


console.log("Feature 1 code");

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
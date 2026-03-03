import http from 'http';

const server = http.createServer((req, res) => {
  res.write('Hello World with Import');
  res.end();
});


// console.log("main branch");

// console.log("Feature 1 code");
console.log("Feature  code");
console.log("Feature  code 2");
console.log("Temporary changes, for  stash");
console.log("Temporary changes 2, for  stash");



server.listen(3000, () => {
  console.log('Server running on port 3000');
});
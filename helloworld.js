const http = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.creatServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello Friends!\n");
});

server.listen(port, hostname, () => {
  console.log(`server berjalan di port ${port}`);
});

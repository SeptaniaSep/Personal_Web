const http = require("node:http");

const hostame = "127.0.0.1";
const port = 3000;

const server = http.creatServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hallo Teman!\n");
});

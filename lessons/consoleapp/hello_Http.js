// var http = require("http");
var http = require("net");

// var server = http.createServer(function (request, response) {
var server = http.createServer(function (socket) {
  //   console.log(request.url);
  console.log("conection from" + socket.remoteAddress);

  //   response.writeHead(200, { "Content-Type": "text/plain" });
  //   response.end("hello World\n");
  socket.end("hello World\n");
});
// var port = 8000;
var port = 7000;
server.listen(port, "localhost");
console.log(`TCP server listening on port ${port} at localhost.`);
// server.listen(port, (err) => {
//   if (err) {
//     return console.log("something went wrong!!!!!!!", err);
//   }
// });
// console.log("Server running at http://127.0.0.1:8000/");

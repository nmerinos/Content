//server.js
var http = require("http");
var url = require("url");
function serverStart(route, handler) {
    http.createServer(function(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Received petition for " + pathname);
        route(handler, pathname, response); //agregamos handler y response
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("Hola Core Upgrade!");
        response.end();
    }).listen(3000);
    console.log("Server started...");
}
exports.start = serverStart;

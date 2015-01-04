//server.js
var http = require("http");
var url = require("url");
function serverStart(route, handler) {
    http.createServer(function(request, response) {
        // Variable que alberga los datos del formulario
        var postData = "";
        var pathname = url.parse(request.url).pathname; //parseamos el path
        console.log("Received petition for " + pathname);
        // Esperamos recibir los datos en utf-8
        request.setEncoding("utf8");
        // Añadimos callbacks para eventos de envios de formularios
        request.addListener("data", function(chunk) {
            postData += chunk;
            console.log("\n************************************************************\n"+
                "Received POST data chunk '\n"+chunk+"'\n"+
                "************************************************************\n");
        });
        request.addListener("end", function() {
            route(handler, pathname, response, postData);
        });
    }).listen(3000);
    console.log("Server started...");
}
exports.start = serverStart;

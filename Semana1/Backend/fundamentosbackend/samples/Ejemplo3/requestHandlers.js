//requestHandlers.js
var querystring = require("querystring");
function index(response) {
    console.log("Handler para request 'index' enviado.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Este es nuestro index, para entrar a las otras dos ingresa a /primera_pagina o /segunda_pagina");
    response.end();
}
function primera_pagina(response) {
    console.log("Handler para request 'primera_pagina' enviado.");
    var html = '<html>'+
        '    <head>'+
        '        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'+
        '    </head>'+
        '    <body>'+
        '        <form action="/enviar" method="post">'+
        '            <p><label for="nombre">Escribe tu nombre: </label></p>'+
        '            <input type="text" name="nombre" id="nombre" />'+
        '            <p><label for="bio">Escribe una pequeña Bio sobre ti: </label></p>'+
        '            <textarea name="bio" id="bio" rows="30" cols="60"></textarea>'+
        '            <p><input type="submit" value="Enviar" /></p>'+
        '        </form>'+
        '    </body>'+
        '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
}
function segunda_pagina(response) {
    console.log("Handler para request 'segunda_pagina' enviado.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Este es el mensaje mostrar con segunda_pagina.");
    response.end();
}
function enviar(response, postData) {
    postData = querystring.parse(postData);
    console.log(postData);
    console.log("Handler for request 'enviar' dispatched.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<p>Hola " + postData.nombre + "</p>");
    response.write("<p>Has dicho sobre ti: <br />" + postData.bio + "</p>");
    response.end();
}
exports.index = index;
exports.primera_pagina = primera_pagina;
exports.segunda_pagina = segunda_pagina;
exports.enviar = enviar;

//requestHandlers.js
function index(response) {
    console.log("Handler para request 'index' enviado.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Este es nuestro index, para entrar a las otras dos ingresa a /primera_pagina o /segunda_pagina");
    response.end();
}
function primera_pagina(response) {
    console.log("Handler para request 'primera_pagina' enviado.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Este es el mensaje mostrar con primera_pagina.");
    response.end();
}
function segunda_pagina(response) {
    console.log("Handler para request 'segunda_pagina' enviado.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Este es el mensaje mostrar con segunda_pagina.");
    response.end();
}
exports.index = index;
exports.primera_pagina = primera_pagina;
exports.segunda_pagina = segunda_pagina;

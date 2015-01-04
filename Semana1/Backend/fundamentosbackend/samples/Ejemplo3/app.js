//app.js
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handler = {}
handler["/"] = requestHandlers.index;
handler["/primera_pagina"] = requestHandlers.primera_pagina;
handler["/segunda_pagina"] = requestHandlers.segunda_pagina;
handler["/enviar"] = requestHandlers.enviar; //Añadimos esta linea para el path /enviar
server.start(router.route, handler);

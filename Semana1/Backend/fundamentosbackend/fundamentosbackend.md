# Fundamentos de Backend

El backend es la parte web del lado del servidor y base de datos, oculta al usuario. Este no lo puede observar pero lo puede usar indirectamente, ya que el backend trabaja con los datos que se envían desde el frontend como contraseñas al momento de autentificarte o como datos cuando registras tu tarjeta de crédito. Estos datos pueden ser registradas en una base de datos o pueden ser utilizados para hacer alguna consulta al servidor.

Los lenguajes o tecnologías más comunes  a utilizar son python con su framework django, ruby on rails y Node.js. Este último permite utilizar javascript como backend y es el que aprenderemos en este entrenamiento.

Node.js es un entorno JavaScript de lado de servidor que utiliza un modelo asíncrono, con I/O de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google. V8 es uno de los intérpretes más rápidos que puedan existir en la actualidad para cualquier lenguaje dinámico. Además las capacidades de Node para I/O (Entrada/Salida) son realmente ligeras y potentes, ideal para aplicaciones en tiempo real de datos intensivos.

Node.js trabaja con el gestor de paquetes npm, el cual permite administrar módulos (**modularizacion**) a ser instalados. Un módulo es una manera de organizar el código, similar a un paquete o librería. Los módulos son soportados gracias a la sentencia require().

// saludo.js
 function saludo() {
  return "Hola";
};

Existen módulos nativos, los cuales no se necesitan ser traidos localmente 

 var http = require("http");

y existen los módulos que podemos crear, para ello luego de crear los módulos,  usamos module.exports = {} colocando entre las llaves lo que queremos exportar.

module.exports={
saludo:saludo
} 



## Ejemplos

### Configurando mi entorno

Debemos instalar node para poder comenzar a trabajar.

#### Instalar node en Windows

Empecemos por descargar el instalador de la pagina (node-v0.X.msi Windows installer) de [Node.js](http://nodejs.org/)

Simplemente corremos el instalador, abrimos la consola (cmd.exe) y probamos la version de node instalada:

~~~
node -v
~~~

Esto nos va a mostrar la version que instalamos, lo que nos queda es probar algo de javascript para ser felices, asi que en la consola escribimos node y presionamos enter para entrar en la consola y despues tiramos algo de js:

~~~
node
> var prueba = 'Prueba Node';
> console.log(prueba);
~~~

Para lo que respecta NPM, ya lo tenemos, vamos a ver la version:

~~~
npm -v
~~~

Tenemos node y npm instalado para empezar a codear. Si queremos instalar paquetes del NPM:

~~~
npm install [paquete]
~~~


#### <a name="linux">Instalar node en Linux-Ubuntu</a>

Bajar el source de Node.js, compilarlo, e instalarlo.

Descargar el source **node-v0.X.tar.gz** de la [página](http://nodejs.org/download/) , o clonar el source usando [git](https://github.com/joyent/node). Si quieren elejir una version en particular pueden verlo en [Distribuciones de Node](http://nodejs.org/dist/).

Después de tener el tar.gz vamos a hacer los pasos de descomprimir, crear una carpeta, configurar el paquete, compilarlo e instalarlo:

Abrimos el terminal, nos posicionamos donde tenemos el **.tar.gz** y hacemos lo siguiente:

~~~
tar -zxf node-v0.10.35.tar.gz
cd node-v0.6.5
./configure
make
sudo make install
~~~

Comprobamos poniendo en el terminal:

~~~
node -v
~~~

y nos va a retornar la version de node instalada.

Escribimos node, y damos ENTER, para abrir la consola de node, y empezamos escribirmos javascript:

~~~
node
> var prueba = 'Prueba Node';
> console.log(prueba);
~~~

Presionamos Ctrl+C 2 veces y volvemos al terminal.

Desde la version 0.6 de node ya tenemos el NPM incluido, pero por si necesitan instalarlo, en el terminal pomenos:

~~~
curl http://npmjs.org/install.sh | sh
~~~

Si no reconoce el comando cURL, instalarlo con:

~~~
sudo apt-get install curl
~~~

Comprobamos la version en el terminal:

~~~
npm -v
~~~

y ahora es simplemente agregar paquetes a nuestro gusto utilizando:

~~~
npm install [paquete]
~~~


#### Instalar node en Mac OS

Como prerequisito tenemos que tener instalado Xcode.

La forma más sencilla es descargar desde la página el instalador para Macintosh (node-vX.pkg Macintosh installer), ejecutarlo y seguir los pasos. Por defecto instala tanto Node como NPM.

Al terminar se indica que la ruta donde se copiaron los archivos es /usr/local/bin.

La otra forma de instalarlo es la misma que la de [Linux](#linux) explicada más arriba.

Comprobamos las versión de node:

~~~
node -v
~~~

… y de NPM:

~~~
npm -v
~~~


### Ejemplo 1 : Llamadas Asíncronas

Cuando la terminación de una operación y la reanudación de un programa ocurren a la vez, se dice que estamos realizando llamadas síncronas. Nuestro proceso se bloquea mientras espera la terminación de una operación .

~~~
f=leer_fichero()
//Hasta que no se lee el fichero no llegamos aquí
t=leer_teclado()
//Hasta que no se lee el teclado no llegamos aquí
buscar(f,t)
//Resto del programa
~~~

La alternativa es no esperar, ser asíncronos. Debido a que no esperamos ocurren dos cosas no bloqueamos la ejecución de nuestro programa. 

Por esta razón a las llamadas asíncronas también se les dice no bloqueantes. La llamada retorna antes de que se complete la operación y, por tanto, no puede devolver el resultado. Para solucionar ellos podemos usar diversas opciones, pero nos enfocaremos en los callbacks o retrollamadas, el cual es interrumpir e indicar que código hay que ejecutar en el momento de realizar la llamada asíncrona.

~~~
f=leer_fichero()
t=leer_teclado()
buscar(f,t)
//Resto del programa
~~~

En vez de esperar el resultado de las funciones, indico a estas funciones qué tienen que hacer cuando terminen.

~~~
leer_fichero_asincrono(usa_fichero)
leer_teclado_asincrono(usa_teclado)

//Resto del programa
~~~

Así, en el caso de leer_fichero_asincrono() lo que hago es decirle que, cuando termine de leer el fichero llame a la función usa_fichero(). Igualmente, con leer_teclado_asincrono(). Estas funciones usa_fichero() y usa_teclado() que se ejecutan cuando se completa la operación son las retrollamadas.

Acabadas las presentaciones, lo importante aquí es que la función  leer_fichero_asincrono() no espera y la ejecución continúa. Se ejecuta leer_teclado_asincrono() y tampoco espera, seguimos ejecutando lo que haya que ejecutar despues y, mientras, se lee del fichero y del teclado a la vez.

¿Y dónde está la función buscar() que es donde realmente hacemos algo con lo leído? Bueno, no podemos llamarla hasta que estemos seguros de que tanto el fichero como el teclado se han leído. Esa es la responsabilidad de usa_fichero() y usa_teclado() que deben guardar los datos, comprobar que están ambos y, si es así, llamar la función buscar() con ellos. 

~~~
var f, t string;
func usa_fichero(rf) { 
f = rf; 
if t!="" {buscar(f,t)} }
func usa_teclado(rt) { 
t = rt; 
if f!="" {buscar(f,t)} }

//Resto del programa
~~~

Para eso guardamos los datos recibidos en dos variables visibles por ambas retrollamadas y cuando se comprueba que ambas cadenas se han leído, llama a buscar().

"El infierno de devolución de llamada" o mejor conocido como "callback hell" se refiere a los callback fuertemente jerarquizados volviendose ilegibles o pesado de leer. El metodo principal para corregir esto es lo que definimos anteriormente como la **modularizacion**.


### Ejemplo 2 : Servidor HTTP

[Descargar el Ejemplo 2](samples/Ejemplo2.zip) 

Crearemos un servidor HTTP básico que responda a algunas de nuestras peticiones de manera predefinida.

#### Primer Servidor

Para no alojar todo el código de nuestras aplicaciones en un solo archivo (lo cual resultaria tedioso de entender y poco organizado) Node.js te permite implementar al patrón de diseño MVC. Escribiremos un archivo principal (app.js) con el que iniciaremos nuestra aplicación y la lógica la programaremos en los módulos.

Node.js integra un completo servidor (y cliente) web en el módulo `http`. Para hacer uso de un módulo en Node.js hemos de utilizar el comando `require` con un único parámetro, el nombre del módulo que queremos cargar. Copiemos este codigo en un archivo nuevo y guardemoslo como `server.js`.


~~~js
//server.js
/* Iniciamos el módulo http */
var http = require("http");
/* Creamos el objeto del servidor */
http.createServer(function(request, response) {
    /* Preparamos las cabeceras de respuesta */
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Core Upgrade!");
    response.end();
}).listen(3000);
~~~

Ahora podemos ejecutarlo escribiendo en la consola `node server.js` . Si apuntamos nuestro navegador a http://localhost:3000 nos encontraremos con nuestro mensaje.

El método `createServer` del objeto `http` devuelve un objeto de tipo servidor al que le concatenamos directamente la llamada a su método listen y lo ponemos a escuchar en el puerto 3000.

Al método se le pasa un único parámetro que es una función anónima (que también podríamos haber definido previamente y pasarla como argumento, el resultado sería el mismo). Cada vez que el servidor recibe una nueva petición, Node.js llama a la función que le hemos pasado como parámetro, a este tipo de funciones se les llama callbacks.

A dicho callback se le pasan dos parámetros, `request` y `response`. Sus nombres son autodescriptivos, el primero de ellos es un objeto que contiene todos los datos relacionados con la petición y el segundo objeto es utilizado para responder al navegador. Cuando hemos acabado de responder al navegador tenemos que ejecutar `response.end()`.

Refactoricemos el código de server.js para convertirlo en un módulo de Node.js.

~~~js
//server.js
var http = require("http");
function serverStart() {
    http.createServer(function(request, response) {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("Hola Core Upgrade!");
        response.end();
    }).listen(3000);
    console.log("Server started...");
}
exports.start = serverStart;
~~~


Para convertir nuestro código a un módulo solo tenemos que encerrarlo dentro de una función y exportarla. Ahora vamos a crear nuestro archivo principal `app.js`:

~~~js
//app.js
var server = require("./server");
server.start();
~~~

Si ejecutamos `node app.js` veremos el mensaje **Server started…** en la consola y si recargamos el navegador veremos que nuestra aplicación web sigue funcionando.


#### Routing o enrutado de peticiones

Toda la información requerida está contenida en el objeto `request` que se le pasa a la función anónima al crear nuestro servidor.

Usaremos el módulo `url` para procesar esa información con el objetivo de crear rutas para las peticiones HTTP. 

~~~js
//server.js
var http = require("http");
var url = require("url");
function serverStart(route) {
    http.createServer(function(request, response) {
        // agregamos el modulo url
        var pathname = url.parse(request.url).pathname; 
        console.log("Received petition for " + pathname);
        route(pathname);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("Hola Core Upgrade!");
        response.end();
    }).listen(3000);
    console.log("Server started...");
}
exports.start = serverStart;
~~~

Ahora nuestro servidor web es capaz de distinguir entre peticiones basándose en su URL. Esto nos permite mapear peticiones hacia nuestros manejadores.

Crearemos un nuevo módulo llamado `router.js` donde escribiremos el código necesario para empezar a enrutar y a modificar el código de nuestro servidor.

~~~js
//router.js
function route(pathname) {
    console.log("Routing a new petition for " + pathname);
}
exports.route = route;
~~~

Este código aún no rutea nada por que no hemos creado ningún manejador aún. De momento sirve para nuestro propósito didáctico. Modificamos la entrada principal de la aplicación, el archivo `app.js`:

~~~js
//app.js
var server = require("./server");
var router = require("./router");
server.start(router.route);
~~~

Si ejecutamos nuestro servidor y recargamos la página veremos el siguiente log en la consola:

~~~
$ node App.js 
Server started...
Received petition for /
Routing a new petition for /
Received petition for /favicon.ico
Routing a new petition for /favicon.ico
~~~

La petición a favicon.ico es normal al usar navegadores web modernos, ignórala de momento.


#### Manejadores/Handlers

Cada petición debe tener asociado un manejador de eventos que se haga cargo de procesar la petición. Crearemos un nuevo módulo al que llamaremos `requestHandlers.js` y que va a contener el código a ejecutar por cada evento. 

~~~js
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
~~~

Se usa el objeto `request` para conseguir que nuestras respuestas sean asíncronas.

Ahora refactoricemos nuestro código en `server.js` y `router.js` para adaptarlo a nuestros manejadores.

~~~js
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
~~~

Añadimos dos parámetros a la llamada de la función route con la finalidad de añadir nuestro manejador y el objeto response. Sigamos con el archivo `router.js`:

~~~js
//router.js
function route(handler, pathname, response) {
    console.log("Routing a new petition for" + pathname);
    if (typeof handler[pathname] === 'function') {
        handler[pathname](response);
    } else {
        console.log("No request handler for " + pathname + " skipping");
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 Not Found");
        response.end();
    }
}

exports.route = route;
~~~

Aquí si hay cambios importantes, ahora la función obtiene el manejador a ejecutar y lo ejecuta si es una función pasándole como parámetros el objeto response y delegamos la respuesta directamente al manejador. 

Si no existe un manejador al que pasarle la petición, devuelve una página de `error 404`.

Tan solo nos queda hacer unas modificaciones en `app.js` para despachar las peticiones. También añadimos el parámetro handler a la función start.

~~~js
//app.js
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handler = {}
handler["/"] = requestHandlers.index;
handler["/primera_pagina"] = requestHandlers.primera_pagina;
handler["/segunda_pagina"] = requestHandlers.segunda_pagina;
server.start(router.route, handler);
~~~

### Ejemplo 3 : Peticiones POST

[Descargar el Ejemplo 3](samples/Ejemplo3.zip) 

Utilizaremos un archivo `app.js` de entrada principal de la aplicación  y nuestro código estará distribuido en módulos. 

#### Manejar peticiones POST

Aprendimos a manejar peticiones GET provenientes del cliente web y a crear manejadores que las despacharan a los métodos correspondientes para producir la salida y devolverla al navegador de forma no bloqueante. Ahora veamos como se maneja una petición POST sencilla.

Vamos a añadir un sencillo formulario que el usuario rellenará y entonces la página será actualizada con la información proporcionada por el usuario. Vamos a mostrar este formulario en la página principal que es asimismo el manejador /primera_pagina.

~~~js
//requestHandlers.js
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
exports.index = index;
exports.primera_pagina = primera_pagina;
exports.segunda_pagina = segunda_pagina;
~~~

![Sin titulo](Imagenes/1.png)


Para que podamos manejar las peticiones POST de forma no bloqueante, es decir, asíncrona, Node.js nos hace llegar la información proveniente del cliente en pequeñas porciones usando callbacks que son invocados ante eventos específicos. 

**Cuando una porción de información llega, se dispara el evento** `data`**, cuando toda la información ha sido cargada, se dispara el evento** `end`**, de esta manera podemos manejar la llegada de datos desde el formulario de forma asíncrona.**

Lo primero que necesitamos, es decirle a Node.js que funciones debe de invocar cuando los eventos se disparen. Para hacerlo, debemos añadir listeners al objeto request en el callback que es invocado cuando el servidor recibe una petición. En nuestro caso, la función anónima definida en `server.js`.

~~~js
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
~~~

Hay varios cambios en este archivo. 

-Para empezar, hemos definido la variable **postData** donde alojaremos los datos provenientes del formulario. 

-Después hemos definido que esperamos recibir esos datos codificados como utf8. 

-Hemos añadido un capturador de eventos o event listener que dispara una función anónima cuando se lanza el evento **“data“**. Dicha función anónima introduce en la variable **postData** los nuevos datos conforme van llegando, no tiene misterio alguno. También hemos añadido un event listener para el evento **“end“** que dispara una función anónima que pasa todos los datos al enrutador, incluida la nueva variable **postData**.

Hemos añadido un log de cada porción de información que nos llega a través del POST a modo de depurado. Si probamos el formulario podremos comprobar como con cantidades pequeñas de texto el evento **data** solo es disparado una vez pero si usamos fuentes de datos más largas es disparado en múltiples ocasiones.

Para probarlo añade al textarea el texto que produce esta url y comprobarás como el evento es disparado en múltiples ocasiones.

#### Procesando los datos enviados

De momento no tenemos un manejador para el path /enviar vamos a crearlo y vamos a hacer que utilice los datos enviados en el formulario para alguna tarea.

~~~js
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
~~~

Añadimos el módulo querystring para procesar los campos del formulario que el usuario ha rellenado. 

Añadimos la función enviar que recibe dos parámetros, **response** que usamos para responder de vuelta al navegador y **postData** que contiene los datos enviados por el usuario. Utilizamos el método parse del módulo **querystring** para separar la cadena **postData** en elementos y lo utilizamos para mostrar la salida.

Ademas de estos cambios, debemos de hacer cambios en **app.js** y añadir la ruta a **router.js**:

~~~js
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
~~~

~~~js
//router.js
function route(handler, pathname, response, postData) {
    console.log("Routing a new petition for " + pathname);
    if (typeof handler[pathname] === 'function') {
        handler[pathname](response, postData);
    } else {
        console.log("No request handler for " + pathname + " skipping");
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 Not Found");
        response.end();
    }
}

exports.route = route;
~~~

Los cambios en **router.js** también son menores, solamente hemos añadido soporte al enrutador para que pase la variable **postData** a los manejadores desde el servidor.

## Ejercicios

Pero antes de continuar, reforcemos lo que hemos aprendido en esta primera sección con unos cuántos ejercicios muy simples.

a. Crear un servidor que escuche en el puerto 4000 y que tenga una lista de notas y alumnos como respuestas para las paginas (manejadores/handlers) /curso1 y /curso2.

b. Crear un path /registrarAlumno para que devuelva los datos que se envien desde un formulario en el path /form que tenga  5 textfields donde se escriban notas (numeros) cada uno al lado de un label con los nombres de los cursos : "Algebra", "Aritmetica", "Geometria", "Historia" y "Comunicacion". 

## Cuestionario

> 1.   ¿Como podemos evitar el callback hell segun el material?
>>a. Modularizacion
>>
>> b. Promesas
>>
>> c. Generadores
>>
>> d. Todas las anteriores
> 2.   Asincrona es sinonimo de:
>> a. Bloqueante
>>
>> b. No bloqueante
>>
>> c. Multihilo
>>
> d. Ninguna de las anteriores
> 3.   ¿Que es Node.js?
>>
>> a. Framework
>>
>> b. Entorno javascript
>>
>> c. Lenguaje de programacion
>>
>> d. Ninguna de las anteriores
> 4.   ¿Que es un callback?
>>
>>a. Funcion que se utiliza como argumento de otra funcion.
>>
>>b. Es una retrollamada.
>>
>>c. Las 2 anteriores.
>>
>>d. Ninguna de las anteriores.
> 5.   ¿Donde podemos usar Node.js?
>>
>> a. Aplicaciones web (especialmente las de tiempo real)
>>
>> b. Network applications
>>
>> c. Sistemas distribuidos
>>
>> d. Todas las anteriores
> 6.   ¿Cuales son las ventajas de usar node.js?
>>
>> a. Provee una facil manera de construir programas de red escalable
>>
>> b. Generalmente rapido
>>
>> c. Gran concurrencia
>>
>> d. Asincrono
> 7.   ¿Donde corre Node.js?
>>
>> a. Windows
>>
>> b. Linux
>>
>> c. Mac OS
>>
>> d. Todas las anteriores
> 8.   ¿Como trabaja Node.js?
>>
>> a. En el ambiente v8.
>>
>> b. Utiliza JavaScript.
>>
>> c. De manera no bloqueante y un bucle(loop) de eventos de un solo hilo.
>>
>> d. Todas las anteriores.

[Lectura recomendada](http://courseware.codeschool.com/node_slides.pdf)

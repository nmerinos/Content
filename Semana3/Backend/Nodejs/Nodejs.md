# Node.js

## Ejemplos

### Chat con socket.io

Los llamados sockets proveen una comunicación bidireccional entre un cliente y un servidor. Lo que permite el envío de mensajes en tiempo real. Como explicamos anteriormente cuando se escribe un mensaje el servidor lo recibe y lo envía a todos los clientes conectados.

Primero creamos el archivo **package.json**, podemos llamar a nuestra carpeta del proyecto **primer-chat**.

```json
{
  "name": "socket-chat-example",
  "version": "0.0.1",
  "description": "my first socket.io app",
  "dependencies": {
    "express": "4.10.2",
    "socket.io": "1.2.0"
  }
}
```

Como vemos estaremos usando la librería **socket.io**. Como sabemos descargamos las dependencias con el siguiente comando:

```js
npm install
```

Luego creamos un archivo llamado **index.js** que servira para correr nuestraaplicaciónn.

```js
var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.send('<h1>Hola mundo</h1>');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
```

Esto es, Express inicializa la inicializa la app y le provee un servidor HTTP. Definimos que el path "/"mostrará un mensaje de **"Hola mundo"**. Finalmente definimos que el puerto donde correrá el servidor será el **3000**.

Ejecuta **node index.js** para que veas lo siguiente:

![Pantallazo](http://imageshack.com/a/img913/5307/27HsTb.png)

![Pantallazo](http://imageshack.com/a/img673/2716/2gptn3.png)


#### Creando HTML

Hasta ahora hemos creado el archivo **index.js** en el cual mediante **res.send** enviamos una cadena HTML. Pero nuestro HTML completo (que mostrará el chat) a mostrar se vería confuso si lo situamos en ese mismo lugar. Es por ello que, por una cuestión de orden, crearemos un archivo **index.html**. Para ello en lugar de usar **res.send** usaremos **res.sendFile**.

```js
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
```

Luego, escribiremos en **index.html** lo siguiente:

```html
<!doctype html>
<html>
  <head>
    <title>Socket.IO chat</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font: 13px Helvetica, Arial; }
      form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
      form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
      form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
      #messages { list-style-type: none; margin: 0; padding: 0; }
      #messages li { padding: 5px 10px; }
      #messages li:nth-child(odd) { background: #eee; }
    </style>
  </head>
  <body>
    <ul id="messages"></ul>
    <form action="">
      <input id="m" autocomplete="off" /><button>Send</button>
    </form>
  </body>
</html>
```

Si reiniciamos el proceso (con Ctrl+C y corremos el **node index** otra vez) y refrescamos la página obtendremos:

![Pantallazo](http://imageshack.com/a/img538/16/D99jCq.png)

#### Integrando Socket.io

Socket.IO esta compuesto de 2 partes:

Un servidor (socket.io )que integra el servidor HTTP Node.js y la libreria cliente (socket.io-client) que corre en el lado del browser.

```js
//index.js
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
```

Notar que se inicializa el socket.io al pasar el objeto http. Luego se escucha el evento conexión para sockets que llegan y lo muestra en la consola.  

En index.html se agrega lo siguiente antes del `</body>`:

```html
<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io();
</script>
```

Esto es todo lo que necesitamos para el **socket.io-client**. Si ahora recargamos el servidor y la página web debería ver en la consola el mensaje **“a user connected”**.

![Pantallazo](http://imageshack.com/a/img908/5882/B4a8Ph.png)

Cada socket dispara un evento especial:

```js
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
```

Luego si refrescas la pagina, veras:

![Pantallazo](http://imageshack.com/a/img661/2556/1MxR7F.png)

#### Eventos

La idea principal detras de Socket.io es enviar y recibir cualquier evento que se quiera, con cualquier data que se quiera. 

Hagamos que cuando el usuario tipea un mensaje, el servidor lo consigua como evento de mensaje de chat. Para ello los scripts en **index.html** deben verse como:

```html
<script src="https://cdn.socket.io/socket.io-1.2.0.js"></script>
<script src="http://code.jquery.com/jquery-1.11.1.js"></script>
<script>
  var socket = io();
  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
</script>
```

Y en **index.js** imprimimos el mensaje:

```js
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});
```

<video sutoplay loop width="100%"><source src="https://i.cloudup.com/transcoded/zboNrGSsai.mp4"></video>

#### Broadcasting

Para enviar el evento a todos los clientes, usamos **io.emit**:

```js
io.emit('some event', { for: 'everyone' });
```

Y si queremos enviar el mensaje a todos menos a cierto socket, tenemos el flag broadcast:ast flag:

```js
io.on('connection', function(socket){
  socket.broadcast.emit('hi');
});
```

En este caso, enviaremos el mensaje a todos, incluyendo al emisor.

```js
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
```

Y en el lado del cliente capturamos el evento de mensaje del chat, lo incluiremos en la página. El código javascript del lado del cliente será:

```html
<script>
  var socket = io();
  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
</script>
```

<video sutoplay loop width="100%"><source src="https://i.cloudup.com/transcoded/J4xwRU9DRn.mp4"></video>


## Ejercicios

### Ejercicio 1

Modificar el código para que soporte nicknames al usuario al momento de ingresar al chat. Y para que cada vez que a un usuario le llega un mensaje de otro tenga un efecto de sonido estilo messenger. Se recomienda visitar el siguiente [ejemplo](https://github.com/alexander1231/chat-example2/).

## Cuestionario:

> 1.Es cierto sobre socket.io:

a.Una libreria javascript.

b.Tiene 2 componentes.

c.Podemos realizar broadcasting a varios sockets.

d.Todas las anteriores.

> 2.Escriba un servidor de máximo 6 líneas de código.

> 3.¿Cuál es la diferencia entre **res.send** y **res.sendFile**?



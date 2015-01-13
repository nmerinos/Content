# Firebase

Firebase es servicio en la nube la cual nos permite crear una base de datos en tiempo real, esta la podemos utilizar para diferentes aplicaciones tales como crear juegos multiplayer en tiempo real, un chat, entre otros.
Además Firebase te permite agregar métodos de autentificación a tu aplicación de manera sencilla con diferentes servicios tales como Facebook, Twitter, Google+ o Github.

## Firebase en una aplicacion web.

- Para poder utilizar este servicio lo primero que necesitas es crearte una cuenta nueva en [Firebase](https://www.firebase.com/signup/),la cual es gratis hasta un número determinado de conexiones, desde la cual podrás administrar tu base de datos.

- Una vez registrados ingresamos a la [cuenta](https://www.firebase.com/account/) y creamos nuestra primera app donde se almacenará nuestra base de datos.En el ejemplo creamos una app con el nombre *CoreUpgrade15* y la url de la app.

- Creada nuestra aplicación ya podemos acceder a esta con la url que usamos al momento de crearla en este caso *https://coreupgrade15.firebaseio.com/* y como podemos ver nuestra base de datos esta vacia.

- Para poder usar Firebase necesitas incluir la librería en tu documento HTML:

  ```html
  <script src="https://cdn.firebase.com/js/client/2.1.0/firebase.js"></script>
  ```

- Ademas en el documento HTML agregar un nuevo script de JavaScript para hacer modificaciones a nuestra base de datos desde el frontend.

 ```html
 <script src="myapp.js"></script>
 ```

- En el archivo de JS creado **myapp.js** agregamos una referencia a nuestra app creada en Firebase anteriormente

 ```js
 // En el ejemplo nuestra url creada es coreupgrade15
 var myFireBase = new Firebase("https://coreupgrade15.firebaseio.com");
 ```

## Agregar data a Firebase
- Ahora ya podemos agregar data a nuestro Firebase, para lo cual existen cuatros metodos los cuales son `set()`, `update()`, `push()` o `transaction()`, los cuales toman como parametro cualquier objeto en formato JSON.
- Para comenzar vamos a utilizar el metodo `set()` la cual nos permite crear o reemplazar (si ya existe) data a una ruta definida.
```js
 myFireBase.set({
   usuario1 : {
     nombre: "Marie",
     edad: 32,
     casado: true
   },
   usuario2 : {
     nombre: "Pierre",
     edad: 41,
     casado: false
   }
 });
```
 **El metodo set va a reemplazar toda la informacion que esta pueda contener**

- Si lo que queremos es agregar una lista de datos usamos el metodo `push()` el cual agrega un nuevo objeto a la referencia de Firebase

```js
 myFirebase.push({
   usuario : "Ted"
   comentario: "I love Linux OS"
 });
 myFirebase.push({
   usuario: "Stallman"
   comentario: "I did write some code in Java once, but that was the island in Indonesia."
});
```

**Al usar el metodo push este nos genere un id unico con el cual podemos acceder a este objeto**

## Leer data de Firebase

- Para poder leer la data de una referencia a Firebase usamos el método `on`

```js
  myFirebase.on("value", function(data) {
    console.log(data.val());
  });
```

- Ademas algo muy importante que nos permite Firebase es agregar eventos cuando existe alguna modificacion en la base de datos, tales como un objeto es agregado,modificado, movido o eliminado de la base datos.


```js
myFirebase.on("child_added", function(snapshot) {
  var newComment = snapshot.val();
  console.log("Nuevo comentario agregado");
  console.log("Usuario" + newComment.usuario);
  console.log("Comentario: " + newComment.comentario);
});
 myFirebase.push({
   usuario : "Ted"
   comentario: "I love Linux OS"
 });
 myFirebase.push({
   usuario: "Stallman"
   comentario: "I did write some code in Java once, but that was the island in Indonesia."
});
```

## Ejemplo 

¿Alguna vez quisiste hacer un chat? Pues ahora podrás hacerlo de una forma fácil y sencilla.

Este es el código de ejemplo para FireBase

```html
<!doctype html>
<html>
  <head>
    <script src='https://cdn.firebase.com/js/client/2.0.4/firebase.js'></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
  </head>
  <body>
    <div id='messagesDiv'></div>
    <input type='text' id='nameInput' placeholder='Name'>
    <input type='text' id='messageInput' placeholder='Message'>
    <script>
	// Aquí conectamos con nuestro link de firebase
      var myDataRef = new Firebase('https://coreupgrade15.firebaseio.com/');
      $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          myDataRef.push({name: name, text: text});
          $('#messageInput').val('');
        }
      });
      myDataRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
      });
      function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };
    </script>
  </body>
</html>
```

Y esto es todo el código que necesitan para poder hacer un chat! :)
*Cualquier consulta sobre el codigo puedes hacerla en el foro de la plataforma*

[Ver más ejemplos](https://www.firebase.com/docs/web/examples.html)

## Ejercicio

- Realizar utilizando firebase, un webapp ToDoList. Esta webapp tendrá que tener un input text, un botón para agregar lo que se digite en el input-text. La forma en que se añadira cada input-text a la lista será travez de js. El CSS a su gusto.

![Ejemplo](http://yeoman.io/assets/img/codelab/image_19.524f.png)



## Cuestionario:

> 1.¿Qué es Firebase?

a.Una base de datos SQL.

b.Una base de datos NoSQL.

c.Una librería.

d.Ninguna de las anteriores.

> 2.Firebase es para:

a. Apps realtime.

b.Manejar fácil autentificación.

c.Guardar datos en la nube.

d.Todas las anteriores.

> 3.Con Firebase:

a. Desplegar una aplicación a la web es tan sencillo como pulsar unas teclas en la línea de comandos.

b.Entregar la totalidad del contenido estático (html, js, imágenes, etc.) a través de una conexión segura SSL

c.a y b.

d.Ninguna de las anteriores.


 


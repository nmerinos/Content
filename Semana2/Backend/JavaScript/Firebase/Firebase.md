#Firebase

Firebase es servicio en la nube la cual nos permite crear una base de datos en tiempo real, esta la podemos utilizar para diferentes aplicaciones tales como crear juegos multiplayer en tiempo real, un chat, entre otros.
Ademas Firebase te permite agregar metodos de autentificacion a tu aplicacion de manera sencilla con diferentes servicios tales como Facebook, Twitter, Google+ o Github.

## Firebase en una aplicacion web.

- Para poder utilizar este servicio lo primero que necesitas es crearte una cuenta nueva en [Firebase](https://www.firebase.com/signup/),la cual es gratis hasta un numero determinado de conexiones, desde la cual podras administrar tu base de datos.
- Una vez registrados ingresamos a la [cuenta](https://www.firebase.com/account/) y creamos nuestra primera app donde se almacenara nuestra base de datos.En el ejemplo creamos una app con el nombre *CoreUpgrade15* y la url de la app.
- Creada nuestra aplicacion ya podemos acceder a esta con la url que usamos al momento de crearla en este caso *https://coreupgrade15.firebaseio.com/* y como podemos ver nuestra base de datos esta vacia.
- Para poder usar Firebase necesitas incluir la libreria en tu documento HTML:
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

## Leer data de Firebase

- Para poder leer la data de una referencia a Firebase usamos el metodo `on`

```js
  myFirebaseRef.on("value", function(data) {
    console.log(data.val());
  });
```

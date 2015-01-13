# Funciones en JavaScript

Una vez definida una funcion en JS esta puedae tomar varios roles:

1. Funcion normal
Puedes llamar a una funcion directamente por su nombre.Por convencion los nombres de estas funciones comienzan con minuscula.
  `mensaje('hi world')`
2. Constructor
Puedes llamar a una funcion via el operador `new`, en este caso la funcion viene a ser un constructor de un objeto.Por convencion los nombres de los constructores comienzan con mayuscula.
  `new Date()`
3. Metodo
Puedes guardar una funcion en una propiedad de un objeto, la cual se convierte en un metodo la cual puedes llamar via ese objeto. Por convencion los nombres de los metodos comienzan por letra minuscula.
  `obj.metodo()`

Los constructores y metodos se explican en el tema de [Objetos]().

Una manera de  las maneras de definir una funcion es via *declaracion de una funcion*:
```js
function suma(a,b){
  return a + b;
}
```
Pero ademas existe otra manera de definir una funcion la cual es asignar una expresion con una funcion a una variable:

```js
var suma = function (a,b){
  return a + b;
};
```
La principal diferencia es que la declaracion de funcion hace que esta este disponible para todo el programa incluso se puede usar antes de la declaracion de la funcion.

## Parametros  en funciones de JS
En JavaScript puedes llamar a una funcion con cualquier numero de parametros, independientemente del numero de parametros con la que fue definida la funcion.

1. Mas parametros que los que fueron definidos
Los parametros extras son ignorados en la funcion, pero puedes obtenerlos mediante la variable especial `arguments` la cual retorna todos los argumentos con la que fue llamada la funcion.
```js
function div(a,b){
 return (a/b)
 console.log(arguments)
}
div(125,15,5) //
```
2. Menos parametros que los que fueron definidos:
Si llamamos a una funcion con menos parametros con la que fue definida, estos parametros faltantes toman un valor indefinido `undefined`
```js
function div(a,b){
 if(arguments.length< 2){
 console.log("Error en el numero de argumentos");
 } else
 return (a/b)
}
div(70)
```
3. Parametros opcionales:
En algunos casos necesitamos llamar a las funciones con ciertos parametros que en caso de no pasarlos a la funcion se les asigne un valor por defecto.
Por ejemplo si queremos definir una funcion que retorne un objeto con los datos de un usuario:
```js
function crearUsuario(nombre,id,ciudad){
 usuario = { "nombre": nombre,"id": id, "ciudad": ciudad };
 return usuario;
}
```
Si queremos que la funcion en caso de no pasarle un argumento le asigne un valor por defecto, podemos hacerlo de varias maneras:

- Usando el condicional `if`
```js
function crearUsuario(nombre,id,ciudad){
 if (nombre === undefined){
   nombre = "Anonymous"
 }
 if (id === undefined){
   id = 0;
 }
 if (ciudad === undefined){
   ciudad = "Lima";
 }
 usuario = { "nombre": nombre,"id": id, "ciudad": ciudad };
 return usuario;
}
console.log(crearUsuario("Amelie","1241239","Arequipa"))
console.log(crearUsuario("Amelie","1241239"))
console.log(crearUsuario("Amelie"))
console.log(crearUsuario())
```

- Usando el operador "or" `||`

```js
function crearUsuario(nombre,id,ciudad){
  nombre = nombre || "Anonymous"
   id = id || 0;
   ciudad = ciudad || "Lima";
   usuario = { "nombre": nombre,"id": id, "ciudad": ciudad };
   return usuario;
}
console.log(crearUsuario("Amelie","1241239","Arequipa"))
console.log(crearUsuario("Amelie","1241239"))
console.log(crearUsuario("Amelie"))
console.log(crearUsuario())
```

# Objetos en JavaScript

Podemos considerar un objeto como un conjunto de propiedades donde cada propiedad es un par llave-valor (key-value).La llave es un strin y el valor es cualquier valor de JavaScript.

```js
var usuario = {
    nombre: 'Jane',
    describe: function () {
        return 'Persona llamada '+this.name;
    }
};
```
El objeto anterior tiene dos propiedades "nombre" y "describe". Tu puedes leer ("get") y escribir ("set") estas propiedades:

```js
usuario.nombre // get
console.log(usuario.nombre)
usuario.nombre = 'John' // set
console.log(usuario.nombre)
usuario.apellido = 'Curie'
console.log(jane.apellido)
```

Las propiedades del objeto que son funciones se conocen como metodos. Estos utilizan la variable especial `this` para referirse al objeto que fue usada para llamarlos.

`usuario.describe() // Llamada al metodo describe del objeto usuario`
`usuario.nombre = 'Jane' // Cambiamos la propiedad "nombre" del objeto`
`usuario.describe() // Llamada al metodo describe del objeto usuario con la propiedad`

Podemos usar el operador `in` para revisar si existe una propiedad en un objeto.

```js
'apellido' in usuario //true
'ciudad' in usuario //false
```

Si se intenta leer una propiedad que no existe, se obtiene como resultado el valor `undefined`.

```js
console.log(usuario.ciudad) //undefined
```

El operador `delete` se utiliza para eliminar una propiedad:

```js
delete usuario.apellido //true
'apellido' in  usuario //false
```

# JSON (JavaScript Object Notation)

- Es un formato de texto plano para almacenar data.
- Es un formato muy popular para intercambio de datos para servicios web, para archivos de configuracion y mas

## Formato de datos
Un formato de datos JSON almacena la informacion como texto plano, su notacion es un subconjunto de la notacion de JavaScript como se muestra en el siguiente ejemplo:

`misdatos.json`
```json
{
    "nombre": "Bilbo",
    "raza": "Hobbit",
    "casado": false,
    "friends": [ "Gandalf", "Gollum" ]
}
```
Podemos ver que se trata de un objeto de JavaScript como se mostro en la primera parte del curso de JS, este objeto contiene cuatro miembros los cuales son, *nombre*, *raza*, *casado*, y *amigos*, con sus respectivos valores los cuales son una cadena de texto en el primero y segundo, un booleano en el tercero y un array en el cuarto.

En JavaScript podemos usar la funcion `JSON.stringify()` que convierte un elemento de JavaScript a una cadena de texto en formato JSON la cual se utilizara mas adelante para enviar datos desde el server al frontend.

```js
usuario = { "id" : "LulzSec",
            "notas" : [ 15, 20, 13]
          };
console.log(JSON.stringify(usuario));
```
Ademas se pueden pasar los parametros alternativos `replacer` que modifica el objeto antes de convertirlo en una cadena de texto de JSON y `space` modifican el formato del espaciado.


```js
usuario = { "id" : "LulzSec","notas" : [ 15, 20, 13]};
usuarioJSON = JSON.stringify(usuario, null, 2);
console.log(usuarioJSON);
```
*En el ejemplo anterior se utiliza el parametro opcional space el cual recibe un numero como parametro que utiliza para agregar ese numero de espacios al identado de cada linea del formato JSON*

Para el caso contrario ocurre cuando recibimos una cadena de texto en formato JSON desde el server y queremos convertir esta a un objeto JavaScript, para eso usamos el metodo JSON.parse().

```js
usuarioJSON = '{ "id" : "LulzSec","notas" : [ 15, 20, 13]}';
console.log(JSON.parse(usuarioJSON));
```

#Ejercicio

Modificar el script del archivo que se muestra como ejemplo para completar los campos del cuestionario, usando el objeto que se recibe como respuesta a un archivo JSON, ademas validar que la respuesta sea la correcta, la alternativa correcta la encuentras como una propiedad del objeto.

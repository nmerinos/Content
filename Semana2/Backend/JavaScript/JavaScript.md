# Funciones en JavaScript

Una vez definida una función en JS esta puede tomar varios roles:

1.Función normal

Puedes llamar a una función directamente por su nombre.Por convención los nombres de estas funciones comienzan con minúscula.

  `mensaje('hi world')`

2.Constructor

Puedes llamar a una función vía el operador `new`, en este caso la función viene a ser un constructor de un objeto.Por convención los nombres de los constructores comienzan con mayúscula.

  `new Date()`

3.Método

Puedes guardar una función en una propiedad de un objeto, la cual se convierte en un método la cual puedes llamar vía ese objeto. Por convención los nombres de los métodos comienzan por letra minúscula.

  `obj.metodo()`

Los constructores y métodos se explican en el tema de **Objetos**.

Una manera de  las maneras de definir una función es via *declaración de una función*:

```js
function suma(a,b){
  return a + b;
}
```
Pero además existe otra manera de definir una función la cual es asignar una expresión con una función a una variable:

```js
var suma = function (a,b){
  return a + b;
};
```
La principal diferencia es que la declaración de función hace que esta este disponible para todo el programa incluso se puede usar antes de la declaración de la función.

## Parametros  en funciones de JS

En JavaScript puedes llamar a una función con cualquier numero de parámetros, independientemente del número de parámetros con la que fue definida la función.

1.Más parámetros que los que fueron definidos

Los parámetros extras son ignorados en la función, pero puedes obtenerlos mediante la variable especial `arguments` la cual retorna todos los argumentos con la que fue llamada la función.

```js
function div(a,b){
 return (a/b)
 console.log(arguments)
}
div(125,15,5) //
```

2.Menos parámetros que los que fueron definidos:

Si llamamos a una función con menos parámetros con la que fue definida, estos parametros faltantes toman un valor indefinido 
`undefined`.

```js
function div(a,b){
 if(arguments.length< 2){
 console.log("Error en el numero de argumentos");
 } else
 return (a/b)
}
div(70)
```

3.Parámetros opcionales:

En algunos casos necesitamos llamar a las funciones con ciertos parametros que en caso de no pasarlos a la función se les asigne un valor por defecto.

Por ejemplo si queremos definir una función que retorne un objeto con los datos de un usuario:

```js
function crearUsuario(nombre,id,ciudad){
 usuario = { "nombre": nombre,"id": id, "ciudad": ciudad };
 return usuario;
}
```

Si queremos que la función en caso de no pasarle un argumento le asigne un valor por defecto, podemos hacerlo de varias maneras:

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

Podemos considerar un objeto como un conjunto de propiedades donde cada propiedad es un par llave-valor (key-value).La llave es un string y el valor es cualquier valor de JavaScript.

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

Las propiedades del objeto que son funciones se conocen como métodos. Estos utilizan la variable especial `this` para referirse al objeto que fue usada para llamarlos.

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

- Es un formato muy popular para intercambio de datos para servicios web, para archivos de configuración y más.

## Formato de datos

Un formato de datos JSON almacena la información como texto plano, su notación es un subconjunto de la notación de JavaScript como se muestra en el siguiente ejemplo:

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

En JavaScript podemos usar la función `JSON.stringify()` que convierte un elemento de JavaScript a una cadena de texto en formato JSON la cual se utilizara mas adelante para enviar datos desde el server al frontend.

```js
usuario = { "id" : "LulzSec",
            "notas" : [ 15, 20, 13]
          };
console.log(JSON.stringify(usuario));
```

Además se pueden pasar los parámetros alternativos `replacer` que modifica el objeto antes de convertirlo en una cadena de texto de JSON y `space` modifican el formato del espaciado.


```js
usuario = { "id" : "LulzSec","notas" : [ 15, 20, 13]};
usuarioJSON = JSON.stringify(usuario, null, 2);
console.log(usuarioJSON);
```
*En el ejemplo anterior se utiliza el parámetro opcional space el cual recibe un número como parámetro que utiliza para agregar ese número de espacios al identado de cada línea del formato JSON*

Para el caso contrario ocurre cuando recibimos una cadena de texto en formato JSON desde el server y queremos convertir esta a un objeto JavaScript, para eso usamos el método JSON.parse().

```js
usuarioJSON = '{ "id" : "LulzSec","notas" : [ 15, 20, 13]}';
console.log(JSON.parse(usuarioJSON));
```

#Ejercicio

Modificar el script del archivo que se muestra como [ejemplo](ejercicio1.html) para completar los campos del cuestionario, usando el objeto que se recibe como respuesta a un archivo JSON, ademas agregar la funcionalidad de validar que la respuesta sea la correcta, la alternativa correcta la encuentras como una propiedad del objeto.

El resultado final debe ser algo similar a esto:

![Ejemplo1](https://raw.githubusercontent.com/nmerinos/Content/master/Semana2/Backend/JavaScript/Ejercicio/Ejemplo1.png?token=AA-cF4ACgPGLAU0ZKtFKf6pVYo0vq757ks5UvbWuwA%3D%3D)

![Ejemplo2](https://raw.githubusercontent.com/nmerinos/Content/master/Semana2/Backend/JavaScript/Ejercicio/imagen2.png?token=AA-cF_YMawewNwddf1ZoR7PmqArJhcb1ks5UvbWwwA%3D%3D)

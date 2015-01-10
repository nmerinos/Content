En esta seccion se explica lo ques es el formato JSON y como se aplica.

# JSON (JavaScript Object Notation)
- Es un formato de texto plano para almacenar data.
- Es un formato muy popular para intercambio de datos para servicios web, para archivos de configuracion y mas.

## Formato de datos
Un formato de datos JSON almacena la informacion como texto plano, su notacion es un suboconjunto de la notacion de JavaScript, por ejemplo:

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
En JavaScript podemos usar la funcion `JSON.stringify()` que convierte un elemento de JavaScript a una cadena en formato JSON la cual se utilizara mas adelante para enviar datos desde el server al frontend.

### Ejemplo
```js
usuario = { "id" : "LulzSec",
            "notas" : [ 15, 20, 13]
          };
console.log(JSON.stringify(usuario));
```
Ademas se pueden

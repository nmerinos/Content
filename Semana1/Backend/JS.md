# JavaScript

JavaScript es un lenguaje de programación que puede ser aplicado a un documento HTML para agregarle interactividad, también se puede usar desde el lado del servidor con frameworks como Nodejs, además se puede usar para programar el microcontrolador de una placa Arduino  usando la libreria Johnny-Five.

## Ejemplos

### Variables

- En programación las variables son contenedores para valores que pueden ser de diferentes tipos.
- Las variables tienen un nombre y un valor separados por un signo igual **'='**.
- Las variables se declaran usando la palabra clave **'var'** seguida del nombre de la variable.
- Los nombres de las variables pueden ser cualquier letra o palabra, pero existen algunas restricciones como por ejemplo, el nombre de una variable no puede comenzar por un número, aunque si puede contener números en medio o al final del nombre de la variable, tampoco se puede usar ciertas palabras reservadas como nombre de una variable tales como *var*,*con*,*do*,etc.
- Para comparar la igualdad de 2 valores, se usara **'=='** y la desigualdad con **'!='**.


Definamos dos variables con sus respectivos valores y definamos una tercera variable con el valor de la suma de los anteriores.

```js
var x = 20,
    y = 15,
    suma = x + y;
```

El interprete lee el código instrucción por instrucción, de modo que cada instrucción termina en un punto y coma.

En palabras sencillas el primer ejemplo realiza los siguientes pasos:

- Define una nueva variable de nombre 'x' y le asigna un valor de '20'
- Define una nueva variable de nombre *y* y le asigna un valor de *15*
- Define una nueva variable de nombre *suma* y le asigna el resulta de la suma de los valores de las variables *x* y *y*


#### Tipos de variables

Los valores de las variables ademas de contener números enteros como se mostró en el primer ejemplo pueden contener diferentes tipos de valores:

Tipo    | Explicación | Ejemplo
----    | ----------- | -------
String | Una cadena de texto.Para identificar que el valor de la variable es una cadena, se debe encerrar la cadena entre comillas. Su propiedad **length** nos devuelve su longitud de caracteres y **charAt** nos devuelve el carácter de una determinada posición.| var miCiudad = 'Lima';
Number |Un numero. Los numeros no tienen comillas alrededor de ellos | var miEdad = 20;
Boolean |Un valor verdadero o falso. true y false son palabras reservadas en JavaScript y no necesitan comillas | var asd = true
Array   | Una estructura que permite almacenar multiples valores en una sola referencia | var misCursos = ['Backend', 'Frontend', 'Electronica']
Object |Basicamente cualquier cosa. Todo en JavaScript es un objeto y se puede almacenar en una variable | var miPerfil = { miEdad :19, miCiudad : 'Lima', misCursos : = ['B', 'F', 'E']}


### Estructuras condicionales

Las condiciones son estructuras que te permiten verificar los valores de ciertas variables y dependiendo del resultado ejecutar un conjunto de instrucciones.

La estructura la condicional `if` es la mas facil y su estructura es `if (condicion) { instruccion;}`, de manera que si la condición es verdadera el código encerrado entre llaves se ejecuta.

```js
var miEdad = 21;
if (miEdad >= 18){
    alert("Soy mayor de edad!");
    }
```

En la mayoría de casos es necesario ejecutar otras instrucciones si el valor de la condicion `if` es falso eso se puede hacer usando la condicional `if else`  y su estructura es `if (condicion) {instrucciones si es cierto} else { instrucciones si es falso}`

```js
var miEdad = 17;
if (miEdad >= 18){
    alert("Soy mayor de edad!");
} else {
    alert("Soy menor de edad")
}
```

Las condiciones también pueden ser anidadas de manera que se ejecuten si cumplen todas las condiciones previas.

```js
if (edad >= 18 ){
    alert("Eres mayor de edad");
    if (licencia == true){
        alert("Eres apto para conducir");
    } else {
        alert("Pero no puedes conducir");
    }
} else {
    alert("Aún no puedes conducir por tu edad");
}
```

### Bucles o loops

Los bucles son condiciones repetitivas, donde una variable cambia de valor en cada ciclo. La forma más fácil de un bucle es usando la sentencia for. Ésta tiene una sintaxis que es similar a la sentencia if, pero con más opciones:
`for (valor inicial; condicion de fin; cambio)`

```js
for(var i = 1;i <= 31;i = i + 1){
  alert("Hoy es el dia " + i + " del mes!")
}
```

Una aplicación importante de los bucles es para recorrer los valores de un array.

```js
var cursos = ['Backend','Frontend', 'Electronica']
var total = cursos.length;
for(var i=0;i < total; i++){
  alert("Estoy tomando el curso de " + cursos[i] + " en el CoreUpgrade  2015")
}
```

### Funciones

Una función es un conjunto de código que puede ser llamado por otro código o por si mismo o una variable que hace referencia a la función, esta puede recibir y/o retornar datos al ser llamada.
La estructura básica de una función es:

```js
function miFuncion() {
  Contenido de la función
}
```

Definamos una función que recibe como parámetro dos números y retorna el valor del mayor de los números

```js
function obtenerMayor(x,y){
 if(x>y){
  return (x);
  } else{
  return (y);
 }
}
```

Además JavaScript posee funciones predeterminadas para cada tipo de variable por ejemplo:

#### Funciones para cadenas de texto

`split()`: Retorna una lista a partir del string, la cual se delimita por el separador que se pasa como parámetro

```js
var lenguajes = "Python,Clojure,JS,Elixir";
var arrayLenguajes = lenguajes.split(',');
for (i=0;i<arrayLenguajes.length;i++){
  console.log(arrayLenguajes[i])
}
```

`toUpperCase()`: Retorna la cadena con sus correspondientes carácteres en mayúsculas.
`toLowerCase()`: Retorna la cadena con sus correspondientes carácteres en minúsculas.

#### Funciones para arrays

`join()`: Retorna un string que resulta de concatenar los elementos del array que se pasa como parámetro
`push()` : Agrega uno o mas de un elemento al final del array.
`pop()` : Elimina el último elemento del array
`reverse()` : Invierte el orden de los elementos del array

```js
var dias = ["Lu","Ma","Mi","Ju","Vi","Sa","Do"];
var distLinux = ["CentOs","Fedora","Mint",];
var windowsOS = ["Windows 7","Vista", "XP"]
var meses = ["Ene","Feb","Mar"]

var cadenaDias = dias.join("/");
distLinux.push("Ubuntu", "Arch");
windowsOS.pop();
meses.reverse()
```

#### Funciones para números

`isNaN()`: Determina si es un número no válido
`toFixed()` : Redondea el número al número de decimales que se le pasa como parámetro


```js
var numero1 = 23*34,
    numero2 = "23",
    numero3 = 13/0;
isNaN(numero1); false
isNaN(numero2); true
isNaN(numero3); true

var numero = 919.827;
numero.toFixed() ; 920
numero.toFixed(1); 919.8
numero.toFixed(2); 919.83
```

### Corriendo JS en un documento html

Nuestro arichivo js se llamará **primer.js** y será incluido en la etiqueta html `<script>`.


```html
<!DOCTYPE html>
<html>
<header>
<script src="primer.js"></script>
</header>
<body>
<h1>JAVASCRIPT y HTML!</h1>
</body>
</html>
```

Debemos de ubicar nuestro archivo **primer.js** en la misma carpeta

```js
console.log("Line #" + 1 + " corriendo.");
```

Podemos cambiar la direccion relativa al html dentro del atributo src de la etiqueta `<script>`. Por ejemplo de querer situarlo dentro de un directorio llamado script, usaríamos lo siguiente **"script/primer.js"** y si quisieramos situarlo en una carpeta adyacente a la carpeta del documento html usaríamos **"../script/primer.js"**.

### Introducción al DOM HTML

El Document Object Model (DOM) es una interfaz de programación para los documentos HTML y XML. Define una forma en que se puede acceder a la estructura desde los programas de modo que puedan cambiar la estructura del documento, estilo y contenido. Proporciona una representación del documento como un grupo estructurado de nodos y objetos que tienen propiedades y métodos. Esencialmente, comunica las páginas web con los scripts o lenguajes de programación.

Al crear un elemento javascript, podemos comenzar de inmediato el uso del DOM con elementos como "document" o "window" para manipular el propio documento o para llegar a los **childs** de ese documento, que son los **distintos elementos de la página web**. 

Hagamos algo tan simple como lo siguiente, mostremos un mensaje de alerta mediante el uso de la función "alert()" del objeto "window".

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
    // cuando el documento es cargado, esta funcion se ejecutara
       window.onload = function() {
       window.alert('El documento ha cargado y la funcion ha comenzado');
    // creamos algunos elementos 
    // en una pagina HTML vacia
       heading = document.createElement("h1"); //creamos un elmento h1
       heading_text = document.createTextNode("Agregamos esta cabecera"); //creamos el texto
       heading.appendChild(heading_text); //agregamos el texto como un hijo al elemento heading que es un h1
       document.body.appendChild(heading); //agregamos el elemento heading como un hijo al body
      }
    </script>
  </head>
  <body>
  </body>
</html>
```

#### Importantes tipo de datos

Hay un número de diferentes tipos de datos que se pueden decir son los que se usan frecuentemente. Referiremos a los nodos como elementos, a arreglos de nodos como nodeLists (o simplemente elementos), y a nodos atributos simplemente como atributos.

| Data Type  |               Descripcion             |
|------------|:--------------------------------------|
|[document](https://developer.mozilla.org/en-US/docs/DOM/document)|Es la raíz/origen del mismo documento.|
|element|Se refiere a un elemento o un nodo de tipo elemento returnado por un miembro del DOM API. El metodo document.createElement() retorna un elemento que acaba de ser creado en el DOM.|
|nodeList|Una lista de nodos es un conjunto de elementos, como el tipo que devuelve el método document.getElementsByTagName (). Los elementos de una lista de nodos se accede por el índice en cualquiera de dos maneras:
list.item (1)
lista [1]
Estos dos son equivalentes. En el primero, item() es un método en el objeto nodeList. El segundo utiliza la típica sintaxis de a buscar el segundo elemento de la lista.|
|attribute|Son nodos que refieren a los atributos de los elementos.|
|namedNodeMap|Es similar a un arreglo de items pero accedidos por nombre o id.|

#### Interfaces y objetos

Muchos objetos provienen de distintas interfaces por lo que tienen propiedades y metodos de cada una de estas.

Por ejemplo una tabla proviene de 3 interfaces:

-[HTML Table Element Interface](https://developer.mozilla.org/en-US/docs/DOM/HTMLTableElement)

-[DOM Element Interface](https://developer.mozilla.org/en-US/docs/DOM/element)

-[Node Interface]()

```js
var table = document.getElementById("table");
var tableAttrs = table.attributes; // Node/Element interface
for (var i = 0; i < tableAttrs.length; i++) {
  // HTMLTableElement interface: border attribute
  if(tableAttrs[i].nodeName.toLowerCase() == "border")
    table.border = "1"; 
}
// HTMLTableElement interface: summary attribute
table.summary = "note: increased border";
```

#### Métodos comunes en el DOM
|            Data Type            |
|---------------------------------|
|[document.getElementById(id)](https://developer.mozilla.org/en-US/docs/DOM/document.getElementById)|
|[element.getElementsByTagName(name)](https://developer.mozilla.org/en-US/docs/Web/API/Element.getElementsByTagName)|
|[document.createElement(name)](https://developer.mozilla.org/en-US/docs/DOM/document.createElement)|
|[parentNode.appendChild(node)](https://developer.mozilla.org/en-US/docs/DOM/Node.appendChild)|
|[element.innerHTML](https://developer.mozilla.org/en-US/docs/DOM/element.innerHTML)|
|[element.style.left](https://developer.mozilla.org/en-US/docs/DOM/element.style)|
|[element.setAttribute](https://developer.mozilla.org/en-US/docs/DOM/element.setAttribute)|
|[element.getAttribute](https://developer.mozilla.org/en-US/docs/DOM/element.getAttribute)|
|[element.addEventListener](https://developer.mozilla.org/en-US/docs/DOM/element.addEventListener)|
|[window.content](https://developer.mozilla.org/en-US/docs/DOM/window.content)|
|[window.onload](https://developer.mozilla.org/en-US/docs/DOM/window.onload)|
|[window.dump](https://developer.mozilla.org/en-US/docs/DOM/window.dump)|
|[window.scrollTo](https://developer.mozilla.org/en-US/docs/DOM/window.scrollTo)|


Ejemplo de modificar una tabla usando DOM.


```html
<html>
<head></head>
<body>
<table id="table0">
 <tr>
  <td>Row 0 Cell 0</td>
  <td>Row 0 Cell 1</td>
 </tr>
</table>

<script>
var table = document.getElementById('table0');
var row = table.insertRow(-1);
var cell,
    text;

for (var i = 0; i < 2; i++) {
  cell = row.insertCell(-1);
  text = 'Row ' + row.rowIndex + ' Cell ' + i;
  cell.appendChild(document.createTextNode(text));
}
</script>
</body>
</html>
```


## Ejercicios

### Ejercicio 1

Crear un archivo javascript, que tenga 2 funciones una que me calcule el promedio ponderado de 5 numeros que ingresen como un array de parametro de entrada y la otra función que imprima cada valor del array y el promedio calculado.

### Ejercicio 2

Crear la función para el siguiente pseudocódigo que define una función con 2 parámetros uno string(nombre) y un array(pasajeros).

```
funcion agregarPasajero (nombre,pasajeros){
*Si la lista esta vacia*{
 *Agregar al pasajero a la lista* 
}*Sino*{
   *Para todos los lugares en la lista hacer lo siguiente*{
      *Si el actual lugar en la lista esta vacia* {
         *Agregar al pasajero a la lista*
         *Devolver la lista y dalir de la funcion*
       } *Sino, si el final de la lista se ha alcanzado* {
           *Agregar al pasajero al final de la lista*
           *Devolver la lista y dalir de la funcion*
          }
     }
   }
}
```


## Cuestionario

> 1.¿Cómo se muestra una ventana con el mensaje "Hola hackspace!"?

a. alert("Hola hackspace!"); 

b. alertBox = "Hola hackspace!"; 

c. alertBox("Hola hackspace!); 

d. msgBox("Hola hackspace!); 
> 2.JavaScript es un lenguaje de programación

a. Compilado

b. Interpretado

c. No estructurado

d. Ninguna de las anteriores
> 3.En una navegador web, para escribir algo en la consola se emplea

a. console.append()

b. console.log()

c. console.print()

d. console.write()
> 4.En JavaScript, respecto a la declaración de variables

a. Siempre hay que declarar las variables

b. Se puede forzas la declaración con Option Implicit 

c. Se declaran con la palabra reservada Dim

d. Las anteriores respuestas no son correctas
> 5.En JavaScript, el operador para concatenar cadenas es

a. "&"

b. "+"

c. "."

d. Ninguna de las anteriores

# JavaScript

JavaScript es un lenguaje de programación que puede ser aplicado a un documento HTML para agregarle interactividad, también se puede usar desde el lado del servidor con frameworks como Nodejs, además se puede usar para programar el microcontrolador de una placa Arduino  usando la libreria Johnny-Five.

## Ejemplos

### Variables

- En programación las variables son contenedores para valores que pueden ser de diferentes tipos.
- Las variables tienen un nombre y un valor separados por un signo igual '='.
- Las variables se declaran usando la palabra clave 'var' seguida del nombre de la variable.
- Los nombres de las variables pueden ser cualquier letra o palabra, pero existen algunas restricciones como por ejemplo, el nombre de una variable no puede comenzar por un número, aunque si puede contener números en medio o al final del nombre de la variable, tampoco se puede usar ciertas palabras reservadas como nombre de una variable tales como *var*,*con*,*do*,etc.


Definenamos dos variables con sus respectivos valores y definamos una tercera variable con el valor de la suma de los anteriores.

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
String | Una cadena de texto.Para identificar que el valor de la variable es una cadena, se debe encerrar la cadena entre comillas| var miCiudad = 'Lima';
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
for(var i=0;i<total; i++){
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

## Ejercicios


## Cuestionario

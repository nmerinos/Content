# JavaScript

JavaScript es un lenguaje de programacion que puede ser aplicado a un documento HTML para agregarle interactividad, tambien se puede usar desde el lado del servidor con frameworks como Nodejs, ademas se puede usar para programar el microcontrolador de una placa Arduino  usando la libreria Johnny-Five.


## Variables

- En programacion las variables son contenedores para valores que pueden ser de diferentes tipos.
- Las variables tienen un nombre y un valor separados por un signo igual '='.
- Las variables se declaran usando la palabra clave 'var' seguida del nombre de la variable.
- Los nombres de las variables pueden ser cualquier letra o palabra, pero existen algunas restricciones como por ejemplo, el nombre de una variable no puede comenzar por un numero, aunque si puede contener numeros en medio o al final del nombre de la variable, tampoco se puede usar ciertas palabras reservadas como nombre de una variable tales como *var*,*con*,*do*,etc.


En el primer ejemplo se definen dos variables con sus respectivos valores y se define una tercera variable con el valor de la suma de los anteriores.

### Ejemplo 1
```js
var x = 20,
    y = 15,
    suma = x + y;
```

El interprete lee el codigo instruccion por instruccion, de modo que cada instruccion termina en un punto y coma.

En palabras sencillas el primer ejemplo realiza los siguientes pasos:

- Define una nueva variable de nombre 'x' y le asigna un valor de '20'
- Define una nueva variable de nombre *y* y le asigna un valor de *15*
- Define una nueva variable de nombre *suma* y le asigna el resulta de la suma de los valores de las variables *x* y *y*


### Tipos de variables

Los valores de las variables ademas de contener numeros enteros como se mostro en el primer ejemplo pueden contener diferentes tipos de valores:

Tipo    | Explicacion | Ejemplo
----    | ----------- | -------
String | Una cadena de texto.Para identificar que el valor de la variable es una cadena, se debe encerrar la cadena entre comillas| var miCiudad = 'Lima';
Number |Un numero. Los numeros no tienen comillas alrededor de ellos | var miEdad = 20;
Boolean |Un valor verdadero o falso. true y false son palabras reservadas en JavaScript y no necesitan comillas | var asd = true
Array   | Una estructura que permite almacenar multiples valores en una sola referencia | var misCursos = ['Backend', 'Frontend', 'Electronica']
Object |Basicamente cualquier cosa. Todo en JavaScript es un objeto y se puede almacenar en una variable | var miPerfil = { miEdad :19, miCiudad : 'Lima', misCursos : = ['B', 'F', 'E']}


## Estructuras condicionales

Las condiciones son estructuras que te permiten verificar los valores de ciertas variables y dependiendo del resultado ejecutar un conjunto de instrucciones.

La estructura la condicional `if` es la mas facil y su estructura es `if (condicion) { instruccion;}`, de manera que si la condicion es verdadera el codigo encerrado entre llaves se ejecuta.

### Ejemplo 3

```js
var miEdad = 21;
if (miEdad >= 18){
    alert("Soy mayor de edad!");
    }
```

En la mayoria de casos es necesario ejecutar otras instrucciones si el valor de la condicion `if` es falso eso se puede hacer usando la condicional `if else`  y su estructura es `if (condicion) {instrucciones si es cierto} else { instrucciones si es falso}`

### Ejemplo 4

```js
var miEdad = 17;
if (miEdad >= 18){
    alert("Soy mayor de edad!");
} else {
    alert("Soy menor de edad")
}
```

Las condiciones tambien pueden ser anidadas de manera que se ejecuten si cumplen todas las condiciones previas.

### Ejemplo 5

```js
if (edad >= 18 ){
    alert("Eres mayor de edad");
    if (licencia == true){
        alert("Eres apto para conducir");
    } else {
        alert("Pero no puedes conducir");
    }
} else {
    alert("Aun no puedes conducir por tu edad");
}
```

## Bucles o loops

Los bucles son condiciones repetitivas, donde una variable cambia de valor en cada ciclo. La forma más fácil de un bucle es usando la sentencia for. Ésta tiene una sintaxis que es similar a la sentencia if, pero con más opciones:
`for (valor inicial; condicion de fin; cambio)`

### Ejemplo 6
```js
for(var i = 1;i <= 31;i = i + 1){
  alert("Hoy es el dia " + i + " del mes!")
}
```

Una aplicacion importante de los bucles es para recorrer los valores de un array.

###Ejemplo 7
```js
var cursos = ['Backend','Frontend', 'Electronica']
var total = cursos.length;
for(var i=0;i<total; i++){
  alert("Estoy tomando el curso de " + cursos[i] + " en el CoreUpgrade  2015")
}
```

## Funciones

Una funcion es un conjunto de codigo que puede ser llamado por otro codigo o por si mismo o una variable que hace referencia a la funcion, esta puede recibir y/o retornar datos al ser llamada.
La estructura basica de una funcion es:
```js
function miFuncion() {
  Contenido de la funcion
}
```

En el siguiente ejemplo definimos una funcion que recibe como parametro dos numeros y retorna el valor del mayor de los numeros

###Ejemplo 8

```js
function obtenerMayor(x,y){
 if(x>y){
  return (x);
  } else{
  return (y);
 }
}
```

Ademas JavaScript posee funciones predeterminadas para cada tipo de variable por ejemplo:

###Funciones para cadenas de texto

`split()`: Retorna una lista a partir del string, la cual se delimita por el separador que se pasa como parametro

####Ejemplo

```js
var lenguajes = "Python,Clojure,JS,Elixir";
var arrayLenguajes = lenguajes.split(',');
for (i=0;i<arrayLenguajes.length;i++){
  console.log(arrayLenguajes[i])
}
```

`toUpperCase()`: Retorna la cadena con sus correspondientes caracteres en mayusculas.
`toLowerCase()`: Retorna la cadena con sus correspondientes caracteres en minusculas.

### Funciones para arrays

`join()`: Retorna un string que resulta de concatenar los elementos del array que se pasa como parametro

####Ejemplo

```js
var dias = ["Lu","Ma","Mi","Ju","Vi","Sa","Do"];
var cadenaDias = dias.join("/");
```

`push()` : Agrega uno o mas de un elemento al final del array.

####Ejemplo

```js
var distLinux = ["CentOs","Fedora","Mint",];
distLinux.push("Ubuntu", "Arch");
```

`pop()` : Elimina el ultimo elemento del array

####Ejemplo

```js
var windowsOS = ["Windows 7","Vista", "XP"]
windowsOS.pop();
```

`reverse()` : Invierte el orden de los elementos del array

####Ejemplo

```js
var meses = ["Ene","Feb","Mar"]
meses.reverse()
```

###Funciones para numeros

`isNaN()`: Determina si es un numero no valido

####Ejemplo

```js
var numero1 = 23*34,
    numero2 = "23",
    numero3 = 13/0;
isNaN(numero1); false
isNaN(numero2); true
isNaN(numero3); true
```

`toFixed()` : Redondea el numero al numero de decimales que se le pasa como parametro

####Ejemplo

```js
var numero = 919.827;
numero.toFixed() ; 920
numero.toFixed(1); 919.8
numero.toFixed(2); 919.83
```

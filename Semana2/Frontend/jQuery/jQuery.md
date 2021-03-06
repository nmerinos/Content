# jQuery

Es una librería de JavaScript. No es un lenguaje de programación.
Simplifica grandemente la programación con JavaScript.
Es fácil de aprender.

Para importar la librería incluir la siguiente ruta dentro de la etiqueta `<script>`.

`<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js">`
`</script>`

## Ejemplos

### **Selectores jQuery**

La función **$()** recibe como parámetro una etiqueta HTML y devuelve todos los elementos (nodos) que concuerden con la expresión, para luego poder ejecutar una acción (action) `$(selector).action()` . Esta expresión es denominada **selector** y usa la sintaxis CSS para seleccionar elementos.

`$("p").hide()` : El método hide() oculta elementos, en este caso elementos `<p>`.

`$("#test").hide()` : Ocultamos elementos con el atributo id="test".

`$(".test").hide()` : Ocultamos elementos con el atributo class="test".

`$(this).hide()` : Ocultamos el actual elemento html.

**Ejemplo**

```html
<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
    $("#test").hide();
    $(".test").hide();
    $(this).hide();
  });
});
</script>
</head>

<body>
<h2>Yo no desaparesco.</h2>
<p>Este es un parrafo.</p>
<p>Desaparece por la etiqueta p. :(</p>
<p id="test">Desaparece por el id test. :(</p>
<p class="test">Desaparece por la clase test. :(</p>
<button>Desaparece por ser button. :(</button>
</body>

</html>
```

[Leer este enlace.](http://api.jquery.com/category/selectors/)

### **Eventos jQuery**

`click()` : Define un evento al momento de hacer click.

`dblclick()` : Define evento al momento de hacer doble click

`mouseenter()` : Define evento al momento en que el puntero del mouse ingresa a la ubicacion del elemento.

`mouseleave()` : Define evento al momento en que el puntero del mouse deja la ubicacion del elemento.

`mousedown()` : Define evento al momento en que el puntero del hace click en la ubicacion del elemento sin soltar.

`mouseup()` : Define evento al momento en que el puntero suelta despues de hacer click en la ubicacion del elemento.

`hover()` : Permite definir los eventos mouseenter y mouseleave en una sola funcion.

`focus()` y `blur()` : El evento focus se activa cuando se ingresa con el puntero del mouse a un campo del formulario y el evento blur se activa cuando se deja el campo.

**Ejemplo**

```html
<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("h1").click(function(){
    $(this).hide();
  });
  $("p").dblclick(function(){
    $(this).hide();
  });
  $("#p1").mouseenter(function(){
    alert("Has entrado a p1!");
  });
  $("input").focus(function(){
    $(this).css("background-color","#cccccc");
  });
  $("input").blur(function(){
    $(this).css("background-color","#ffffff");
  });
});
</script>
</head>
<body>

<h1>If you click on me, I will disappear.</h1>
<p>If you double-click on me, I will disappear.</p>
<p id="p1">Enter this paragraph.</p><br>
Nombre: <input type="text" name="fullname"><br>
Email: <input type="text" name="email">

</body>
</html>
```

[Leer este enlace.](http://api.jquery.com/category/events/)


### **Mostrar y Ocultar elementos**

`hide()` : Método para ocultar un elemento.

`hide()` y `show()` : Métodos para ocultar y mostrar elementos respectivamente.

`toggle()` : Alterna entre los eventos hide() y show().

**Ejemplo**

```html
<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("#hide").click(function(){
    $(".p1").hide();
  });
  $("#show").click(function(){
    $(".p1").show();
  });
});
</script>
</head>
<body>

<p class="p1">Si clickeas en el boton "Hide", Yo desaparecere.</p>
<button id="hide">Hide</button>
<button id="show">Show</button>

</body>
</html>
```

### **Control de opacidad**

`fadeIn()` : Método para descolorar un elemento.

`fadeOut()` : Método para colorear un elemento.

`fadeToggle()` : Alterna entre los métodos fadeIn() y fadeOut().

`fadeTo()` : Método para controlar la opacidad de un elemento siguiendo un parametro de referencia.

**Ejemplo**

```html
<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeOut("slow");
    $("#div3").fadeToggle(3000);
    $("#div4").fadeTo("slow",0.7);
  });
});
</script>
</head>

<body>
<p>Demostrar fadeIn,fadeOut,fadeToggle y fadeTo con diferentes parametros.</p>
<button>Click para probar fadeIn() en las cajas.</button>
<br><br>
<div id="div1" style="width:80px;height:80px;display:none;background-color:red;"></div><br>
<div id="div2" style="width:80px;height:80px;background-color:green;"></div><br>
<div id="div3" style="width:80px;height:80px;display:none;background-color:blue;"></div>
<div id="div4" style="width:80px;height:80px;display:none;background-color:pink;"></div>
</body>
</html>
```

### **Deslizar elementos**

`slideDown()` : Método para desliza hacia abajo un elemento.

`slideUp()` : Método para deslizar hacia arriba un elemento.

`slideToggle()` : Alterna entre los métodos slideDown() y slideUp().

**Ejemplo**

```html
<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script> 
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});
</script>
 
<style> 
#panel,#flip
{
padding:5px;
text-align:center;
background-color:#e5eecc;
border:solid 1px #c3c3c3;
}
#panel
{
padding:50px;
display:none;
}
</style>
</head>
<body>
 
<div id="flip">Click para aplicar slide up y slide down al panel</div>
<div id="panel">Hola mundo</div>

</body>
</html>
```

### **Animar elementos**

Utilizamos `animate()` .

**Ejemplo**

```html
<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script> 
$(document).ready(function(){
  $("button").click(function(){
    var div=$("div");
    div.animate({height:'300px',opacity:'0.4'},"slow");
    div.animate({width:'300px',opacity:'0.8'},"slow");
    div.animate({height:'100px',opacity:'0.4'},"slow");
    div.animate({width:'100px',opacity:'0.8'},"slow");
  });
});
</script> 
</head>
 
<body>
<button>Empezar Animacion</button>
<p>Por default, los elementos HTML tienen una posicion estatica, y no pueden ser movidos. Para manipularl la posicion, recuerda primero configurar la propiedad de posicion CSS de un elemento a relativo, fijo o absoluto.</p>
<div style="background:#98bf21;height:100px;width:100px;position:absolute;">
</div>

</body>
</html>
```

### **Detener Animaciones**

`stop()` sliding: detiene una animacion en curso.

```html
<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script> 
$(document).ready(function(){
  $("#start").click(function(){
    $("div").animate({left:'100px'},5000);
    $("div").animate({fontSize:'3em'},5000);
  });
  
  $("#stop").click(function(){
    $("div").stop();
  });

  $("#stop2").click(function(){
    $("div").stop(true);
  });

  $("#stop3").click(function(){
    $("div").stop(true,true);
  });
  
});
</script> 
</head>

<body>
<button id="start">Empezar</button>
<button id="stop">Detener</button>
<button id="stop2">Detener todo</button>
<button id="stop3">Detener y Terminar</button>
<p>El boton "Empezar" empieza la animacion.</p>
<p>El boton "Detener" detiene la animacion activa actual, pero permite que pueda continuar despues.</p>
<p>El boton "Detener todo" detiene la actual animacion activa y borra la cola de animacion; por lo que todas las animaciones en el elemento son detenida .</p>
<p>El boton "Detener y Terminar" apresura a través de la corriente de animación activa, luego se detiene.</p> 

<div style="background:#98bf21;height:100px;width:200px;position:absolute;">HELLO</div>

</body>
</html>
```

### **Obtener contenido y atributos**

`text()` y `html()` : Obtener contenidos con los métodos text() y html().

`val()` : Obtener el valor de un campo de formulario con el método val().

`attr()` : Obtener el valor de un atributo con el método attr().

**Ejemplo**

```html
<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("#btn1").click(function(){
    alert("Text: " + $("#test").text());
  });
  $("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
  });
  $("#button").click(function(){
    alert($("#hsla").attr("href"));
    alert("Valor: " + $("#test").val());
  });
});
</script>
</head>

<body>
<p id="test">Esto es letra <b>negrita</b> en un parrafo.</p><br>
<input input type="button" id="btn1" value="Mostrar texto." /><br>
<input input type="button" id="btn2" value="Mostrar HTML." /><br>
<p>Name: <input type="text" id="test" value="Hackspace"></p><br>
<p><a href="http://www.hackspace.la" id="hsla">hackspace.la</a></p><br>
<input input type="button" id="button" value="Mostrar valor" />
</body>
</html>
```

### **Configurar contenido y atributos**

Configurar contenido con los métodos jQuery `text()`, `html()` y `val()`.

**Ejemplo**

```html
<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("#btn1").click(function(){
    $("#test1").text("Hola mundo texto!");
  });
  $("#btn2").click(function(){
    $("#test2").html("<b>Hola mundo html!</b>");
  });
  $("#btn3").click(function(){
    $("#test3").val("Hola mundo valores!");
  });
});
</script>
</head>

<body>
<p id="test1">Este es un parrafo.</p>
<p id="test2">Este es otro parrafo.</p>
<p>Campo input: <input type="text" id="test3" value="Hackspace"></p>
<button id="btn1">Configurar texto</button>
<button id="btn2">Configurar HTML</button>
<button id="btn3">Configurar valores</button>
</body>
</html>
```

Configurar valores de atributos usando la funcion callback (funcion parametro de otra funcion) dentro del método attr().

**Ejemplo**

```html
<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("#hsla").attr("href", function(i,origValue){
      return origValue + "/jquery"; 
    });
  });
});
</script>
</head>

<body>
<p><a href="http://www.hackspace.com" id="hsla">Hackspace Core Upgrade 2015</a></p>
<button>Cambiar el valor href</button>
<p>Mouse sobre el link (o click en el) para ver que el valor del atributo href ha cambiado.</p>
</body>
</html>
```

### El DOM

#### Agregar o Eliminar un elemento HTML

Usaremos los métodos `append()`  y `remove()` , para realizar esto.

```html
<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
function appendText() {
    var txt1 = "<p>Text.</p>";              // Crear texto con HTML
    var txt2 = $("<p></p>").text("Text.");  // Crear texto con jQuery
    var txt3 = document.createElement("p");
    txt3.innerHTML = "Text.";               // Crear texto con DOM
    $("body").append(txt1, txt2, txt3);     // Agregar txt1,txt2 y txt3
        $("#div1").remove();                // Eliminar div1
}
</script>
</head>
<body>

<div id="div1" style="height:100px;width:300px;border:1px solid black;background-color:yellow;">

Texto dentro del div1.
<p>Dentro del div1.</p>
<p>Dentro del div1.</p>

</div>
<p>Fuera del div1.</p>
<button onclick="appendText()">Append text</button>

</body>
</html>
```

#### Configurar CSS

Para esto usaremos el método `css()`.

```html
<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("p").css({"background-color":"yellow","font-size":"200%"});
  });
});
</script>
</head>

<body>
<h2>Esta es una cabecera</h2>
<p style="background-color:#ff0000">Este es un parrafo.</p>
<p style="background-color:#00ff00">Este es un parrafo.</p>
<p style="background-color:#0000ff">Este es un parrafo.</p>
<p>Este es un parrafo.</p>
<button>Configurar estilos</button>
</body>
</html>
```

#### Configurar CSS de elemento padre e hijo

Para esto usaremos `parent()` y `children()`.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.descendants *
{ 
display: block;
border: 2px solid lightgrey;
color: lightgrey;
padding: 5px;
margin: 15px;
}
</style>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  
  $(".descendants").children().css({"color":"red","border":"2px solid red"});
  $("p").parent().css({"color":"red","border":"2px solid pink"});
  $("p").children().css({"color":"red","border":"2px solid green"});
});
</script>
</head>
<body>
<div class="grandparent" style="width:800px">div abuelo
<div class="descendants" style="width:500px;">div padre 
  <p>p hijo
    <span>span nieto</span>     
  </p>
  <p>p hijo
    <span>span nieto</span>
  </p> 
</div>
</div>
</body>
</html>
```

### Usando AJAX

#### Método AJAX load()

Cargamos el contenido de un elemento especifico dentro de un archivo, en un elemento `<div>` usando `load()`.

```html
<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("#div1").load("jQuery.txt #p1");
  });
});
</script>
</head>
<body>

<div id="div1"><h2>jQuery AJAX cambiara este texto</h2></div>
<button>Contenido externo</button>

</body>
</html>
```

#### Petición HTTP GET

Esto se logra gracias al método jQuery AJAX `$.get()`.

```html
<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $.get("jQuery.txt",function(data,status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
});
</script>
</head>
<body>

<button>Enviar una peticion HTTP GET y conseguir el resultado devuelta</button>

</body>
</html>
```

## Ejercicios

Pero antes de continuar, reforcemos lo que hemos aprendido en esta primera sección con unos cuántos ejercicios muy simples.

### Ejercicio 1

En 5 segundos aumentar de tamaño a un texto "TEST" y luego desaparecerlo al pasar el mouse encima del texto. Esto usando animate() y modificanto el css apartir de eso.

### Ejercicio 2

Introduce en un documento el plugin [jquery.snow.js](https://drive.google.com/file/d/0B6R_1Md_rpWWWVFuc0VSOFlGalk/view?usp=sharing) para crear el efecto de nevando. Deberás implementar el tamaño mínimo del copo de nieve a 12 (minSize), el tamaño máximo a 18 (maxSize) , la frecuencia con la que cae la nieve a 400 (newOn).

### Ejercicio 3

Crear un programa con jQuery para obtener un menú, tal que cada vez que el usuario introduce el puntero  el item cambia de color.

## Cuestionario

> 1.¿Qué es jQuery?

a.Una librería.

b.Un framework.

c.Un lenguaje.

d.Ninguna de las anteriores.

> 2.¿Qué método usamos para definir un evento cuando el mouse deja la ubicación del elemento?

a.dblclick()

b.mouseenter()

c.mouseleave()

d.focus()

> 3.¿Qué método usamos para alternar los métodos hide() y shown()?

a.fadeToggle()

b.toggle()

c.fadeTo()

d.slideToggle()

> 4.¿Qué es una función callback?

a.En una función nueva.

b.Es una función que se encuentra dentro de otra como un parámetro.

c.Es una función que no tiene parametros.

d.Ninguna de las anteriores.

> 5.¿Cuál de las dos lineas de código es más eficiente?

```js
document.getElementById( "logo" );
or
```

```js
$( "#logo" );
```

a.La primera, pues es javascript puro.

b.La segunda, pues es mas rápido usar jquery.

c.Ambas.

d.Depende de como se usen.

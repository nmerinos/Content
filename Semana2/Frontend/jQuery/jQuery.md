# jQuery

Es una libreria de JavaScript. No es un lenguaje de programacion.
Simplifica grandemente la programacion con JavaScript.
Es facil de aprender.

Para importar la libreria incluir la siguiente ruta dentro de la etiqueta `<script>`.

`<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js">`
`</script>`


## **Selectores jQuery**

$("p").hide()

El metodo hide() oculta elementos, en este caso elementos `<p>`.

> [Ejemplo](Samples/1.md)

$("#test").hide()

Ocultamos elementos con el atributo id="test".

> [Ejemplo](Samples/2.md)

$(".test").hide()

Ocultamos elementos con el atributo class="test".

> [Ejemplo](Samples/3.md)

$(this).hide()

Ocultamos el actual elemento html.

> [Ejemplo](Samples/4.md)

Leer este enlace. http://api.jquery.com/category/selectors/

## **Eventos jQuery**

jQuery click()

Define evento al momento de hacer click.

> [Ejemplo](Samples/5.md)

jQuery dblclick()

Define evento al momento de hacer doble click

> [Ejemplo](Samples/6.md)

jQuery mouseenter()

Define evento al momento en que el puntero del mouse ingresa a la ubicacion del elemento.

> [Ejemplo](Samples/7.md)

jQuery mouseleave()

Define evento al momento en que el puntero del mouse deja la ubicacion del elemento.

> [Ejemplo](Samples/8.md)

jQuery mousedown()

Define evento al momento en que el puntero del hace click en la ubicacion del elemento sin soltar.

> [Ejemplo](Samples/9.md)

jQuery mouseup()

Define evento al momento en que el puntero suelta despues de hacer click en la ubicacion del elemento.

> [Ejemplo](Samples/10.md)

jQuery hover()

Permite definir los eventos mouseenter y mouseleave en una sola funcion.

> [Ejemplo](Samples/11.md)

jQuery focus() and blur()

El evento focus se activa cuando se ingresa con el puntero del mouse a un campo del formulario y el evento blur se activa cuando se deja el campo.

> [Ejemplo](Samples/12.md)

Leer este enlace. http://api.jquery.com/category/events/

## **Mostrar y Ocultar elementos**

jQuery hide()

Metodo para ocultar un elemento.

> [Ejemplo](Samples/13.md)

jQuery hide() and show()

Metodos para ocultar y mostrar elementos respectivamente.

> [Ejemplo](Samples/14.md)

jQuery toggle()

Alterna entre los eventos hide() y show().

> [Ejemplo](Samples/15.md)

## **Control de opacidad**

jQuery fadeIn()

Metodo para descolorar un elemento.

> [Ejemplo](Samples/16.md)

jQuery fadeOut()

Metodo para colorear un elemento.

> [Ejemplo](Samples/17.md)

jQuery fadeToggle()

Alterna entre los metodos fadeIn() y fadeOut().

> [Ejemplo](Samples/18.md)

jQuery fadeTo()

Metodo para controlar la opacidad de un elemento siguiendo un parametro de referencia.

> [Ejemplo](Samples/19.md)


## **Deslizar elementos**

jQuery slideDown()

Metodo para desliza hacia abajo un elemento.

> [Ejemplo](Samples/20.md)

jQuery slideUp()

Metodo para deslizar hacia arriba un elemento.

> [Ejemplo](Samples/21.md)

jQuery slideToggle()

Alterna entre los metodos slideDown() y slideUp().

> [Ejemplo](Samples/22.md)


## **Animar elementos**

jQuery animate()

> [Ejemplo 1](Samples/23.md)

> [Ejemplo 2](Samples/24.md)

> [Ejemplo 3](Samples/25.md)

> [Ejemplo 4](Samples/26.md)

> [Ejemplo 5](Samples/27.md)

## **Detener Animaciones**

jQuery stop() sliding

Detiene una animacion en curso.

> [Ejemplo 1](Samples/28.md)

> [Ejemplo 2](Samples/29.md)


## **Obtener contenido y atributos**

jQuery text() and html()

Obtener contenidos con los metodos text() y html().

> [Ejemplo](Samples/30.md)

jQuery val()

Obtener el valor de un campo de formulario con el metodo val().

> [Ejemplo](Samples/31.md)

jQuery attr()

Obtener el valor de un atributo con el metodo attr().

> [Ejemplo](Samples/32.md)


## **Configurar contenido y atributos**

jQuery text(), html(), y val()

Configurar contenido con los metodos jQuery text(), html() y val().

> [Ejemplo](Samples/33.md)

jQuery text() y html()

Configurar contenido usando una function callback dentro de los metodos text() y html().

> [Ejemplo](Samples/34.md)

jQuery attr()

Configurar los valores de atributos con el metodo attr().

> [Ejemplo](Samples/35.md)

Configurar valores de atributos usando la funcion callback dentro del metodo attr().

> [Ejemplo](Samples/36.md)

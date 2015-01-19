# HTML

## Ejemplos

### Cómo comenzar un documento html

Lo primero que se declara siempre es el `<!DOCTYPE>`. Con esto definimos que versión de html usaremos. `<!DOCTYPE html>` define html5.
Todo html sigue una estructura similar, primero se escribe la etiqueta `<html></html>`  y dentro de el contiene una etiqueta `<head></head>` el cual define información del documento y otra `<body></body>` el cuál define información del cuerpo del documento: 

    <!DOCTYPE html>
    <html>
    <head>
    </head>
    <body>
    <!– Asi escribimos comentarios –>
    </body>
    </html>


Generalmente las etiquetas de abren `<etiqueta>` y cierran `</etiqueta>`, teniendo contenido por dentro, habiendo excepciones que no se cierran porque no tienen contenido, como `<img>`, `<br>` o `<base>`.
Otro concepto fundamental es entender que cada etiqueta tiene atributos y cada atributo asume un valor: 

`<etiqueta atributo1=valor1 atributo2=valor2 .... atributon=valorn></etiqueta>`

El **atributo id** por ejemplo defite un identificador unico en todo el documento que servira para asignarle estilos o scripts al componente de la etiqueta en que se encuentre gracias a los llamados **selectores**. Otro atributo que permite tambien acceder a elementos especificos es el **atributo class**. Para mayor detalle de los atributos se recomienda este [enlace](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes). 

Dentro del head y del body también encontramos otras etiquetas que ayudan a definir la información del documento y de su cuerpo, respectivamente.

### Etiquetas principales de `<head></head>`

Las etiquetas más comunes que encontramos son:

    | Etiqueta   |      Descripcion      |  Atributos |
    |------------|:----------------------|:-----------|
    |`<title>`|Define el título del documento.|  |
    |`<meta>` |Especifica una pareja propiedad/valor del documento.|name: Identifica un nombre de propiedad.|
    |||http-equiv: Los servidores HTTP utilizan este atributo para obtener información sobre los encabezados.|
    |||content: Este atributo especifica el valor de una propiedad.|
    |||scheme: Proporciona a los agentes de usuario más contexto para la interpretación correcta de los datos.|
    |`<link>`|Define un vínculo. Solo puede aparecer en la sección head de un documento.||
    |||charset: Especifica la codificación de caracteres.|
    |||href: Especifica la localización de un recurso de la web.|
    |||hreflang: Especifica el lenguaje de la URL.|
    |||media: El medio para la información del estilo.|
    |||target: Indica donde abrir el URL.|
    |`<style>`|Define el estilo de la información del documento html.||
    |`<base>`|Especifica la URL base que será usada para todos los vínculos de la página.||

Revisar este [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head#See_also) para mayor profundidad. 

Veamos el ejemplo con estas etiquetas:

    <!DOCTYPE html>
    <html>
    <body>
    <p><a href="hackspace.la" target="_blank">Lista ordenada:</a></p>
    <img src="http://www.e-quipu.pe/dinamic/equipo/232x232/croppedImg_fVuvBfQyLW.jpeg">
    <ol>
      <li>Frontend</li>
      <li>Backend</li>
      <li>Electronica</li>
    </ol>
    <p><a href="mailito:contacto@hackspace.pe">Lista no ordenada:</a></p>
    <ul>
      <li>Frontend</li>
      <li>Backend</li>
      <li>Electronica</li>
    </ul>
    <br>
    Asi se veria en una tabla:<br>
    <table>
      <tr>
        <th>Nro</th>
        <th>Curso</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Frontend</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Backend</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Electronica</td>
      </tr>
    </table>

    </body>
    </html>


## Ejercicios

Pero antes de continuar, reforcemos lo que hemos aprendido en esta primera sección con unos cuántos ejercicios muy simples.

### Ejercicio 1

a.Escriba un documento html que tenga como titulo "Programación" y que redacte brevemente acerca de programación incluya cabeceras, parrafos, divisiones, una tabla que enumere los cursos que desearia aprender.

### Ejercicio 2

b.Escriba un documento html con un formulario que pregunte por datos como nombre, apellido, cursos, notas, fecha de ingreso, un botón para subir una foto y un boton final para "enviar".

## Cuestionario

> 1.¿Cuál es la etiqueta para definir links?

a. `<p>`

b. `<a>`

c. `<span>`

d. `<div>`

> 2.¿Cuales son las partes principales de un documento html?

a. `<form>` y `<table>`.

b. `<style>` y `<script>`.

c. `<head>` y `<body>`.

d. Todas las anteriores.

> 3.¿Qué etiquetas no se cierran?

a. `<br>`.

b. `<base>`.

c. `<img>`.

d. Todas las anteriores.

> 4.¿Cuál es la forma correcta de crear un vínculo?

a. `<a target="http://www.unsitio.com">...</a>`

b. `<a href="http://www.unsitio.com">...</a>`

c. `<a url="http://www.unsitio.com">...</a>`

d. Ninguna de las anteriores.

> 5.¿Cómo definimos un área de texto? 

a. `<textarea>`

b. `<input type="textarea">`

c. `<input type="text">`

d. Ninguna de las anteriores.

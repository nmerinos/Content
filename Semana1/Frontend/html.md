# HTML

## Ejemplos

### Cómo comenzar un codigo html

Lo primero que se declara siempre es el `<!DOCTYPE>`. Con esto definimos que version de html usaremos. `<!DOCTYPE html>` define html5.
Todo html sigue una estructura similar, primero se escribe la etiqueta `<html></html>`  y dentro de el contiene una etiqueta `<head></head>` el cual define información del documento y otra `<body></body>` el cuál define información del cuerpo del documento: 


```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<!– Asi escribimos comentarios –>
</body>
</html>
```

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

Definamos un archivo **head.html**:

```html
<!DOCTYPE html>
<html>
<head>
<title>Mi primer titulo</title>
<meta charset="UTF-8">
<meta name="description" content="Core Upgrade 2015">
<meta name="keywords" content="HTML,CSS,XML,JavaScript">
<meta name="author" content="Hackspace">
<link rel="stylesheet" type="text/css" href="styles.css">
<style>
h1 {color:red;}
p {color:blue;}
</style>
</head>
<body>

<h1>Style rojo.</h1>
<p>Style azul.</p>

</body>
</html>
```

Este sera el archivo **styles.css**:

```css
h1           
{ 
color: green;
border: '1pt solid black'
}

p
{
color: red;
background-color:#EFE7D6;
border: '1pt solid black'
}

div
{
color: #FFFFFF;
background-color:#000000;
}

span
{
color: #000000;
background-color:#FFFFFF;
}
```

### Etiquetas de texto y contenido

| Etiqueta   |      Descripcion      |  Atributos |
|------------|:----------------------|:-----------|
|`<b>`|Defina un texto en negrita.||
|`<h1>`-`<h6>`|Definen cabecaras de texto.Ordenadas de mas a menos importante.||
|`<p>`|Define un parrafo.||
|`<div>`|Define una division o seccion.||
|`<span>`|Permite agrupar varios elementos en línea seguidos dentro de un mismo bloque (por ejemplo, varias palabras seguidas en un párrafo), para después darles formato con la hoja de estilo. .||
|`<iframe>`|Inserta de manera embebida otro documento dentro del documento html actual.||

Veamos el ejemplo con estas etiquetas:


```html
<!DOCTYPE html>
<html>
<body>
<div style="color:#0000FF">
  <p><b>Semana 1:</b></p>
  <h1>HTML</h1>
  <h2>CSS</h2>
  <h3>Javascript</h3>
</div>
<div style="color:#00FFFF">
  <p><b>Semana 2:</b></p>
  <h4>Bootstrap/Foundations</h4>
  <h5>Firebase</h5>
  <h6>Nodejs</h6>
</div>
<p>La Semana 1 <span style="color:#0000FF;font-weight:bold">sera buena</span>  y la Semana 2 <span style="color:00FFFF;font-weight:bold">aun mejor </span> :).</p>
<br>
<iframe src="http://hackspace.la/#curricula" />
</body>
</html>
```

### Introduccion a javascript con la etiqueta `<script></script>`

| Etiqueta   |      Descripcion      |  Atributos |
|------------|:----------------------|:-----------|
|`<script>`|Coloca un script dentro del documento cuando esta en head.||
|||src: Especifica la localización de un script externo.|
|||type: Especifica el lenguaje de scripts de los contenidos del elemento.|


Vamos a escribir JavaScript dentro de un elemento HTML con atributo id="hackspace":


```html
<!DOCTYPE html>
<html>
<body>
<script>
function myFunction() {
document.getElementById("hackspace").innerHTML = "Hola JavaScript!";
}
</script>
<p id="hackspace">Antes de JavaScript</p>
<button type="button" onclick="myFunction()">Probar script</button>
</body>
</html>
```

### Tablas,Listas,Links e Imagenes

| Etiqueta | Descripcion | Atributos |
|----------|-------------|-----------|
|`<table>`|Define una tabla.||
|`<td>`|Define una columna.||
|`<th>`|Define las cabeceras.||
|`<tr>`|Define una fila.||
|`<li>`|Define un item de lista.||
|`<ol>`|Define una lista ordenada.||
|`<ul>`|Define una lista desordenada.||
|`<a>`|Define un link.||
|||href: Url del link externo,id del link interno o email.|
|||target: Define si el link se abrira en la misma o en una nueva ventana.|
|`<img>`|Inserta una imagen.||
|||src: Origen de la imagen.|
|||align: Alinea la imagen dependiendo del valor que tome.|

Veamos el ejemplo con estas etiquetas:

```html
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
```

### Formularios

| Etiqueta | Descripcion | Atributos |
|----------|-------------|-----------|
|`<form>` | Esta etiqueta indica que se empezara a recolectar informacion del usuario |||
|`<select>` y `<option>`|||
|`<textarea>`|Genera un input tipo texto multilinea.||
|`<input>`| Genera un campo en el cual el usuario puede introducir informacion o contenido|||
|||required: Define que el campo es obligatorio.|
|||type: Tipo de elemento input.|

| Atributo |    Valor    | Descripcion |
|----------|-------------|-----------|
|type|text|Define un input tipo texto.|
||password|Define un input tipo password.|
||radio button|Define un input tipo radio button|
||checkbox|Define un input tipo checkbox.|
||file|Define un input tipo file.|
||submit button|Define un input tipo submit button.|
||image button|Define un input tipo image button.|
||label|Define un input tipo etiqueta.|
||date|Define un input tipo etiqueta.|
||email|Define un input tipo email.|
||url|Define un input tipo url.|

Veamos el ejemplo con estas etiquetas:

```html
<!DOCTYPE html>
<html>
<body>

<form action="/pagina">
Elija un username: input type="text" name="Username" value="hackspace"><br>
Elija un password: <input type="password" id="Password" value="123456789"><br>
Nombres: <input type="text" name="FirstName" value="Juan"><br>
Apellidos: <input type="text" name="LastName" value="Perez"><br>
Foto de perfil: <input type="file" id="myFile"><br>
Pais: 
<select>
  <option value="peru">Peru</option>
  <option value="arge">Argentina</option>
  <option value="chil">Chile</option>
  <option value="bras">Brasil</option>
</select><br>
Fecha de nacimiento: <input type="date" id="myDate" value="2015-01-05"><br>
E-mail: <input type="email" id="myEmail" value="contacto@hackspace.com"><br>
Pagina web:<input type="url" id="myURL" value="http://www.tuweb.com"><br>
Sobre mi:<br>
<textarea rows="4" cols="50">
Esta es mi descripcion. 
</textarea><br>
<input type="checkbox" id="myCheck"> He leido el acuerdo de seguridad 
<br>
<input type="submit" value="Enviar">
<input type="button" id="Cancel" onclick="cancelar()" value="Cancel">
</form>

<p>El boton "Enviar" te llevara a "/pagina".</p>

</body>
</html>
```

### Otras etiquetas

| Etiqueta | Descripcion | Atributos |
|----------|-------------|-----------|
|`<audio>` |Define un elemento audio.||
|`<source>` |Define el origen del audio.||
|||src: Es el url del audio.|
|||type: Formato de audio.|

```html
<!DOCTYPE html>
<html>
<body>
<audio controls>
  <source src="http://www.w3schools.com/tags/horse.ogg" type="audio/ogg">
  <source src="http://www.w3schools.com/tags/horse.mp3" type="audio/mpeg">
  Tu browser no soporta el elmento audio.
</audio>
</body>
</html>
```

## Ejercicios

Pero antes de continuar, reforcemos lo que hemos aprendido en esta primera sección con unos cuántos ejercicios muy simples.

a.Escriba un documento html que tenga como titulo "Programacion" y que redacte brevemente acerca de programacion incluya cabecaras, parrafos, divisiones, una tabla que enumere los cursos que desearia aprender.

b.Escriba un documento html con un formulario que pregunte por datos como nombre, apellido, cursos, notas, fecha de ingreso, un boton para subir una foto y un boton final para "enviar".

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

a. `<b>`.

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

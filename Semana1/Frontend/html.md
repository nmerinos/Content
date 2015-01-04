# HTML

## Ejemplos

### Cómo comenzar un codigo html

Todo html sigue una estructura similar, primero se escribe la etiqueta `<html></html>`  y dentro de el contiene una etiqueta `<head></head>` el cual define información del documento y otra `<body></body>` el cuál define información del cuerpo del documento: 

```html
<html>
<head>
</head>
<body>
</body>
</html>
```

Generalmente las etiquetas de abren `<etiqueta>` y cierran `</etiqueta>`, teniendo contenido por dentro, habiendo excepciones que no se cierran porque no tienen contenido, como `<img>` o `<br>`.
Otro concepto fundamental es entender que cada etiqueta tiene atributos y cada atributo asume un valor: 

`<etiqueta atributo1=valor1 atributo2=valor2 .... atributon=valorn></etiqueta>`

El atributo id por ejemplo defite un identificador unico en todo el documento que servira para asignarle estilos o scripts al componente de la etiqueta en que se encuentre. Para mayor detalle de los atributos se recomienda este [enlace](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes). 

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
|`<base>`|Especifica la URL base que será usada para todos los vínculos de la página.||
|`<style>`|Define el estilo de la información del documento html.||

Revisar este [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head#See_also) para mayor profundidad. 

### Introduccion a javascript con la etiqueta `<script></script>`

| Etiqueta   |      Descripcion      |  Atributos |
|------------|:----------------------|:-----------|
|`<script>`|Coloca un script dentro del documento cuando esta en head.||
|||src: Especifica la localización de un script externo.|
|||type: Especifica el lenguaje de scripts de los contenidos del elemento.|

> **Ejemplo:**
> -Vamos a escribir JavaScript dentro de un elemento HTML con atributo id="hackspace".

```html
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










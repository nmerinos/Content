# HTML

Cómo comenzar un codigo html
Todo html sigue una estructura similar, primero se escribe la etiqueta `<html></html>`  y dentro de el contiene una etiqueta `<head></head>` el cual define información del documento y otra `<body></body>` el cuál define información del cuerpo del documento: 

       <html>
          <head>
          </head>
          <body>
          </body>
       </html>

Generalmente las etiquetas de abren `<etiqueta>` y cierran `</etiqueta>`, teniendo contenido por dentro, habiendo excepciones que no se cierran porque no tienen contenido, como `<img>` o `<br>`.
Otro concepto fundamental es entender que cada etiqueta tiene atributos y cada atributo asume un valor: 

`<etiqueta atributo1=valor1 atributo2=valor2 .... atributon=valorn></etiqueta>`

El atributo id por ejemplo defite un identificador unico en todo el documento que servira para asignarle estilos o scripts al componente de la etiqueta en que se encuentre. Para mayor detalle de los atributos se recomienda este [enlace][1]. 

Dentro del head y del body también encontramos otras etiquetas que ayudan a definir la información del documento y de su cuerpo, respectivamente.

Etiquetas principales de <head></head>
Las etiquetas más comunes que encontramos son:

| Etiqueta   |      Descripcion      |  Atributos |
|------------|:----------------------|:-----------|
|`<title>`|Define el título del documento.|  |

> **Ejemplo:**
> - Contenido.

| Etiqueta   |      Descripcion      |  Atributos |
|------------|:----------------------|:-----------|
|`<meta>` |Especifica una pareja propiedad/valor del documento.|name: Identifica un nombre de propiedad.|
|||http-equiv: Los servidores HTTP utilizan este atributo para obtener información sobre los encabezados.|
|||content: Este atributo especifica el valor de una propiedad.|
|||scheme: Proporciona a los agentes de usuario más contexto para la interpretación correcta de los datos.|

> **Ejemplo:**
> - Contenido.




| Etiqueta   |      Descripcion      |  Atributos |
|------------|:----------------------|:-----------|
|`<link>`|Define un vínculo. Solo puede aparecer en la sección head de un documento.||
|||charset: Especifica la codificación de caracteres.|
|||href: Especifica la localización de un recurso de la web.|
|||hreflang: Especifica el lenguaje de la URL.|  
|||media: El medio para la información del estilo.|
|||target: Indica donde abrir el URL.|

> **Ejemplo:**
> - Contenido.




| Etiqueta   |      Descripcion      |  Atributos |
|------------|:----------------------|:-----------|
|`<base>`|Especifica la URL base que será usada para todos los vínculos de la página.||

> **Ejemplo:**
> -Especificar la url http://www.w3schools.com/images/ para que en el body reconozca la referencia a la imagen http://www.w3schools.com/images/html5.gif en la etiqueta de imagen (`<img>`).

       <html>
          <base href="http://www.w3schools.com/images/" target="_blank">
          <body>
              <img src="html5.gif">
          </body>
       </html>



| Etiqueta   |      Descripcion      |  Atributos |
|------------|:----------------------|:-----------|
|`<style>`|Define el estilo de la información del documento html.||

> **Ejemplo:**
> -Definir el estilo de la etiqueta body, definiendo su atributo background-color como yellow, definir el atributo color de la etiqueta p como azul.

       <style>
          body {background-color:yellow;}
          p    {color:blue;}
       </style>



Revisar este [link][2] para mayor profundidad. 

| Etiqueta   |      Descripcion      |  Atributos |
|------------|:----------------------|:-----------|
|`<script>`|Coloca un script dentro del documento cuando esta en head.||
|||src: Especifica la localización de un script externo.|
|||type: Especifica el lenguaje de scripts de los contenidos del elemento.|

> **Ejemplo:**
> -Vamos a escribir JavaScript dentro de un elemento HTML con atributo id="hackspace".

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


[1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
[2]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head#See_also





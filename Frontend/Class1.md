Fundamentos de Frontend
Frontend es la parte web que principalmente define el diseño visual con la cual el usuario percibe e interactua. 
Lo primero que se debe entender es la estructura HTML, el cual es el lenguaje estándar para las páginas web, se denomina lenguaje marcado porque esta compuesto de etiquetas (<etiqueta>).
La clave es entender el uso de cada etiqueta, en esta clase expondremos las etiquetas básicas para construir nuestra primera página. 
Compilar el código html es sencillo, tan solo basta con abrir los archivos con extensión .html desde un navegador.

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

Dentro del head y del body también encontramos otras etiquetas que ayudan a definir la información del documento y de su cuerpo, respectivamente.

Etiquetas principales de <head></head>
Las etiquetas más comunes que encontramos son:

| Etiqueta   |      Descripcion      |  Atributos |
|------------|:----------------------|:-----------|
|`<title>`|Define el título del documento.|  |


| Etiqueta   |      Descripcion      |  Atributos |
|------------|:----------------------|:-----------|
|`<meta>` |Especifica una pareja propiedad/valor del documento.|name: Identifica un nombre de propiedad.|
|||http-equiv: Los servidores HTTP utilizan este atributo para obtener información sobre los encabezados.|
|||content: Este atributo especifica el valor de una propiedad.|
|||scheme: Proporciona a los agentes de usuario más contexto para la interpretación correcta de los datos.|

| Etiqueta   |      Descripcion      |  Atributos |
|------------|:----------------------|:-----------|
|`<link>`|Define un vínculo. Solo puede aparecer en la sección head de un documento.||
|||charset: Especifica la codificación de caracteres.|
|||href: Especifica la localización de un recurso de la web.|
|||hreflang: Especifica el lenguaje de la URL.|  
|||media: El medio para la información del estilo.|
|||target: Indica donde abrir el URL.|

| Etiqueta   |      Descripcion      |  Atributos |
|------------|:----------------------|:-----------|
|`<script>`|Coloca un script dentro del documento.||
|||src: Especifica la localización de un script externo.|
|||type: Especifica el lenguaje de scripts de los contenidos del elemento.|


| Etiqueta   |      Descripcion      |  Atributos |
|------------|:----------------------|:-----------|
|`<base>`|Especifica la URL base que será usada para todos los vínculos de la página.||

Ejemplo:
Especificar la url http://www.w3schools.com/images/ para que en el body reconozca la referencia a la imagen http://www.w3schools.com/images/html5.gif en la etiqueta de imagen (<img>).
       <html>
          <base href="http://www.w3schools.com/images/" target="_blank">
          <body>
              <img src="html5.gif">
          </body>
       </html>



| Etiqueta   |      Descripcion      |  Atributos |
|------------|:----------------------|:-----------|
|`<style>`|Define el estilo de la información del documento html.||

Ejemplo:
Definir el estilo de la etiqueta body, definiendo su atributo background-color como yellow, definir la etiqueta p como azul.

       <style>
          body {background-color:yellow;}
          p    {color:blue;}
       </style>

Revisar para mayor profundidad: http://www.w3schools.com/html/html_head.asp








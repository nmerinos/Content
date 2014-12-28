Fundamentos de Frontend
Frontend es la parte web que principalmente define el diseño visual con la cual el usuario percibe e interactua. 
Lo primero que se debe entender es la estructura HTML, el cual es el lenguaje estándar para las páginas web, se denomina lenguaje marcado porque esta compuesto de etiquetas (<etiqueta>).
La clave es entender el uso de cada etiqueta, en esta clase expondremos las etiquetas básicas para construir nuestra primera página. 
Compilar el código html es sencillo, tan solo basta con abrir los archivos con extensión .html desde un navegador.

Cómo comenzar un codigo html
Todo html sigue una estructura similar, primero se escribe la etiqueta <html></html>  y dentro de el contiene una etiqueta <head></head> el cual define información del documento y otra <body></body> el cuál define información del cuerpo del documento: 

       <html>
          <head>
          </head>
          <body>
          </body>
       </html>

Otro concepto fundamental es entender que cada etiqueta tiene atributos y cada atributo asume un valor: 

<etiqueta atributo1=valor1 atributo2=valor2.....atributon=valorn></etiqueta>

Dentro del head y del body también encontramos otras etiquetas que ayudan a definir la información del documento y de su cuerpo, respectivamente.

Etiquetas principales de <head></head>
Las etiquetas más comunes que encontramos son:

<title>: Define el título del documento.
<meta>: Especifica una pareja propiedad/valor del documento. Tiene los siguientes atributos:
  name: Identifica un nombre de propiedad. 
  http-equiv: Los servidores HTTP utilizan este atributo para obtener información sobre los encabezados.
  content: Este atributo especifica el valor de una propiedad.
  scheme: Proporciona a los agentes de usuario más contexto para la interpretación correcta de los datos.
<link>: Define un vínculo. Solo puede aparecer en la sección head de un documento.
  charset	Especifica la codificación de caracteres.
  href Especifica la localización de un recurso de la web.
  hreflang:	Especifica el lenguaje de la URL.
  media: El medio para la información del estilo.
  target: Indica donde abrir el URL.

http://www.virtualnauta.com/html-head






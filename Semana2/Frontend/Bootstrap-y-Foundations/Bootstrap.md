# Twitter Bootstrap

Bootstrap es un framework de desarrollo frontend que contiene un conjunto de herramientas y recursos que son comunes en el diseño web.

Un dato importante sobre este articulo es que utilizaremos la version 2.3.2 en vez de la ultima hasta el momento (3.3.1) debido a que esta ultima versión es un poco más dificil de aprender para diseñadores principiantes. Sabemos que plantear este hecho es malacostumbrar a los diseñadores. Aunque se anima a una vez aprendido, avancen a la ultima versión para no quedar obsoletos.

Dicho esto, empecemos.

## Descargando Bootstrap

Hay 2 version disponibles para descargar, la versión compilada y el source. Puedes descargarlos [aqui][1].

La descarga compilada contiene una version comprimida de los archivos CSS y Javascript para que un rápido desarrollo, mientras que la descarga source contiene todos los archivos originales y una copia de su documentación.

Para nuestro proposito, nos enfocaremos en la versión compilada. Esto también incrementa la eficiencia del sitio desarrollado por tener menor peso de archivos.

## Entendiendo la estructura de ficheros

Una vez descargada la version compilada de Bootstrap, descomprima el archivo y vera la siguiente estructura:

    bootstrap/
    |—— css/
    |   |—— bootstrap.css
    |   |—— bootstrap.min.css
    |   |—— bootstrap-responsive.css
    |   |—— bootstrap-responsive.min.css
    |—— img/
    |   |—— glyphicons-halflings.png
    |   |—— glyphicons-halflings-white.png
    |—— js/
    |   |—— bootstrap.js
    |   |—— bootstrap.min.js

Vera los archivos compilados de Bootstrap (`bootstrap.*`) y tambien los archivos compilados y comprimidos`(bootstrap.min.*`).

## Creando un archivo básico en HTML

Empezamos por un archivo con la siguiente estructura.

    <!DOCTYPE html>
	<html>
	<head>
	    <meta charset="utf-8">
	    <title>Basic HTML File</title>
	</head>
	<body>
	    <h1>Hello, world!</h1>
	</body>
	</html>

Con `<!DOCTYPE html>` declaramos el archivo como HTML5. Con `<meta charset="utf-8">` declaramos que el el archivo soporte caracteres especiales en nuestro idioma como la ñ y tildes.

Para usar Bootstrap, agregamos el archivo CSS `bootstrap.min.css` antes de `</head>` y tambien el archivo JS `bootstrap.min.js` antes de `</body>`.

	<!DOCTYPE html>
	<html>
	<head>
	    <meta charset="utf-8">
	    <title>Basic Bootstrap Template</title>
	    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	</head>
	<body>
	    <h1>Hello, world!</h1>
	    <script src="js/bootstrap.min.js"></script>
	</body>
	</html>

Con esto ya tenemos todo listo para usar Bootstrap.

## Maquetando con el Fixed Grid System

Por defecto el sistema de Grid de Bootstrap se basa en una rejilla de 12 columnas  con tamaño de pantalla 940px. 

Este sistema de grid es similar a una tabla, donde cada fila puede tener a lo mucho 12 columnas de diferentes anchos ya definidos en pixeles pero ya determinados por archivos CSS de bootstrap.

Empezamos añadiendo al `<body>` un div con clase `.container` que contenga una fila con clase `.row` y que para un primero ejemplo que tenga una sola columna.

Quedaria lo siguiente:

	<div class="container">
	    <div class="row">
	        <div class="span12">
	        <!--Body content-->
	        </div>
	    </div>  
	</div>

El `.span12` hace que el la única columna cubra todo el ancho disponible o en otras palabras que su width es 940px.

![Una solo columna](http://i.imgur.com/nKncUZk.png)

Para un segundo ejemplo, la fila contendra 2 columnas pero que sus espesores seran como 3 y 9 en una rejilla de 12.

	<div class="container">
	    <div class="row">
	        <div class="span3">
	        <!--Sidebar content-->
	        </div>
	        <div class="span9">
	        <!--Body content-->
	        </div>
	    </div>
	</div>

![2 columnas de diferentes espesores](http://i.imgur.com/U60xe70.png)

Con esto podemos hacer una fila con espesores de columnas que más nos convenga utilizando las clases `.span*` tal que * puede tomar valores del 1 al 12.

Ahora si queremos que las columnas se muevan para la derecha con un **desplazamiento** usamos la clase `.offset*` .

    <div class="container">
	    <div class="row">
	        <div class="span4">
	        </div>
	        <div class="span4 offset4">
	        </div>
	    </div>
	    <div class="row">
	        <div class="span6 offset6">
	        </div>
	    </div>
	</div>

![enter image description here](http://i.imgur.com/Uz4D1hH.png)

Ahora cuando queremos anidar columnas dentro de otra columna se debe crear dentro una fila con clase  `.row` y dentro columnas con clase `.span*`

	<div class="container">
	    <div class="row">
	      <div class="span9">
	        Columna Nivel 1
	        <div class="row">
	          <div class="span4">Nivel 2</div>
	          <div class="span5">Nivel 2</div>
	        </div>
	      </div>
	      <div class="span3">
	        Columna Nivel 1
	      </div>
	    </div>
	</div>

![Anidado de columnas](http://i.imgur.com/JHLnOFm.png)

Importante darse cuenta que las columnas de segundo nivel con clases `.span4` y `.span5` ocupan todo el espacio dentro de la columna de clase `.span9`. Esto significa que las columnas anidadas conservan el mismo espesor que las anidadas bajo la misma clase.

Notese que al disminuir el tamaño de ventana del explorador, el diseño no responde y cierta parte se esconde.

## Maquetando con el Fluid Grid System

A diferencia del Fixed Grid System que utiliza valores ya definidos de width hechos en pixeles, el Fluid Grid System utiliza porcentajes para definir los width. Esto significa que el diseño siempre mantiene una proporcionalidad en cuanto a espesores se refiere.

La forma de utilizar este sistema varia con el anterior en el uso de la clase para el contenedor que antes fue `.container` y ahora `.container-fluid`para las filas que antes fue `.row` y ahora es `.row-fluid`

Este sistema aun conserva la característica de las 12 columnas pero hecho porcentajes, también conserva el uso de las clases `.span*` y ` .offset*`.

La única diferencia importante con el anterior es sobre el uso de columnas anidadas como se muestra.

	<div class="container-fluid">
	    <div class="row-fluid">
	      <div class="span9">
	        Columna Nivel 1
	        <div class="row-fluid">
	          <div class="span6">Nivel 2</div>
	          <div class="span6">Nivel 2</div>
	        </div>
	      </div>
	      <div class="span3">
	        Columna Nivel 1
	      </div>
	    </div>
	</div>

![enter image description here](http://i.imgur.com/L74PdyQ.png)

Ahora las columnas de nivel 2 con clase `.span6` funcionan con porcentajes pero referidos a su columna padre.

## Diseño Responsivo

El Fluid Grid System tiene el inconveniente que al reducir el tamaño de pantalla drasticamente  en caso de celulares, el contenido en texto que generalmente es medianamente largo se comprime en espesor haciendo que las cajas div aumenten en altura. 

| Clase   |      Telefono      |  Tablet |  Escritorio |
|------------|:----------------------|:-----------|:-----------|
|`.visible-phone`|Visible| Oculto | Oculto |
|`.visible-tablet`|Oculto| Visible | Oculto |
|`.visible-desktop`|Oculto| Oculto | Visible |
|`.hidden-phone`|Oculto| Visible | Visible |
|`.hidden-phone`|Visible| Oculto | Visible |
|`.hidden-phone`|Visible| Visible | Oculto |

[1]: http://getbootstrap.com/2.3.2/index.html
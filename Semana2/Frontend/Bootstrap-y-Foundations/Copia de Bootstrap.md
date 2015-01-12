# Twitter Bootstrap

Bootstrap es un framework de desarrollo frontend que contiene un conjunto de herramientas y recursos que son comunes en el diseño web.

Un dato importante sobre este articulo es que utilizaremos la version 2.3.2 en vez de la ultima hasta el momento (3.3.1) debido a que esta ultima versión es un poco más dificil de aprender para desarrolladores/diseñadores principiantes. Los animamos a que una vez aprendido, avancen a la ultima versión para no quedar obsoletos.

¡Pues empecemos!


## Descargando Bootstrap

Puedes empezar descargando Bootstrap [aquí][http://getbootstrap.com/2.3.2/].
Luego de descargarlo nos encontramos con 3 carpetas, una para el CSS, otra para el JS y una para las imágenes (img). Dentro de las carpetas css y js verás dos versiones para cada archivo, una versión compilada (.min.css/.min.js) y la original (.css/.js).

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

¿Cuál es la diferencia? Que la compilada pesa mucho menos ya que ha pasado por un proceso de reducción en el que se le quitan todos los espacios y el ordenamiento. Sin embargo, si uno desea editar el CSS o JS fuente de Bootstrap, es más fácil editar los archivos originales sin reducir (ya que es máse sencillo encontrar la sección que deseamos editar) y utilizarlos dentro de nuestra página en vez de utilizar los `.min`.

Para nuestro propósito, utilizaremos la versión compilada (.min). Esto también incrementa la eficiencia del sitio desarrollado por tener menor peso de archivos.


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

### Ejemplo 1: Maquetando con el Fixed Grid System

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

### Ejemplo 2: Maquetando con el Fluid Grid System

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

## Componentes del CSS

Empecemos yendo a la [documentación oficial de Bootstrap](http://getbootstrap.com/2.3.2/base-css.html). En esta web encontrarás un resumen de los elementos que existen en Boostrap 2.3.2 de manera oficial.

Sin embargo, si tienes problemas con el inglés, en [esta página](http://www.anidocs.es/bootstrap/docs/base-css.php) encontrarás esa misma información pero en Español.

### Ejemplo 3: Tipografía

Para encabezados de cualquier tipo tenemos 6 tamaños para elegir:

	<h1>Encabezado 1</h1>
	<h2>Encabezado 2</h2>
	<h3>Encabezado 3</h3>
	<h4>Encabezado 4</h4>
	<h5>Encabezado 5</h5>
	<h6>Encabezado 6</h6>

Cuando escribimos párrafos podemos añadirle la clase `lead` para resaltarlos más:

	<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>

![Ejemplo de p](http://puu.sh/epfOH/a8003961b2.png)

	<p class="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>

![Ejemplo de p con lead](http://puu.sh/epfTP/12c9e9afe6.png)

Podemos utilizar también la etiqueta `<small>` para secciones más pequeñas o la etiqueta `<strong>` para darle negrita:

	<p>Este texto es normal, <small>este es más pequeño</small><strong> y este esta en negrita.</strong></p>

![Ejemplo con small y strong](http://puu.sh/epgHf/d6adb9feb2.png)

Podemos alinear el texto a la derecha, izquierda o al centro:

	<p class="text-left">Texto alineado a la izquierda.</p>
	<p class="text-center">Texto alineado al centro.</p>
	<p class="text-right">Texto alineado a la derecha.</p>

![Alineacion de texto](http://puu.sh/eph2r/39f8cd3970.png)

Y si van revisando la versión en inglés de la [documentación de Boostrap](http://getbootstrap.com/2.3.2/base-css.html#typography) pueden ir viendo que el código y el ejemplo que utilizan son bastante visuales e intuitivos.

### Ejemplo 4: Formularios

Si vamos a la sección de formularios y queremos hacer un `Horizontal Form` (formulario horizontal) como el que aparece en la web:

![Horizontal Form](http://puu.sh/epeRV/7cb1ce1756.png)

Pues solo debemos copiar y pegar el código en nuestro HTML:

	<form class="form-horizontal">
	  <div class="control-group">
	    <label class="control-label" for="inputEmail">Email</label>
	    <div class="controls">
	      <input type="text" id="inputEmail" placeholder="Email">
	    </div>
	  </div>
	  <div class="control-group">
	    <label class="control-label" for="inputPassword">Password</label>
	    <div class="controls">
	      <input type="password" id="inputPassword" placeholder="Password">
	    </div>
	  </div>
	  <div class="control-group">
	    <div class="controls">
	      <label class="checkbox">
	        <input type="checkbox"> Remember me
	      </label>
	      <button type="submit" class="btn">Sign in</button>
	    </div>
	  </div>
	</form>

Y quedará así:

![Ejemplo de Horizontal Form](http://puu.sh/ephK7/1a2163493c.png)

### Ejemplo 5: Botones

Ahora digamos que queremos poner un botón. Pues solo debemos de utilizar la clase `class="btn"` y ya tendremos un diseño de botón predeterminado. Con esto se acostumbra utilizar la etiqueta `<button>` ya que a fin de cuentas se trata de un botón. Entonces, si utilizamos:

	<button class="btn">Botón Predeterminado</button>

Veremos lo siguiente:

![Botón](http://puu.sh/epidn/888f1dcb5c.png)

A continuación otros ejemplos de botones según las clases que le añadimos:

![Ejemplos de botones](http://puu.sh/ephPV/2db057259a.png)

Entonces, dale una mirada detallada a los distintos [componentes](http://getbootstrap.com/2.3.2/base-css.html) que tiene Boostrap y que puedes utilizar luego de añadir `bootstrap.min.css` en el `head` de tu HTML.
# Fundamentos de Frontend

## Ejemplos

#### Configurando mi entorno

Antes de empezar, debemos tener las herramientas necesarias para visualizar correctamente y entender mejor qué es lo que sucede en una página web.

Estas son las herramientas que necesitaremos:

* En Windows/Linux/MAC
    1. [Google Chrome](http://www.google.com.pe/chrome/browser/desktop/index.html): Descárguense este navegador si aún no lo tienen, más adelante lo utilizaremos con mayor profundidad.
    2. [Sublime Text 2](http://www.sublimetext.com/2): Este es uno de los mejores editores de texto gratuitos disponibles. Les servirá para poder abrir los archivos que les brindaremos, para revisarlos y editarlos en su computadora.
    3. [Ejemplos a descargar.](http://www.hackspace.la/ejemplosfront)


#### Ejemplo 1

Ahora que ya tenemos los programas necesarios descargados, empecemos con un primer ejemplo simple de un archivo HTML sin CSS ni Javascript.

Ubícate en la carpeta de **Ejemplo 1** del archivo [Ejemplos Frontend](http://www.hackspace.la/ejemplosfront) que descargaste y abre el documento **Ejemplo1.html** con Sublime Text 2 (el cual también descargaste anteriormente). Si no sabes cómo hacerlo te recomendamos abrir Sublime Text 2 y arrastrar el archivo **Ejemplo1.html** en él.

Lo que verás será algo parecido a esto:

~~~html
<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <title>Página 1</title>
    </head>
    <body>
        <h1>Título</h1>
        <p>Párrafo: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum sequi optio ullam ad nihil dolores eum, officiis assumenda delectus ea.</p>
        <img src="http://puu.sh/e0BO7/f44d5bf1d6.png" alt="HackSpace Perú">
        <button type="button">¡Hazme clic!</button>
    </body>
</html>
~~~

Pero, si abres este archivo con Google Chrome verás lo siguiente:

![Pantallazo Ejemplo 1](http://puu.sh/e32Ot/a9a3c0e10d.png)

Como verás, este es un archivo de HTML simplificado. Ahora seguiremos con el segundo ejemplo.


#### Ejemplo 2

Continuaremos con un archivo HTML con CSS y Javascript incluido dentro de él.

En este ejemplo añadimos dentro del ``<body>`` el estilo (CSS) y el script (Javascript), el orden en el que ha sido colocado influye en la funcionalidad que posee, pero ahora lo que nos interesa es solo ver que funciona.

~~~html
<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <title>Página 2</title>
    </head>
    <body>
        <style type="text/css">
            .clase1 {
                color: blue;
            }
        </style>
        <h1 class="clase1">Título</h1>
        <p id="demo">Párrafo: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum sequi optio ullam ad nihil dolores eum, officiis assumenda delectus ea.</p>
        <img src="http://puu.sh/e0BO7/f44d5bf1d6.png" alt="HackSpace Perú">
        <script type="text/javascript">
            function miFuncion() {
                var x = document.getElementById("demo");
                x.style.fontSize = "25px";           
                x.style.color = "red"; 
            }
        </script>
        <button type="button" onclick="miFuncion()">¡Hazme clic!</button>
    </body>
</html>
~~~

Si abres este archivo con Google Chrome verás lo siguiente:

![Pantallazo Ejemplo 2](http://puu.sh/e34mZ/057a80a65b.png)

En este vaso vemos cómo con el CSS estamos cambiando el color del Título. Ya demás, con el Javascript estamos añadiendo la funcionalidad que si haces clic en el botón ``¡Hazme Clic!`` agregamos atributos CSS al Párrafo y este crece y cambia de color.

Ya que entendemos mejor a qué nos referíamos cuando decíamos que el CSS cambia el estilo y el Javascript agrega funcionalidad, veremos un último ejemplo con estos archivos separados.


#### Ejemplo 3

Debido a que cuando trabajamos en una web tenemos bastante código para trabajar, es preferible separar y organizar el HTML, CSS y Javascript en archivos y hasta carpetas diferentes. De esta manera, en el ejemplo anterior lo podemos realizar también de esta otra manera:

1. Creamos los arhivos ejemplo3.html, style.css y main.js, y los ponemos en una ubicación que conozcamos (en este caso los 3 están en una misma carpeta). Estos son los archivos HTML, CSS y Javascript respectivamente y pueden tener cualquier nombre que queramos pero con sus respectivas terminaciones.
2. Abrimos el archivo HTML y vemos que en vez del código CSS y Javascript que había anteriormente, ahora hay un links dentro de la etiqueta ``<head>`` y la etiqueta ``<script>`` de Javascript con código que teníamos se redujo a un ``src="main.js"``
3. Abrimos el archivo CSS llamado style.css y vemos el mismo código que teníamos dentro de ``<style type="text/css">``.
4. Abrimos el archivos Javascript llamado main.js y vemos el mismo código que teníamos dentro de ``<script type="text/javascript" src="static/template/themes/admin/layout.js"></script>``.

~~~html
<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <title>Página 3</title>
    <link type="text/css" href="style.css" rel="stylesheet">
    </head>
    <body>
        <h1 class="clase1">Título</h1>
        <p id="demo">Párrafo: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum sequi optio ullam ad nihil dolores eum, officiis assumenda delectus ea.</p>
        <img src="http://puu.sh/e0BO7/f44d5bf1d6.png" alt="HackSpace Perú">
        <button type="button" onclick="miFuncion()">¡Hazme clic!</button>
        <script type="text/javascript" src="main.js"></script>
    </body>
</html>
~~~

Si abres el archivo ejemplo3.html con Google Chrome verás que se ve exactamente igual que en el Ejemplo 2 y tiene la misma funcionalidad:

![Pantallazo Ejemplo 3](http://puu.sh/e34mZ/057a80a65b.png)

Vale la pena aclarar que la intención de estos ejemplos no es que entiendas el código que estamos utilizando, ese será tema de las siguiente secciones. Pero si es que haz entendido mejor cómo es que los archivos HTML, CSS y Javascript interactúan, entonces estás listo para empezar a aprender a desarrollar con estos lenguajes.


## Ejercicios

Pero antes de continuar, reforcemos lo que hemos aprendido en esta primera sección con unos cuántos ejercicios muy simples.

### Ejercicio 1

En la carpeta Ejercicio 1 encontramos un archivo HTML llamado ``index.html``. Si abrimos esta archivo en el navegador veremos algo asi:

![Pantallazo Ejercicio 1](http://puu.sh/e3eop/39f3fc04db.png)

Esto sucede porque los dos archivos CSS que necesita la web no estan linkeados dentro del HTML. Para solucionarlo debes editar el archivo ``index.html`` (en Sublime Text 2) e incluir estas dos líneas de código dentro de la etiqueta ``<head>``. Por ahora no nos preocupemos en qué lugar del HEAD en específico:

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/agency.css" rel="stylesheet">

Abre nuevamente el archivo en el navegador. ¿Qué es lo que ves ahora? Debería aparecer algo como esto:

![Pantallazo Ejercicio 1 Resuelto](http://puu.sh/e3eRP/76a8fa93d2.jpg)

### Ejercicio 2

En este segundo ejercicio queremos que le des funcionalidad a la sección del Portafolio de la página.

![Pantallazo Portafolio](http://puu.sh/e42ul/cb0144b4a2.jpg)

Abre el archivo ``index.html`` de la carpeta Ejemplo 2. Haz clic en cualquier imagen de la sección Portafolio, verás que no aparece nada, solo hay un hover de color amarillo. Lo que haremos será incluir el archivo Javacript que brinda la funcionalidad del modal. Para quienes no entienden qué es un modal, es una sección de HTML que aparece delante de la página, muchos lo conocen como POP UP, pero este no aparece en una ventana diferente, sino en la misma página.

En este caso, el HTML ya está creado, pero está oculto. Lo que haremos será incluir el archivo de javascript que hará que aparezca y desaparezca cuando el usuario desee.

Para conseguir esto, abre el archivo ``index.html`` en Sublime Text 2 y dirígete a la parte más baja del documento, donde finaliza el ``</body>``

Ahí verás que hay varias etiquetas de ``<script>``. Antes de que se cierre la etiquetea ``</body>`` incluye el siguiente script:

    <script src="js/modal.js"></script>

Guarda el archivo y abre nuevamente el archivo index.html en el navegador, dirígete a la parte de Portafolio y haz clic en alguna de las imágenes. ¿Te aparece algo ahora? Debería aparecer algo como esto:

![Pantallazo Modal Resuelto](http://puu.sh/e46Fn/7da40253af.jpg)

## Cuestionario

1- ¿Cuál es la funcionalidad básica del **HTML**?
- Editar el diseño y estilos de la página.
- Describir la estructura y organización de una página web.
- Interpretar las etiquetas y pintar una página web.

2- Las etiquetas son los elementos principales de:
- HTML
- CSS
- Javascript

3- Es un lenguaje de programación:
- HTML
- CSS
- Javascript

4- ¿Con Javascript podemos añadir nuevo CSS?
- Sí
- No

5- ¿Con qué programo una funcionalidad de clic en un botón?
- HTML
- CSS
- Javascript

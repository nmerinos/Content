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
    <body>
        <h1>Título</h1>
        <p>Párrafo: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum sequi optio ullam ad nihil dolores eum, officiis assumenda delectus ea.</p>
        <img src="http://puu.sh/e0BO7/f44d5bf1d6.png" alt="HackSpace Perú">
        <button type="button">¡Hazme clic!</button>
    </body>
</html>
~~~

Pero, si abres este archivo con Google Chrome verás lo siguiente:

    Añadir acá pantallaso.

Como verás, este es un archivo de HTML simplificado. Ahora seguiremos con el segundo ejemplo.


#### Ejemplo 2

Continuaremos con un archivo HTML con CSS y Javascript incluido dentro de él.

En este ejemplo añadimos dentro del ``<body>`` el estilo (CSS) y el script (Javascript), el orden en el que ha sido colocado influye en la funcionalidad que posee, pero ahora lo que nos interesa es solo ver que funciona.

~~~html
<!DOCTYPE html>
<html>
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

    Añadir acá pantallaso.

En este vaso vemos cómo con el CSS estamos cambiando el color del Título. Ya demás, con el Javascript estamos añadiendo la funcionalidad que si haces clic en el botón ``¡Hazme Clic!`` agregamos atributos CSS al Párrafo y este crece y cambia de color.

Ya que entendemos mejor á qué nos referíamos cuando decíamos que el CSS cambia el estilo y el Javascript agrega funcionabilidad, veremos un último ejemplo con los archivos separados.


#### Ejemplo 3

Debido a que cuando trabajamos en una web tenemos bastante código para trabajar, es preferible separar y organizar el HTML, CSS y Javascript en archivos diferentes. De esta manera es que el ejemplo anterior lo podemos realizar también de esta otra manera:

1. Creamos los arhivos ejemplo3.html, style.css y main.js, y los ponemos en una ubicación que conozcamos (en este caso los 3 están en una misma carpeta). Estos son los archivos HTML, CSS y Javascript respectivamente y pueden tener cualquier nombre que queramos, pero tienen que terminar en las extensiones de cada tipo de archivo.
2. Abrimos el archivo HTML y vemos que en vez del código CSS y Javascript que había anteriormente, ahora hay un links dentro de la etiqueta ``<head>`` y la etiqueta ``<script>`` de Javascript con código que teníamos se redujo a un ``src="main.js"``
3. Abrimos el archivo CSS llamado style.css y vemosel mismo código que teníamos dentro de ``<style type="text/css">``.
4. Abrimos el archivos Javascrtip llamado main.js y vemos el mismo código que teníamos dentro de ``<script type="text/javascript" src="static/template/themes/admin/layout.js"></script>``.

~~~html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="style.css">
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

    Añadir acá pantallaso.

Vale la pena aclarar que la intención de estos ejemplos no es que entiendas el código que estamos utilizando, ese será tema de las siguiente secciones. Pero si es que haz entendido mejor cómo es que los archivos HTML, CSS y Javascript interactúan, entonces estás listo para empezar a aprender a desarrollar con estos lenguajes.


## Ejercicios

Pero antes de continuar, reforcemos lo que hemos aprendido en esta primera sección con unos cuántos ejercicios muy simples.


## Cuestionario

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

Pero, Si abres este archivo con Google Chrome verás lo siguiente:

~~~iframe
Título
Párrafo: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum sequi optio ullam ad nihil dolores eum, officiis assumenda delectus ea.
![HackSpace Perú](http://puu.sh/e0BO7/f44d5bf1d6.png>)
<button type="button">¡Hazme clic!</button>
~~~

Como verás, este es un archivo de HTML simplificado. Ahora seguiremos con el segundo ejemplo.

#### Ejemplo 2

A

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
        <script>
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


## Ejercicios



## Cuestionario

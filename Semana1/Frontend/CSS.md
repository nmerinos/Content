# CSS

[TOC]

## Como agregar CSS al HTML

  1. Agregar un link a un archivo de CSS externo

  ```html
  <link rel="stylesheet" type="text/css" href="estilos.css" />
  ```

  2. Agregar CSS directamente en la etiqueta `<style>` del HTML

  ```html
  <style type="text/css">
    p {
      color:green
    }
  </style>
  ```
  3. Agregar CSS en las etiquetas del HTML

  ```html
  <p style="color:white;background:green;">Texto blanco fondo verde</p>
  ```
  4. Importando un archivo CSS

  ```html
    @import "estilos.css"
  ```

## Estructura basica

  ```css
    selector {
      propiedad1:valor;
      propiedad2:valor;
      propiedad3:valor;
    }
  ```
  * El selector identifica los elementos del HTML a los cuales se aplicara la regla.
  * Los pares propiedad-valor dentro de las llaves estan separados por puntos y coma; y las propiedades estan separadas de su respectivo valor por dos puntos.
  * Las propiedades definen lo que quieres modificar a los elementos seleccionados, por ejemplo, cambiar la posicion,el color, los margenes, el color de fondo, entre otros.
  * Los valores son los valores que quieres cambiar a cada propiedad de los elementos seleccionados. Los valores dependen de la propiedad, por ejemplo las propiedades que afectan al color pueden tomar nombres de color (en ingles) como red,gray,yellow, codigo del color en hexadecimal, como #009900 o valores RGB, como rgb(34,142,28). Las propiedades que afectan el ancho, la altura, la posicion, el margen, etc pueden tomar valores medidos en pixel, ems, porcentaje, centimetros o otras unidades.

  **Ejemplo**
  ```css
    h1 {
      color: red;
      font-family: Arial;
      font-size: 30px;
    }
  ```
  El selector h1 selecciona a todos los elementos `<h1>` en el documento HTML que usa este CSS para aplicar esta regla, a menos que existan selectores mas especificos cuyas reglas sobreescribiran a esta.
  Las propiedades en esta regla son el color del texto, la fuente del texto, y el tamano de la fuente
  Los valores de estas propiedades son rojo, Arial, y 30 pixeles respectivamente.

## Selectores

  Existen muchos tipos de selectores los tres mas usados que vas a encontrar son:

  1. Tag name: Selecciona los elementos del HTML de la respectiva etiqueta

  ```css
  p {
   color: red;
  }
  ```

  2. Selector por clase: Selecciona los elementos del HTML que tienen un atributo `class` con el valor especificado

  ```html
  <h1 class="ejemplo">Texto de ejemplo</p>
  <div class="ejemplo">Contenido</div>
  ```
  ```css
   .ejemplo{
     color: blue;
   }
  ```

  3. Selector por id: Selecciona los elementos del HTML que tienen un atributo *id* con el valor especificado

  ```html
  <h1 id="myid">Texto de ejemplo</p>
  <div id="myid">Contenido</div>
  ```
  ```css
   #myid{
     color: blue;
   }
  ```
  > Puedes unir varios selectores para definir reglas mas especificas, por ejemplo:
  > ```css
    p.importante : {
     color: red;
     font-size: 30px;
    }
    ```
  > En el ejemplo anterior selecciona todos los elementos del html dentro de la etiqueta `<p>` cuyo valor *class* es _importante_

## Agrupando selectores

  Tambien es posible agrupar selectores que quieres que tengan el mismo estilo, por ejemplo en vez de escribir:

  ```css
  h1 {
    color: blue;
    font-size: 20px;
  }
  h2 {
    color: blue;
    font-size: 20px;
  }
  ```
  Donde los selectores *h1* y *h2* tienen el mismo estilo es posible agrupar los selectores separados por una coma:

 ```css
 h1,h2 {
   color: blue;
   font-size: 20px;
 }
 ```

## Selectores Universales

En CSS existe el selector universal `*` el cual selecciona todos los elementos de un tipo el cual no es muy usado ya que raras veces se desea que todos los elementos tengan el mismo estilo.


```css
* {
 margin: 0;
 padding: 0;
}
```

## Selectores descendentes

En algunas ocasiones se requiere dar estilos diferentes a elementos de un solo tipo pero que se diferencia por el elemento que los contiene.
Un elemento A es descendiente de otro elemento B si el elemento A esta incluido en el elemento B.

```html
<h1>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 <p>Praesent ac risus sed magna ornare pulvinar. </p>
</h1>
<p>Integer ex tortor, eleifend non porttitor eget, dictum eu elit.</p>
```

```css
h1 p {
 color: red;
}
```

En el ejemplo anterior existen dos etiquetas `<p>` pero se aplica solamente a la primera ya que esta esta contenida dentro de la etiqueta `h1` como se especifica en el selector del CSS.
Hay que resaltar que no necesariamente el elemento descendiente tiene que estar contenido inmediatamente dentro del elemento externo, es decir el elemento descendiente puede estar contenido dentro de otro elemento que a su vez este contenido en el elemento mas externo.


```html
<h1>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 <p>Praesent ac risus sed <strong>magna</strong> ornare pulvinar. </p>
</h1>
<strong>Integer ex tortor, eleifend non porttitor eget, dictum eu elit.</strong>
```

```css
h1 span {
 color: red;
}
```
En el ejemplo anterior la etiqueta `<strong>` que deseamos aplicar el estilo esta contenida dentro de una etiqueta `<p>` la cual a su vez esta contenida en una etiqueta `h1` por lo cual cumple la regla del selector del CSS.

En general la estructura para selecionar elementos descendientes es los selectores de cada elemento individual comenzando del mas externo hasta el mas interno separadas por un espacio:

```css
selector1 selector2 selector3 {
 ...
}
```


## Ejercicios

###Ejercicio 1
Agregar una hoja de estilos externa al documento HTLM el cual aplica los siguientes estilos a  todos los parrafos `<p>` del documento:
- Color: Azul
- Tamaño de fuente: 12px
- Tipo de fuente: Times New Roman

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Document</title>
  </head>
  <body>
    <h1>Bienvenido!</h1>
    <a href="http://www.hackspace.la">Visita la pagina</a>
    <p> Dolor sit amet, consectetur adipiscing elit. Praesent et tortor id turpis vestibulum vestibulum et quis magna. Praesent ac risus sed magna ornare pulvinar. Duis et aliquet nunc. In elit diam, elementum eu dictum quis, pharetra nec justo. Curabitur hendrerit fermentum nisl. Cras convallis gravida mollis. Nunc et feugiat sapien, eu ullamcorper lorem. </p>
    <p> Mauris faucibus tristique posuere. Nam vehicula quam at venenatis imperdiet. Vivamus mattis tortor eget est mollis tempor. Quisque nec eros libero. Suspendisse ultrices facilisis mi, eget bibendum libero auctor in. </p>
</html>
```

###Ejercicio 2
Modificar el CSS para agregar los siguientes estilos al documento HTML.
- El color del texto de todos los elementos del documento es verde.
- Los elementos con id *HS* tienen un color de fondo negro
- Los elementos con clase *CoreUp* tienen borde solido de 2px y color de fondo con codigo rgb **rgb(224,224,224) **

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Ejercicio 2</title>
    <style>
    body {background-color:lightgrey}
    h1   {color:blue}
    p    {color:green}
    </style>
  </head>
  <body>
    <h1>Bienvenido!</h1>
    <a href="http://www.hackspace.la">CoreUpgrade 2015</a>
    <p id="CoreUp">Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, </p>
    <div>
     <h1 class="CoreUp"> A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.Li Europan lingues es membres del sam familie </h1>
     <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth<p>
    </div>
    <p id="HS">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
  </body>
</html>
```


###Ejercicio 3


## Cuestionario

1. ¿Cual es la etiqueta de HTML para agregar un archivo externo CSS?

- <script>
- <css>
- <style>

2. ¿Cual es el atributo HTML para agregar estilo en una etiqueta?

- font
- style
- css

3. ¿Cual es la manera correcta de agregar comentarios en CSS?

- /*  Comentario CSS */
- // Comentario CSS //
- // Comentario CSS

4. ¿Que propiedad es usada para cambiar el color de fondo?

- color
- background-color
- font-color

5. ¿Que propiedad se usa para cambiar la fuente de un texto ?

- font-face
- font-family
- font-style

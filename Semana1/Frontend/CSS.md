# CSS

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

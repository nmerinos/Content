# CSS

1. Como agregar CSS al HTML
  1. Agregar un link a un archivo de CSS externo

  ```html
  <link rel="stylesheet" type="text/css" href="estilos.css" />
  ```

  2. Agregar CSS directamente en el HTML
  ```html
  <style type="text/css">
    p {
      color:green
    }
  </style>
  ```
  3. Agregar CSS en los tags del HTML
  ```html
  <p style="color:white;background:green;">Texto blanco fondo verde</h2>
  ```
  4. Importando un archivo CSS

  ```html
    @import "estilos.css"
  ```


2. Estructura basica

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

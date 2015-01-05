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

# Bootstrap vs. Foundation: Conceptos y comparación

**Don’t repeat yourself (DRY)**, es un principio de desarrollo de software, formulado por Andy Hunt y Dave Thomas en su libro "The Pragmatic Programmer", dirigido a reducir la repetición de información de todo tipo. Este principio también es aplicable al diseño web, ahí surgen frameworks que son un conjunto de herramientas y recursos  que facilitan al diseñador web en el desarrollo de componente de interfaz.

Ahora los más populares front-end frameworks son Twitter Boostrap y Foundation, por lo tanto surge la pregunta ¿Cuál debería utilizar para mis proyectos? ¿Cuál es más eficiente?

Antes de que entrar en detalles es bueno saber que ambos tienen sus pros y contras. Tendrás que tomar una decisión sobre cual utilizar dependiendo de las necesidades de tu proyecto.

Entremos al asunto.

## The Grid System

La parte más importante de un front-end framework es su grid system. Con un grid system, diseñadores son capaces de prototipar varias distribuciones y luego hacer los ajustes necesarios como mejor le parezca. Foundation se hizo popular por su grid system, siendo el primero de los dos frameworks no solo en ser responsive sino también por profundizar el enfoque de mobile-first.

Después de un tiempo, Bootstrap se puso al día y cerro esa ventaja. Esto significa que cualquier ventaja que tenia Foundation con su grid system ahora es inexistente.

Sin embargo, existe un par de caracteristicas en el grid system de Foundation que vale la pena mencionar. El [block grid][1] permite dividir uniformemente el contenido de listas no ordenadas sin importar el tamaño de pantalla. Foundation tambien tiene la capacidad para colapsar columnas y remover gutters con la clase `.collapse`, o centrar columnas con la funcionalidad [centered columns][2].

Ahora, ambos viene con un grid system por defecto que es totalmente personalizable con los pre-procesadores de css Less y Sass en caso de Bootstrap y solo Sass en caso de Foundation. El grid system de Bootstrap funciona en base a puntos de cambio según el ancho de pantalla lo que significa que esta hecho para reordenarse según intervalos de pantalla. Sin embargo si el diseñador usa la clase `.row-fluid` el ancho de los elementos se basan en porcentajes (al igual que Foundation).

## Unidades de dimensionamiento

Para el uso de tipografías, anchos y casi todo lo demás,  Bootstrap usa pixeles y Foundation usa Rems. Hay claras [diferencias entre ambos][3], pero son capaces de producir el mismo resultado. En otras palabras es una decisión personal.

Mientras que el pixel puede hacer sentir más familiar a los diseñadores web y artistas graficos sin mucha experiencia, rems ayuda al diseñador a pensar más en proporciones. Piensa en pixeles como un sistema de unidades absolutas y en rema como un sistema de unidades relativa. Es algo para conciderar, especialmente en estos dias que el responsive design tiene mucha importancia.

No te castigues demasiado entre el uso de uno de los dos. Todo se reduce a la preferencia personal y al nivel de confort.

## Funcionalidad y Componentes

Para alguien que acaba de familiarizarse con ambos frameworks, puede parecer que ambos tienen la misma colección de características predefinidas. Como siempre, las apariencias pueden ser engañosas, razón por la cual en realidad existen pequeñas pero importantes diferencias que debe conocer.

Foundation viene con una librería de validación de formulario HTML5 llamado [Abide][4]. Esto no quiere decir que Bootstrap no podría tener una validación de formularios, pero para muchos, la solucion pre hecha de Foundation es una agradable ventaja. [Interchange][5] es otra función única de Foundation, que es una solución robusta para imagenes responsive. Ademas de estas dos opciones, hay otras características útiles como [right-to-left support][6], [pricing tables][7], [tours][8] y [off-canvas navigation][9].

A opinión personal, Bootstrap no esta lleno de características completas pero si es más adecuado para una construcción rápida de una pagina web de una sola vez y agregarle un tema. Bootstrap también incluye responsive embeds, lo que hace más fácil agregar elementos como `<iframe>`, `<embed>` y  `<object>` que se requiere que sean sensibles a distintos tamaño de pantalla.

## Personalización

La capacidad de personalizar el aspecto visual de cada frameworks se insinúa en sus propios nombres.

Bootstrap pretende darte todo lo que necesitas para obtener un sitio web en marca rápidamente, mientras que Foundation tiende a proporcionar mayores opciones de personalización lo que puede hacerte tardar un poco en poner en marcha tu sitio web.

Bootstrap tiende a hacer que los sitios sean fácilmente reconocibles que se hicieron en este framework. Es solo después de añadir un tema o cavar profundamente en la personalización de estilos que la apariencia por defecto comienza desvanecer. La apariencia por defecto de Foundation es más cercano a la predeterminada de los navegadores lo que hace más fácil crear una singular estética.

También vale la pena señalar que bootstrap tiene una gran variedad de themes disponibles. Los themes de Foundation también están disponibles, pero no son tan abundantes. Esto es importante, ya que la variedad es uno de los factores más importantes acerca de themes.

##Mobile

Debido al diseño responsive y a la creciente popularidad de las aplicaciones móviles, seria una locura no diseñar cualquier sitio con un enfoque mobile en mente. Es interesante señalar como cada front-end framework maneja este tema.

El enfoque de Foundation es animar a los diseñadores a hacer frente a la cuestion mobile con su regla facil de seguir:

> Todo lo que no este bajo un media query va a ser considerado mobile.

Ahora, diseñadores que quieran algo que se vea diferente en un escritorio o tablet deberán especificarlo en un media query.

Bootstrap aborda la cuestión mobile desde un enfoque totalmente distinto. Los diseñadores que quieran diseñar para mobile deberan especificarlo en un media query. Si no existen media query, los usuarios tendrán que conformarse con ver la versión de escritorio.

El diseño de elementos con la mentalidad de escritorio primero implica que tendras que pensar un poco más dificil en como organizar con exito todos sus elementos en una pantalla mobile, pero es totalmente factible. Por otro lado, el enfoque de Foundation permite a los diseñadores centrarse en que contenido es relevante e interesante para el usuario, mientras que las consideraciones de espacio son secundarias.

#Comunidad y Soporte

Si hay una categoría que favorece a uno de los frameworks tendría que se la comunidad, donde Bootstrap tiene la ventaja. Bootstrap tiene un gran numero de seguidores entre diseñadores y programadores lo cual implica que es más fácil conseguir apoyo si llegas a tener problemas.

#**Veredicto**

Cuando todo está dicho y hecho, la cuestión no es tan simple. Como ya hemos hablado, hay pros y los contras de cada marco de front-end frameworks, y si los diseñadores quieren elegir uno sobre el otro depende en gran medida de su nivel de preferencia y comodidad personal.

Si te gusta tener una gran seleccion de themes, entonces Bootstrap es el camino a seguir. Si el diseño para movil es primero entonces tu elección es Foundation.

En cualquier caso, pregúntate que funcionalidades de cada framework son más útiles para tu proyecto.

No se olviden en participar en nuestro foro:
http://cm.hackspace.la/community

Seguir

[1]: http://foundation.zurb.com/docs/components/block_grid.html
[2]: http://foundation.zurb.com/docs/components/grid.html#centered-columns
[3]: http://designshack.net/articles/typography/whats-the-deal-with-em-and-rem/
[4]: http://foundation.zurb.com/docs/components/abide.html
[5]: http://foundation.zurb.com/docs/components/interchange.html
[6]: http://foundation.zurb.com/docs/components/rtl.html
[7]: http://foundation.zurb.com/docs/components/pricing_tables.html
[8]: http://foundation.zurb.com/docs/components/joyride.html
[9]: http://foundation.zurb.com/docs/components/offcanvas.html
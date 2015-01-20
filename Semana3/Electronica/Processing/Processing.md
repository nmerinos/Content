#Processing

Probablemente te estés preguntando qué es processing, o para que sirve; probablemente no, pero en cualquiera de los casos google siempre está dispuestos a resolver nuestras dudas.

Esta es la página oficial de processing: <https://processing.org/>

Dale click a la sección de Descargas: <https://processing.org/download/>

Si puedes, haz una pequeña donación, a los creadores les encantará. Si no, no hay problema (... #programoPorComida).

![Sin titulo](pictures/lol.JPG)

y clic en Download!

Y listo... tenemos Processing. 

Ahora, ¿para qué nos sirve? Excelente pregunta!! Con las librerías adecuadas y un par de trucos, Processing es capaz de hacer desde reconocimiento de imágenes hasta tweetear por nosotros. Pero lo más interesante es que puede comunicarse con Arduino por el puerto Serial, y esto nos da una gama terriblemente amplia de usos para el Arduino. 

Dejando el floro de lado, empecemos con processing.

Processing tiene 2 funciones principales, como a Arduino:  
**void setup**: Se ejecuta una sola vez.  
**void draw**: Se ejecuta continuamente.  
¿Te suena familiar?


####Funciones básicas en processing:

Puesto que Processing cuenta con una excelente referencia, nos evitaremos la descripción detallada de todas sus funciones, pero les dejaré una lista de funciones que les resultarán realmente útiles:

**size()** nos permite crear una pantalla o lienzo.  
*ejemplo* size(500,500); // crea una pantalla de 500 píxeles por 500 píxeles

**background()** nos permite darle fondo de un color a la pantalla generada por **size()**

Ahora empezemos a jugar. Para este ejemplo variaremos el color del fondo desde un potenciómetro.

##Ejemplos

Para esto tenemos que programar primero el Arduino, y luego recibir los datos que este envía en Processing.

El programa que debe ser grabado en el arduino es el siguiente:


>int color = 0; // La variable que vamos a leer y transformar  
int datos = 0; // La variable que vamos a enviar  
void setup() //Solo se ejecuta una vez  
{  
  Serial.begin(9600); // La velocidad de comunicación 9600 baudios  
}  
void loop() //Se ejecuta continuamente  
{   
  color= analogRead(A0); //Lectura del potenciómetro  
  datos= map(pos, 0, 1023, 0, 255); // Escalamiento  
  Serial.write(datos); // Envío del dato.   
  delay(10); // Espera 10 milisegundos entre dato y dato para no sobrecargar el puerto  
}   


y el código para Processing es el siguiente:

>import processing.serial.*; // Importamos la librería Serial  
Serial myPort;        // Creamos un objeto llamado myPort  
int datoLeido;       // creamos la variable que vamos a recibir  
void setup()  // Se ejecuta solo una vez  
{  
  myPort = new Serial(this, Serial.list()[0], 9600); //inicializamos la comunicación serial  
  size(1000, 600); //Creamos la pantalla  
}  
void draw()  // Se ejecuta repetidamente  
{  
   background(datoLeido);    // Damos color al fondo según el valor del dato leído  
}  
void serialEvent(Serial myPort) //Se ejecuta cada vez que hay un nuevo dato en el puerto serial  
{  
  datoLeido = myPort.read(); // Almacenamos el dato leído  
}  



Recuerden ejecutar primero el código de Arduino y luego el de Processing. Las conexiones al arduino son las mismas que en el ejemplo de conexión analógica.

##Ejercicios

Ahora, puedes modificar algo visual desde el arduino. Imagina las posibilidades.... listo? ahora que dejen de ser posibilidades.  Investiga sobre Processing y juega con la comunicación serial. Tal vez variar la posición de una imagen (investiga Pimage)... o el tamaño de algún objeto. Esos son los ejercicios. Intenta hacer algo interactuando entre Arduino y Processing. Tienes pulsadores y potenciómetros para apoyarte, y los conocimientos previos de la semana 1 y 2. 
Si tienen dudas, nos vemos en el foro. :)





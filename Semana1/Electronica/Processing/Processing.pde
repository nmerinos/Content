import processing.serial.*; // Importamos la librería Serial
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


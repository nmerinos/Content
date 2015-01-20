int color = 0; // La variable que vamos a leer y transformar
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
}


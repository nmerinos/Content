int dato;
void setup()
{
Serial.begin(9600);
pinMode(13, OUTPUT);
}
void loop()
{
dato = analogRead(A0);
if(dato>500)
digitalWrite(13, HIGH);
else
digitalWrite(13, LOW);
}

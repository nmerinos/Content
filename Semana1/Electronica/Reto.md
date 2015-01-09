Ya has aprendido las configuraciones básicas de entradas. Es momento de ponerlas en práctica. Puesto que la programación en Arduino será el tema de la siguiente semana, de momento no nos preocuparemos en entenderlo, solo tenemos que grabarlo en el Arduino (aunque si tienes curiosidad, no veo porqué no puedas investigar más ;)

El código a copiar es el siguiente:

>int dato;  
>void setup()  
>{  
>Serial.begin(9600);   
>pinMode(13, OUTPUT);  
>}  
>void loop()  
>{  
>dato = analogRead(A0);    
> if(dato>500)  
> digitalWrite(13, HIGH);  
>else  
>digitalWrite(13, LOW);  
>}

y las conexiones son las mismas que las realizadas en la entrada analógica, conectada al pin A0 del Arduino.
Pdta: observa la placa Arduino al mover el potenciómetro con mucha atención... y verás la luz.

¡Envía una foto de tu circuito y coméntanos el resultado!
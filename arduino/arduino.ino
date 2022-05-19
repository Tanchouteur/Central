//déclaration des pins
int LED_BLUE = A0;
int LED_RED = A1;
int LED_GREEN = A2;

int LED_BLUE2 = 9;
int LED_RED2 = 10;
int LED_GREEN2 = 11;

int redVal=0;
int blueVal=0;
int greenVal=0;

int redVal2=0;
int blueVal2=0;
int greenVal2=0;

int couleur;

int NAS = 6;
int SERVEUR = 12;
int PC = A3;

int TV = 4;
int LAMPE_BUREAU = 13;
int VCC_RELAIS = 2;

String command;


void setup() {

  Serial.begin(115200);

  //Ruban LED
  pinMode(LED_BLUE, OUTPUT);
  pinMode(LED_RED, OUTPUT);
  pinMode(LED_GREEN, OUTPUT);

  pinMode(LED_BLUE2, OUTPUT);
  pinMode(LED_RED2, OUTPUT);
  pinMode(LED_GREEN2, OUTPUT);

  //Relais Serveur
  pinMode(NAS, OUTPUT);
  pinMode(SERVEUR, OUTPUT);
  pinMode(PC, OUTPUT);

  //RELAIS Tableau
  pinMode(LAMPE_BUREAU, OUTPUT);
  pinMode(TV, OUTPUT);
  pinMode(VCC_RELAIS, OUTPUT);


      analogWrite(LED_BLUE, blueVal);
      analogWrite(LED_GREEN, greenVal);
      
      for (int t=0; t<255; t++)
      {
        redVal = t;
        analogWrite(LED_RED, redVal);
        delay(4);
      }
      
      
      analogWrite(LED_RED2, redVal2);
      analogWrite(LED_GREEN2, greenVal2);

            for (int t=10; t<255; t++)
      {
        blueVal2 = t;
        analogWrite(LED_BLUE2, blueVal2);
        delay(5);
      }
      

  
}

void loop() {

  command = Serial.readString();

    if(command.equals("run")){
      //TV
      
         digitalWrite(VCC_RELAIS, HIGH);
         digitalWrite(TV, HIGH);
         delay(50);
         digitalWrite(TV, LOW);
         digitalWrite(VCC_RELAIS, LOW);
         
//lamp
            
        digitalWrite(VCC_RELAIS, HIGH);
         digitalWrite(LAMPE_BUREAU, HIGH);
         delay(50);
         digitalWrite(LAMPE_BUREAU, LOW);
         digitalWrite(VCC_RELAIS, LOW);

//nas
          digitalWrite(NAS, HIGH);
          delay(300);
          digitalWrite(NAS, LOW);

//serveur
          digitalWrite(SERVEUR, HIGH);
          delay(300);
          digitalWrite(SERVEUR, LOW);
        
            
            
     }else if(command.equals("stop")){

//tv
        digitalWrite(VCC_RELAIS, HIGH);
         digitalWrite(TV, HIGH);
         delay(50);
         digitalWrite(TV, LOW);
         digitalWrite(VCC_RELAIS, LOW);


  //lamp
        digitalWrite(VCC_RELAIS, HIGH);
         digitalWrite(LAMPE_BUREAU, HIGH);
         delay(50);
         digitalWrite(LAMPE_BUREAU, LOW);
         digitalWrite(VCC_RELAIS, LOW);

//nas
          digitalWrite(NAS, HIGH);
          delay(5000);
          digitalWrite(NAS, LOW);
  
//serveur
          digitalWrite(SERVEUR, HIGH);
          delay(300);
          digitalWrite(SERVEUR, LOW);

        }
     

     //Gestion du télérupteur de la lampe
     if(command.equals("runlamp")){
     
        digitalWrite(VCC_RELAIS, HIGH);
         digitalWrite(LAMPE_BUREAU, HIGH);
         delay(50);
         digitalWrite(LAMPE_BUREAU, LOW);
         digitalWrite(VCC_RELAIS, LOW);

     }else if(command.equals("stoplamp")){
     
        digitalWrite(VCC_RELAIS, HIGH);
         digitalWrite(LAMPE_BUREAU, HIGH);
         delay(50);
         digitalWrite(LAMPE_BUREAU, LOW);
         digitalWrite(VCC_RELAIS, LOW);
        
      
     }

     //Gestion du télérupteur de la TV
     if(command.equals("runtv")){
     
        digitalWrite(VCC_RELAIS, HIGH);
         digitalWrite(TV, HIGH);
         delay(50);
         digitalWrite(TV, LOW);
         digitalWrite(VCC_RELAIS, LOW);

     }else if(command.equals("stoptv")){

        digitalWrite(VCC_RELAIS, HIGH);
         digitalWrite(TV, HIGH);
         delay(50);
         digitalWrite(TV, LOW);
         digitalWrite(VCC_RELAIS, LOW);

     }

      //Gestion du nas
      if(command.equals("runnas")){

          digitalWrite(NAS, HIGH);
          delay(300);
          digitalWrite(NAS, LOW);
  
      }else if(command.equals("stopnas")){

          digitalWrite(NAS, HIGH);
          delay(300);
          digitalWrite(NAS, LOW);
  
      }

      //Gestion du serveur sous le bureau
      if(command.equals("runserveur")){
 
          digitalWrite(SERVEUR, HIGH);
          delay(300);
          digitalWrite(SERVEUR, LOW);

      }else if(command.equals("stopserveur")){

          digitalWrite(SERVEUR, HIGH);
          delay(5000);
          digitalWrite(SERVEUR, LOW);
  
      }

      //PC
      if(command.equals("runpc")){
 
          digitalWrite(PC, HIGH);
          delay(300);
          digitalWrite(PC, LOW);

      }else if(command.equals("stoppc")){

          digitalWrite(PC, HIGH);
          delay(300);
          digitalWrite(PC, LOW);
  
      }
       
      //LEDS
    if(command.equals("runleds")){
      digitalWrite(LED_BLUE, LOW);
      digitalWrite(LED_RED, HIGH);
      digitalWrite(LED_GREEN, LOW);

      digitalWrite(LED_BLUE2, HIGH);
      digitalWrite(LED_RED2, LOW);
      digitalWrite(LED_GREEN2, LOW);
          

      }else if(command.equals("stopleds")){

      digitalWrite(LED_BLUE, LOW);
      digitalWrite(LED_RED, LOW);
      digitalWrite(LED_GREEN, LOW);
      
      digitalWrite(LED_BLUE2, LOW);
      digitalWrite(LED_RED2, LOW);
      digitalWrite(LED_GREEN2, LOW);
          
  
      }

     //led1 (simulateur)
    if(command.equals("runled1")){
      digitalWrite(LED_BLUE, LOW);
      digitalWrite(LED_RED, HIGH);
      digitalWrite(LED_GREEN, LOW);

      }else if(command.equals("stopled1")){

      digitalWrite(LED_BLUE, LOW);
      digitalWrite(LED_RED, LOW);
      digitalWrite(LED_GREEN, LOW);
          
      }

         //led1 rouge (simulateur)
    if(command.equals("runled1rouge")){
      digitalWrite(LED_BLUE, LOW);
      digitalWrite(LED_RED, HIGH);
      digitalWrite(LED_GREEN, LOW);

      }else if(command.equals("runled1vert")){

      digitalWrite(LED_BLUE, LOW);
      digitalWrite(LED_RED, LOW);
      digitalWrite(LED_GREEN, HIGH);
          
      }else if(command.equals("runled1jaune")){

      digitalWrite(LED_BLUE, LOW);
      digitalWrite(LED_RED, HIGH);
      digitalWrite(LED_GREEN, HIGH);
          
      }

      
     //led2 (bureau)
    if(command.equals("runled2noir")){

      for (int t=0; t<255; t++){
          delay(3);
        if(blueVal2>0){
          blueVal2--;
        }
        if(redVal2>0){
          redVal2--;
        }
        if(greenVal2>0){
          greenVal2--;
        }
          analogWrite(LED_BLUE2, blueVal2);analogWrite(LED_GREEN2, greenVal2);analogWrite(LED_RED2, redVal2);
        }

        
          
      }

               //led2 rouge (bureau)
    if(command.equals("runled2rouge")){
      
      for (int t=0; t<255; t++){
        delay(3);
          if (blueVal2>0){
            blueVal2--;
            analogWrite(LED_BLUE2, blueVal2);
          }
          if(redVal2<255){
            redVal2++;
            analogWrite(LED_RED2, redVal2);
          }
          if(greenVal2>0){

            greenVal2--;
            analogWrite(LED_GREEN2, greenVal2);
          }
 
        }

      }
      
      if(command.equals("runled2bleu")){
        

        for (int t=0; t<255; t++){
          delay(3);
          if (blueVal2<255){
            blueVal2++;
            analogWrite(LED_BLUE2, blueVal2);
          }
          if(redVal2>0){
            redVal2--;
            analogWrite(LED_RED2, redVal2);
          }
          if(greenVal2>0){

            greenVal2--;
            analogWrite(LED_GREEN2, greenVal2);
          }
 
        }
      }
      
      if(command.equals("runled2vert")){

        for (int t=0; t<255; t++){
          delay(3);
          if(blueVal2>1){
          blueVal2--;
        }
        if(redVal2>1){
          redVal2--;
        }
        if(greenVal2<255){
          greenVal2++;
        }
          analogWrite(LED_BLUE2, blueVal2);analogWrite(LED_GREEN2, greenVal2);analogWrite(LED_RED2, redVal2);
        }
          
      }
      
      if(command.equals("runled2jaune")){

        for (int t=0; t<255; t++){
          delay(3);
       if(blueVal2>1){
          blueVal2--;
        }
        if(redVal2<255){
          redVal2++;
        }
        if(greenVal2<255){
          greenVal2++;
        }
          analogWrite(LED_BLUE2, blueVal2);analogWrite(LED_GREEN2, greenVal2);analogWrite(LED_RED2, redVal2);
        }

        
          
      }
      if(command.equals("runled2turquoise")){

        for (int t=0; t<255; t++){
          delay(3);
          
       if(blueVal2<255){
          blueVal2++;
        }
        if(redVal2>1){
          redVal2--;
        }
        if(greenVal2<255){
          greenVal2++;
        }
          analogWrite(LED_BLUE2, blueVal2);analogWrite(LED_GREEN2, greenVal2);analogWrite(LED_RED2, redVal2);
        }          
      }
      
      if(command.equals("runled2rose")){

        for (int t=0; t<255; t++){
          delay(3);
          
       if(blueVal2<255){
          blueVal2++;
        }
        if(redVal2<255){
          redVal2++;
        }
        if(greenVal2>1){
          greenVal2--;
        }
          analogWrite(LED_BLUE2, blueVal2);analogWrite(LED_GREEN2, greenVal2);analogWrite(LED_RED2, redVal2);
        }   

        
      }
      
      if(command.equals("runled2blanc")){

        for (int t=0; t<255; t++){
          delay(3);
          
       if(blueVal2<255){
          blueVal2++;
        }
        if(redVal2<255){
          redVal2++;
        }
        if(greenVal2<255){
          greenVal2++;
        }
          analogWrite(LED_BLUE2, blueVal2);analogWrite(LED_GREEN2, greenVal2);analogWrite(LED_RED2, redVal2);
        }

      }



      /*Serial.print("couleur : ");
      Serial.println(couleur);
      
      Serial.print("Bleu");
      Serial.println(blueVal2);

      Serial.print("vert");
      Serial.println(greenVal2);

      Serial.print("rouge");
      Serial.println(redVal2);
      Serial.println();*/
      
      analogWrite(LED_BLUE, blueVal);
      analogWrite(LED_RED, redVal);
      analogWrite(LED_GREEN, greenVal);
      
      analogWrite(LED_BLUE2, blueVal2);
      analogWrite(LED_RED2, redVal2);
      analogWrite(LED_GREEN2, greenVal2);
}

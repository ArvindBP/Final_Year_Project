#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
 

void setup() {
 
  Serial.begin(115200);                                  //Serial connection
  WiFi.begin("SSID", "Password");   //WiFi connection
 
  while (WiFi.status() != WL_CONNECTED) {  //Wait for the WiFI connection completion
 
    delay(500);
    Serial.println("Waiting for connection");
}
 Serial.println("");
    Serial.println("WiFi connected");
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());

    

}
 
void loop() {
 
 if(WiFi.status()== WL_CONNECTED){   //Check WiFi connection status
 
   HTTPClient http; //Declare object of class HTTPClient
   char* URL = "192.168.225.220";
   char  aux_str[50];
   char  str[400];
   String frame; 
   char  frame1[300];
    sprintf(aux_str, "http://%s/demo_sim908.php?",URL);
    //sprintf(frame, "visor=false&latitude=%ld&longitude=%ld&altitude=12&time=%lu&satellites=12&speedOTG=%lu&course=%lu",lat,lon,time,speed,course);
    
    if(Serial.available()){
      frame=Serial.readString();
      }
     frame.toCharArray(frame1,300);
     sprintf(str,"%s%s",aux_str,frame1);             
// 
   http.begin(str);      //Specify request destination
   http.addHeader("Content-Type", "text/plain");  //Specify content-type header
 
   int httpCode =http.GET(); 
   String payload = http.getString();                  //Get the response payload
 
   Serial.println(httpCode);   //Print HTTP return code
   Serial.println(payload);    //Print request response payload
//
   http.end();  //Close connection
 
 }else{
 
    Serial.println("Error in WiFi connection");   
 
 }
 
  delay(30000);  //Send a request every 30 seconds
 
}

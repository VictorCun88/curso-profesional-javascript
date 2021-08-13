// Condiciones

// if

let edad = 18;

if (edad >=18){
  console.log("Es Mayor de Edad");
}else {
  console.log("Es Menor de Edad");
}

//Multiples sentencias if

// Rangos 

/*
  Primera Infancia (0-5 años)
  Infancia (6 - 11 años)
  Adolescencia (12 - 18 años)
  Juventud (19 - 26 años)
  Adultez (27- 59 años)
  Persona Mayor (60 años o mas) envejecimiento y vejez.
*/

let edad = 18;

if (edad <=5){
  console.log("Primera infancia");
}else if( 6 <= edad >= 11) {
  console.log("Infancia");
}else if (12 <= edad >= 18){
  console.log("Adolecencia");
}else if (19 <= edad >=  26 ){
  console.log("Juventud")
}else if (27 <= edad >=  59){
  console.log("Adultez")
}else {
  console.log("Envejecimiento y Vejez")
}
// Ciclos

// Imprimir numeros del 1 al 10

/* 
  1. Instrucción inicial
  2. Condicion.
  3. Instrucción después de cada iteración
*/

// * * * Ciclo For
for (let i=1; i<=10; i++){
  console.log(i)
}

for (let i=1; i<=10; i++){
  console.log(i)
  if (i == 5){
    break}
} // el programa se detiene en break en este caso en 5

for (let i=1; i<=10;i++){
  console.log(i);
  if (i % 2 != 0){
    continue;
  }
  console.log("Es Par")
} // Detiene la ejecucion donde hay algun numero par y muestra el mensaje "Es Par"

// * * * Ciclo While 
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log(n)
  console.log(x)
}

/*
  Con cada iteración, el bucle incrementa n y agrega ese valor a x. Por lo tanto, x y n toman los siguientes valores:

  Después de la primera pasada: n = 1 y x = 1
  Después de la segunda pasada: n = 2 y x = 3
  Después de la tercera pasada: n = 3 y x = 6
*/

// * * * do While

let i = 0; 

do { i += 1;
   console.log(i); 
} while (i < 5);

// En el siguiente ejemplo, el bucle do itera al menos una vez y se repite hasta que i ya no sea menor que 5.
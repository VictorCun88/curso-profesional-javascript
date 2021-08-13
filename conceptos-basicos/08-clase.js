// * * * Operadores Logico

/*
  && El operaddor AND
  || El operaddor OR
  !  El operador de negacion o NOT
  ?? El operador nullish coalescing // fusián de nulos o unián nulosa

*/

// * * * && El operaddor AND
var a1 =  true && true;     // t && t devuelve true
var a2 =  true && false;    // t && f devuelve false
var a3 = false && true;     // f && t devuelve false
var a4 = false && (3 == 4); // f && f devuelve false
var a5 = 'Cat' && 'Dog';    // t && t devuelve Dog
var a6 = false && 'Cat';    // f && t devuelve false
var a7 = 'Cat' && false;    // t && f devuelve false


// || El operaddor OR
var o1 =  true || true;     // t || t devuelve true
var o2 = false || true;     // f || t devuelve true
var o3 =  true || false;    // t || f devuelve true
var o4 = false || (3 == 4); // f || f devuelve false
var o5 = 'Cat' || 'Dog';    // t || t devuelve Cat
var o6 = false || 'Cat';    // f || t devuelve Cat
var o7 = 'Cat' || false;    // t || f devuelve Cat

// El operador de negacion o NOT
var n1 = !true;  // !t devuelve false
var n2 = !false; // !f devuelve true
var n3 = !'Cat'; // !t devuelve false

// * * * ?? El operador nullish coalescing // fusián de nulos o unián nulosa

// ___ ?? ___

console.log(null ?? "Hola") // Retorna Holla
console.log("" ?? "Hola") // Retorna " "
// Booleano true / false

/*
El valor pasado como primer parámetro se convierte en un valor booleano, si es necesario. Si el valor se omite o es 0, -0, null, false, NaN, undefined, o la cadena vacía (""), el objeto tiene un valor inicial de false. Todos los demás valores, incluido cualquier objeto, un arreglo vacío ([]) o la cadena "false", crean un objeto con un valor inicial de true.

No confundas los valores del Boolean primitivo, true y false con los valores true y false del objeto Boolean.

Cualquier objeto cuyo valor no sea undefined o null, incluido un objeto Boolean cuyo valor es false, se evalúa como true cuando se pasa a una declaración condicional. Por ejemplo, la condición en la siguiente declaración if se evalúa como true:
*/

let x = new Boolean (false)

if (x){
  console.log("Es falso")
}

let notificaciones_activas = true;
let activo = false;

let resultado = Boolean (1);
console.log(resultado)


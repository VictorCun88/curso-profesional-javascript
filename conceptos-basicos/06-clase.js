// Truthy y Falsy

// * * * Truthy 

// En JavaScript, un valor verdadero es un valor que se considera  true/verdadero cuando es evaluado en un contexto Booleano. Todos los valores son verdaderos a menos que se definan como falso (es decir, excepto false, 0, "", null, undefined, y NaN).

// JavaScript usa coerción (en-US) en los contextos Booleanos.

// Ejemplos de valores verdaderos en JavaScript (los cuales se traducirán a verdaderos y por lo tanto ejecutarán el bloque condicional if):

if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity){

}

// * * Falsy

if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if (""){
  
}
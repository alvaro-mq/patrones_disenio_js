// Currying

const suma = a => b => a + b;

const sumaPrimerNumero = suma(1);
const sumaSegundoNumero = sumaPrimerNumero(6);

console.log(sumaSegundoNumero);
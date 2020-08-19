// Patron cadena de responsabilidad

class Suma {
  constructor (v = 0) {
    this.val = v;
  }

  suma (v) {
    this.val += v;
    return this;
  }
}

const valor = new Suma(1);
const sum = valor
  .suma(1)
  .suma(2)
  .suma(3)
  .suma(4);

console.log('------------total----------');
console.log(sum.val);
console.log('---------------------------');
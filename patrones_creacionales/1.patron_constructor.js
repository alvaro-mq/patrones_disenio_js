// Patron constructor

class MiClase {
  constructor (p1) {
    this.propiedad = p1;
    this.metodo = () => {
      // soy un metodo
    }
  }
}

const instancia = new MiClase(4);
console.log(instancia);
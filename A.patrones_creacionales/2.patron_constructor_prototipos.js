// Patron constructor con prototipos


/* class MiClase {
  constructor (p1) {
    this.propiedad = p1;
  }
  metodo () {
    // soy un metodo de prototipo
  }
}

const instancia = new MiClase(4);
console.log(instancia); */

// Ejemplo practivo de patron constructor con prototipo
Object.prototype.log = function () {
  console.log(this);
}

const x = { a: 1 };

x.log();

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    try {
      return this.replace(/^\s+|\s+$/g, '');
    } catch (error) {
      return this;
    }
  }
}

const y = '          un ejemplo   '.trim();

y.log();

// Composicion sobre herencia

const saludar = nombre => console.log(`Hola! soy ${nombre}`);

const despedir = () => console.log('Adios!!!');

const dormir = () => console.log('Zzz...');

class Persona {
  constructor () {
    this.nombre = 'Alvaro';
  }

  saludar () {
    saludar(this.nombre);
  }

  despedir () {
    despedir();
  }

  dormir () {
    dormir();
  }
}

class Robot {
  constructor () {
    this.nombre = 'Wall-e';
  }

  saludar () {
    saludar(this.nombre);
  }

  despedir () {
    despedir();
  }
}
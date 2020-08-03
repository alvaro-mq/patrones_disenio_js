// Mixins

let mixin = {
  saludar () {
    console.log(`Hola ${this.nombre}`);
  },
  despedir () {
    console.log(`Chao ${this.nombre}`);
  }
};

class Usuario {
  constructor (nombre) {
    this.nombre = nombre;
  }
}

Object.assign(Usuario.prototype, mixin);

const usuario = new Usuario('alvaro');
usuario.saludar();
usuario.despedir();
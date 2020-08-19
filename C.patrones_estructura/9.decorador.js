// Decorador

class Macbook {
  precio () {
    return 1000;
  }
}

const memoria = mac => {
  const temp = mac.precio();
  mac.precio = function () {
    return temp + 100;
  }
}

const macbook = new Macbook();

memoria(macbook);

console.log(macbook.precio());
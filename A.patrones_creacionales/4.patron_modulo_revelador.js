// Patron modulo revelador

const resultado = (() => {
  const x = {};
  return {
    a: () => console.log(x),
    b: (key, val) => x[key] = val,
  }
})();

resultado.a();
resultado.b('comida', 'pan');
resultado.a();

console.log(resultado.x);
// Patron comando

const Comander = (() => {
  const o = {
    comprar: x => {
      console.log(`Comprando ${x}`);
    },
    vender: x => {
      console.log(`Vendiendo ${x}`);
    }
  }
  return {
    run: (comando, argumentos) => {
      if (!o[comando]) {
        console.log('comando no existe!');
        return;
      }
      o[comando](argumentos);
    }
  }
})();

Comander.run('comprar', 'Zusuki');

Comander.run('fake', 'Fake!');
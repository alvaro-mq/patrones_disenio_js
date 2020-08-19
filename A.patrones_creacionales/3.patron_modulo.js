// Patron modulo

const modulo = {
  prop: 'mi prop',
  config: {
    lenguage: 'es',
    cache: true,
  },
  setConfig: conf => {
    modulo.config = conf;
  },
  isCacheEnabled: () => {
    console.log(modulo.config.cache ? 'si' : 'no');
  }
};

console.log(modulo);
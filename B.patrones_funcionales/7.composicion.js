// Composicion

const users = [
  { edad: 17, nombre: 'Nicolas', apellido: 'Soto'},
  { edad: 18, nombre: 'Juan', apellido: 'Perez'},
  { edad: 13, nombre: 'Pedro', apellido: 'Jimenez'},
  { edad: 1, nombre: 'Maria', apellido: 'Lopez'},
];

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const filter = f => xs => xs.filter(f);
const head = xs => xs[0];

const formateo = x => ({
  nombreCompleto: `${x.nombre} ${x.apellido}`,
  edad: x.edad,
});

const formato = x => `La edad de ${x.nombreCompleto} es ${x.edad}`;

// Compose
const traePrimerNombreCompose = compose(
  formato,
  formateo,
  head,
  filter(x => x.edad < 2),
);
console.log('-----------COMPOSE-----------');
console.log(traePrimerNombreCompose(users));
console.log('-----------------------------');

// Pipe
const traePrimerNombrePipe = pipe(
  filter(x => x.edad < 2),
  head,
  formateo,
  formato
);
console.log('------------PIPE----------');
console.log(traePrimerNombrePipe(users));
console.log('--------------------------');
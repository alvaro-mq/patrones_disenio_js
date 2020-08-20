// Inmutabilidad

const obj = {
  a: 1
};

const obj2 = {
  ...obj,
  c: 2
};

console.log(obj, obj2);
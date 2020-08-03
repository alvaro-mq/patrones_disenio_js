// Closures

const f = (x) => {
  return () => console.log(`Rayos ${x}!!!`);
}

f('alvaro')();
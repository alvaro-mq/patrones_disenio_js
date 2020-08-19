// Patron mediador

const Emitter = (() => {
  const topics = {};
  const hDP = topics.hasOwnProperty;

  return {
    on: (topic, listener) => {
      if (!hDP.call(topics, topic)) topics[topic] = [];
      topics[topic].push(listener);
    },
    emit: (topic, info) => {
      if (!hDP.call(topics, topic)) return;
      topics[topic].forEach(item => item(info != undefined ? info : {}));
    }
  }
})();

Emitter.on('login', x => console.log(x));

Emitter.emit('login', { user: 'alvaro', password: '123456' });
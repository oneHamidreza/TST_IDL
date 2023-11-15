const handler = {
  get: function(target, prop, receiver) {
    return "404";
  }
};

const proxy = new Proxy({}, handler);

console.log(proxy.someMethod());

// Declarative
function dec(array, callback) {
  return array.map(it => {
    callback?.(it);
    return it;
  });
};

// Imperative
function imp(array, callback) {
  const newArray = [];
  for (var i = 0; i < array.length; i++) {
    const value = array[i];
    newArray.push(value);
    callback?.(value);
  }
  return newArray;
};

dec(['Test1', 'Test2'], console.log);
imp(['Test1', 'Test2'], console.log);

function transfer(str) {
  const arrays = JSON.parse(str);
  const newArray = [];

  const search = (a) => {
    if (Array.isArray(a)) {
      a.forEach(it => search(it));
    } else {
      newArray.push(a);
    }
  }

  arrays.forEach(search);

  return newArray;
}

transfer("[4,[[5],[6,[7],8],9,10]]")

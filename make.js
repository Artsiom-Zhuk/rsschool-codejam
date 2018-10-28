function make() {
  let arr = [];

  function func() {
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] !== "function") {
        arr.push(arguments[i]);
      } else return arr.reduce(arguments[i]);
    }
    return func;
  }

  return func.apply(null, arguments);
}

function recursion(obj) {
  let arrayObj = [obj];
  let arrayValue = [];
  let resultArray = [];
  let counter = 0;

  function func(arrayObj) {
    if (!arrayObj.length) {
      return resultArray;
    }

    let objFromArr = arrayObj.shift();
    let keys = Object.keys(objFromArr).forEach(k => {
      if (typeof objFromArr[k] === "object") {
        arrayObj.push(objFromArr[k]);
        counter++;
      } else {
        arrayValue.push(objFromArr[k]);
      }
    });

    if (counter === arrayObj.length) {
      resultArray.push(arrayValue);
      arrayValue = [];
      counter = 0;
    }
    return func(arrayObj);
  }
  return func(arrayObj);
}

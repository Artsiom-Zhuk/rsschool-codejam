function sumOfOther(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let res = arr.reduce((acc, num) => acc + num);
    res = res - arr[i];
    newArr.push(res);
  }

  return newArr ;
}
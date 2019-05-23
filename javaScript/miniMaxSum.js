// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  let smallestNumber = Math.min(...arr);
  let biggestNumber = Math.max(...arr);
  let bigSum = arr.reduce(add, 0) - smallestNumber;
  let smallSum = arr.reduce(add, 0) - biggestNumber;

  function add(accumulator, a) {
    return accumulator + a;
  }

  console.log(smallSum + ' ' + bigSum);
}

// Complete the plusMinus function below.
function plusMinus(arr) {
  let length = arr.length;
  let negative = 0;
  let positive = 0;
  let zero = 0;

  for (let i = 0; i < length; i++) {
    if (arr[i] > 0) {
      positive += 1;
    } else if (arr[i] < 0) {
      negative += 1;
    } else {
      zero += 1;
    }
  }
  console.log((positive / length).toPrecision(6));
  console.log((negative / length).toPrecision(6));
  console.log((zero / length).toPrecision(6));
}

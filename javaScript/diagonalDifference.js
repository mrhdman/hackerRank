// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
  let length = arr.length;
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < length; i++) {
    sum1 += arr[i][i];
    sum2 += arr[length - 1 - i][i];
  }
  return Math.abs(sum1 - sum2);
}

// Complete the staircase function below.
function staircase(n) {
  let hash = '#';
  let space = ' ';

  for (let i = 1; i <= n; i++) {
    console.log(space.repeat(n - i) + hash.repeat(i));
  }
}

staircase(7);

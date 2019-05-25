// Complete the camelcase function below.
function camelcase(s) {
  var i = 0;
  var count = 0;
  var character = '';
  while (i <= s.length) {
    character = s.charAt(i);
    if (character == character.toUpperCase()) {
      count++;
    }
    i++;
  }
  return count;
}

console.log(camelcase('doesThisWork'));

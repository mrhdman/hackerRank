/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
  try {
    if (a > 0) {
      return 'YES';
    }
    if (a == 0) {
      throw 'zeroError';
    }
    if (a < 0) {
      throw 'negativeError';
    }
  } catch (err) {
    if (err == 'zeroError') {
      return 'Zero Error';
    }
    if (err == 'negativeError') {
      return 'Negative Error';
    }
  }
}

function reverseString(s) {
  try {
    var splitString = s.split('');
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join('');
    var error = false;
  } catch (e) {
    console.log(e.message);
    error = true;
  } finally {
    if (error == true) {
      console.log(s);
    } else {
      console.log(joinArray);
    }
  }
}

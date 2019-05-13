/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */



function vowelsAndConsonants(s) {
    let lengthOfString = s.length;
    let vowelString = "";
    let consonantString = "";

    for (var i = 0; i < lengthOfString; i++) {
        let currentLetter = s.charAt(i);
        if (currentLetter == "a" || currentLetter == "e" || currentLetter == "i" || currentLetter == "o" || currentLetter == "u") {
            vowelString = vowelString + currentLetter;
        } else {
            consonantString = consonantString + currentLetter; 
        }
    }

    for (var i = 0; i < vowelString.length; i++) {
        let currentLetter = vowelString.charAt(i);
        console.log(currentLetter);
    }
    for (var i = 0; i < consonantString.length; i++) {
        let currentLetter = consonantString.charAt(i);
        console.log(currentLetter);
    }
}

vowelsAndConsonants("javascriptloops");






function for0() {
    for (var i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function for1() {
    var i = 1;

    for (; i <= 10; i++) {
        console.log(i);
    }
}

function for2() {
    for (var i = 1;; i++) {
        if (i > 10) {
            break;
        }
        console.log(i);
    }
}

function for3() {
    var i = 1;

    for (;;) {
        if (i > 10) {
            break;
        }
    }
}

function while0(){
    var i = 1;
    
    while (i <= 10) {
        console.log(i);
        i++;
    }
}

function doWhile() {
    var i = 1;

    do {
        console.log(i);
        i++;
    } while (i <= 10);
}
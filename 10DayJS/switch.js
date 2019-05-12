function getLetter(s) {
    let letter;
    // var vowels = ["a", "e", "i", "o", "u"];
    // var cons1 = ["b", "c", "d", "e", "f", "g"];
    // var cons2 = ["h", "j", "k", "l", "m"];
    let firstLetter = s.charAt(0);
    let Atest = false;
    let Btest = false;
    let Ctest = false;
    let Dtest = false;

    if (firstLetter = "a" || "e" || "i" || "o" || "u") {
        Atest = true;
    } else if (firstLetter = "b" || "c" || "d" || "f" || "g") {
        Btest = true;
    } else if (firstLetter = "h" || "j" || "k" || "l" || "m") {
        Ctest = true;
    } else {
        Dtest = true;
    }
    switch(firstLetter) {
        case Atest = true:
            letter = "A";
            console.log(letter);
            break;
        case Btest = true:
            letter = "B";
            console.log(letter);
            break;
        case Ctest = true:
            letter = "C";
            console.log(letter);
            break;
        default:
            letter = "D";
            console.log(letter);
            break;
    }
    return letter;
}

getLetter("abcedkjfs");
getLetter("bcedkjfs");
getLetter("hbcedkjfs");
getLetter("zbcedkjfs");
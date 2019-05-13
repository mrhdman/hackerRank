function getLetter(s) {
    let letter;
    let firstLetter = s.charAt(0);

    switch(firstLetter) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            letter = "A";
            break;
        case "b":
        case "c":
        case "d":
        case "e":
        case "f":
        case "g":
            letter = "B";
            break;
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
            letter = "C";
            break;
        default:
            letter = "D";
            break;
    }
    console.log(letter);
}

getLetter("abcedkjfs");
getLetter("bcedkjfs");
getLetter("hbcedkjfs");
getLetter("zbcedkjfs");
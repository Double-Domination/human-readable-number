function toReadable(numberToTransform) {
    let result = false;

    const convertExclusions = {
        19: "nineteen",
        18: "eightteen",
        17: "seventeen",
        16: "sixteen",
        15: "fifteen",
        14: "fourteen",
        13: "thirteen",
        12: "twelve",
        11: "eleven",
        10: "ten",
    };

    const convert = {
        9: "nine",
        8: "eight",
        7: "seven",
        6: "six",
        5: "five",
        4: "four",
        3: "three",
        2: "two",
        1: "one",
    };

    const convertTens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };
    // zero case
    const exclusions = { 0: "zero" };
    if (exclusions.hasOwnProperty(numberToTransform)) {
        return (result = exclusions[numberToTransform]);
    }
    const reversedNumber = numberToTransform
        .toString()
        .split("")
        .reverse()
        .join("");
    const [units, tens, hundreds] = Array.from(reversedNumber);

    result = `${!!hundreds ? convert[hundreds] + " hundred" : ""} ${
        !!convertExclusions[tens + units]
            ? convertExclusions[tens + units]
            : (convertTens[tens] || "") + " " + (convert[units] || "")
    }`;

    return result;
}

console.log(toReadable(412));

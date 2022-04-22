var numbers = [45, 30, 60, 90, 60, 40, 35];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i]; // must be third bracket not first bracket.
    console.log(number);
    if (number > 60) {
        break;
    }
}
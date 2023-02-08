function sumDigits(number) {
    var num = number + '';
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        sum = sum + +(num.charAt(i))
    }
    return sum
}
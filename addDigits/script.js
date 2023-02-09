function sumDigits(number) {
    if (number < 0) {
        number = number * -1;
    }
    if ((number % 1) == 0) {
        var num = number + '';
        var sum = 0;
        for (var i = 0; i < num.length; i++) {
            sum = sum + +(num.charAt(i));
        }
        return sum;
    }
    return 'To nie jest liczba całkowita !!!';
}
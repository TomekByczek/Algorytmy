function arytAverage(numbers) {
    var sum = 0
    for (var i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]
        result = sum / (i + 1)
    }
    return result
}
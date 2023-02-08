function powerFull(base, index) {
    var result = base;
    if (index == 0) {
        result = 1;
    }
    if (index == 1) {
        result = base;
    }
    if (index < 0) {
        base = 1 / base;
        result = base;
        index = index * -1;
    }
    for (var i = 0; i < index - 1; i++) {
        result = result * base
    }
    return result
}
function maxElement(table) {
    //table.sort((a, b) => a - b)
    //return table[table.length]
    var max = table[0];
    for (var i = 0; i < table.length - 1; i++) {
        if (table[i] < table[i + 1] && table[i + 1] > max) {
            max = table[i + 1];
        }
        if (max < table[i]) {
            max = table[i];
        }
    }
    return max
}
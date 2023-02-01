function maxElement(table) {
    // for (i = 0; i < table.length; i++) {
    //     if (table[i] < table[0]) {
    //         var max = table[0]
    //     }
    //     else {
    //         max = table[0]
    //     }
    // }
    var max = 0;
    for (var i = 0; i < table.length - 1; i++) {

        if (table[i] < table[i + 1]) {
            max = table[i + 1];
        }
        else {
            max = table[i];
        }
    }
    return max
}
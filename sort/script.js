function sortTable(table) {
    var jump = 1;
    do {
        if (swap === true) {
            jump = jump + 1;
        }
        var swap = false;
        for (var i = 0; i < table.length - jump; i++) {
            if (table[i] > table[i + 1]) {
                var a = table[i];
                table[i] = table[i + 1];
                table[i + 1] = a;
                swap = true;
            }
            //else {
            //continue;
            //}
        }

    } while (swap === true);


    return table;
} 
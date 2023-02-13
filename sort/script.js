function sortTable(table) {
    do {
        var swap = false;
        for (var i = 0; i < table.length - 1; i++) {
            if (table[i] > table[i + 1]) {
                var a = table[i];
                table[i] = table[i + 1];
                table[i + 1] = a;
                swap = true;
            }
            else {
                continue;
            }
        }

    } while (swap === true)


    return table;
} 
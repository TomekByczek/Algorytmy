function sortingTable(table) {
    for (var i = 0; i < table.length; i++) {
        if (table[i] > table[i + 1]) {
            table[table.length - 1] = table[i]
        }
    } return table
} 
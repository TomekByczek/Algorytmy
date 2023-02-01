
function countElementInTable(table, element) {
    var period = 0;
    for (i = 0; i < table.length; i++) {
        if (element === table[i]) {
            period++;
        }
    }
    return period
}
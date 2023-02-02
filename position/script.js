function positionElementInTable(table, element) {
    var position = [];
    for (i = 0; i < table.length; i++) {
        if (element === table[i]) {
            position.push(i);
            //position.push(i+1);
        }
    }
    return position
}
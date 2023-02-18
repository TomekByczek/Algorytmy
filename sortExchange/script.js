function sortExchange(myTable) {
    var min, minIndex, aux;
    for (var i = 0; i < myTable.length - 1; i++) {
        min = myTable[i];
        minIndex = i;
        for (var j = i + 1; j < myTable.length; j++) {
            if (min > myTable[j]) {
                min = myTable[j];
                minIndex = j;
            }
        }
        aux = myTable[i];
        myTable[i] = myTable[minIndex];
        myTable[minIndex] = aux;
    }
    return myTable;
}
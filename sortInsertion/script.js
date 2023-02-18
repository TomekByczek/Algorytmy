function sortInsertion(myTable) {
    var aux = []
    var tableSorting = [myTable[0]];
    for (var i = 1; i < myTable.length; i++) {
        for (var j = 0; j < tableSorting.length; j++) {
            if (myTable[i] >= tableSorting[j]) {
                tableSorting[j + 1] = myTable[i];
            }
            else {
                aux[0] = myTable[i];
                tableSorting = aux.concat(tableSorting)
            }
        }
    }
    return tableSorting
}
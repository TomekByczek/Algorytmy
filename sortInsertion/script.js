
function sortInsertion(myTable) {
    var tableSorting = [];
    var length = myTable.length;
    for (var i = 0; i < length; i++) {
        var temp = myTable.pop();
        var insert = false;
        var tabLength = tableSorting.length;
        for (var j = 0; j < tabLength; j++) {
            if (temp <= tableSorting[j]) {
                for (var k = tabLength - 1; k >= j; k--) {
                    tableSorting[k + 1] = tableSorting[k];
                }
                tableSorting[j] = temp;
                insert = true;
                break
            }
        }
        if (insert != true) {
            tableSorting.push(temp);
        }
    }
    return tableSorting;
}
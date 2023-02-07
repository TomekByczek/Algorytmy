function addStringChar(number) {
    var num = []
    num.push(number + '')
    var add = 0
    for (var i = 0; i < num.length; i++) {
        add = add + (num.charAt(i))
    }
    return add
}
function fizzBuzz (a, b) {
   // var result = ""
    for (var i=a; i <= b; i++){ // asynchroniczność
        if (i % 3 == 0 && i % 5 == 0){
        result = result + " " + "FizzBuzz";
        }
        else if (i % 3 == 0){
        result = result + " " + "Fizz";
        }
        else if (i % 5 == 0){
        result = result + " " + "Buzz";
        }
        else{
        result = result + " "  + i;
        console.log ("dupa");
        }
    }
    return result
}

let nr = 1

while (nr <= 100) {
    if (nr % 3 === 0 && nr % 5 === 0) {
        console.log("FizzBuzz")
    } else if (nr % 3 === 0) {
        console.log("Fizz")
    } else if (nr % 5 === 0 ) {
        console.log("Buzz")
    } else {
        console.log(nr)
    }
    nr++
}
function classification(name, mark) {
    if (90 <= mark && mark <= 100) {
        console.log(`${name} ranked S`)
    } else if (80 <= mark && mark < 90) {
        console.log(`${name} ranked A`)
    } else if (70 <= mark && mark < 80) {
        console.log(`${name} ranked B`)
    } else if (60 <= mark && mark < 70) {
        console.log(`${name} ranked C`)
    } else if (50 <= mark && mark < 60) {
        console.log(`${name} ranked D`)
    } else if (40 <= mark && mark < 50) {
        console.log(`${name} ranked E`)
    } else if (0 <= mark && mark < 40) {
        console.log(`${name} are not allowed to go up to grade`)
    } else {
        console.log(`Mark is invalid`)
    }
}

classification("Nam", 85)
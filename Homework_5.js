const calculate = (a, b, op) => {
    if (op === "add") {
        console.log(a + " + " + b + " = " + (a + b))
    } else if (op === "subtract") {
        console.log(a + " - " + b + " = " + (a - b))
    } else if (op === "multiply") {
        console.log(a + " * " + b + " = " + (a * b))
    } else if (op === "divide") {
        console.log(a + " / " + b + " = " + (a / b))
    } else if (op === "modullus") {
        console.log(a + " % " + b + " = " + (a % b))
    }
}

calculate(223, 78, "modullus")
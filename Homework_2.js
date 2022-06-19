function solveFirstDegreeEquation(a, b, c) {
    if (a == 0 && b - c == 0) {
        console.log('Phương trình vô số nghiệm')
    } else if (a != 0 && b - c == 0) {
        console.log('Phương trình có nghiệm x = 0')
    } else if (a == 0 && b - c != 0) {
        console.log('Phương trình vô nghiệm')
    } else {
        console.log('Phương trình có nghiệm x = ' + ((c - b) / a))
    }
}

solveFirstDegreeEquation(5, 7, 9)
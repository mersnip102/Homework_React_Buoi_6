var calAvg = (score1, score2, score3, score4, score5, score6) => {
    let avgDolphins = (score1 + score2 + score3) / 3
    console.log('Dolphins average score is: ' + Math.round(avgDolphins * 100) / 100)

    let avgKoalas = (score4 + score5 + score6) / 3
    console.log('Koalas average score is: ' + Math.round(avgKoalas * 100) / 100)

    if (avgDolphins > avgKoalas && avgDolphins >= 100) {
        console.log('Dolphins win')
    } else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
        console.log('Koalas win')
    } else if (avgDolphins < 100 && avgKoalas < 100) {
        console.log('No team win')
    } else {
        console.log('The teams drew')
    }
}

calAvg(97, 112, 101, 109, 95, 106)
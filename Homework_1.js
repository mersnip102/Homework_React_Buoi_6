function compareBMI(firstPerson, massFirstPerson, heightFirstPerson, secondPerson, massSecondPerson, heightSecondPerson) {
    let BMI1 = Math.round(massFirstPerson / (heightFirstPerson ** 2) * 100) / 100
    let BMI2 = Math.round(massSecondPerson / (heightSecondPerson ** 2) * 100) / 100

    console.log(`${firstPerson}'s BMI is ${BMI1}`)
    console.log(`${secondPerson}'s BMI is ${BMI2}`)

    if (BMI1 > BMI2) {
        console.log(`${firstPerson}'s BMI is higher than ${secondPerson}!`)
    } else if (BMI1 == BMI2) {
        console.log(`${firstPerson}'s BMI is equal to ${secondPerson}!`)
    } else {
        console.log(`${secondPerson}'s BMI is higher than ${firstPerson}!`)
    }
}

compareBMI('Marks', 78, 1.69, 'Marry', 95, 1.88)
require("fs").readFile("./input.txt", (err, data) => {
    const diagnosticReport = data.toString()

    const numbers = diagnosticReport.split("\n")

    // Part 1
    var gammaRate = []
    var epsilonRate = []

    for (var i = 0; i < numbers[0].length; i++) {
        const most_least = most_least_columnBit(numbers, i, false)

        gammaRate.push(most_least[0])
        epsilonRate.push(most_least[1])
    }

    console.log(`Power consumption: ${parseInt(gammaRate.join(""), 2) * parseInt(epsilonRate.join(""), 2)}`)


    // Part 2
    var oxygen_generator_rating = diagnosticReport.split("\n")
    
    const xLimit = numbers[0].length
    const yLimit = numbers.length

    for (var i = 0; i < xLimit; i++) {
        const most_least = most_least_columnBit(oxygen_generator_rating, i, true)

        if (oxygen_generator_rating[1] && most_least[0] != 3)
        {
            eliminateRows(oxygen_generator_rating, i, most_least[0], false)
        }
        else if (oxygen_generator_rating[1] && most_least[0] == 3) {
            eliminateRows(oxygen_generator_rating, i, most_least[0], true)
        }
    }

    var co2_scrubber_rating = diagnosticReport.split("\n")
    
    for (var i = 0; i < xLimit; i++) {
        const most_least = most_least_columnBit(co2_scrubber_rating, i, true)
        //console.log(co2_scrubber_rating)
        if (co2_scrubber_rating[1] && most_least[1] != 3)
        {
            eliminateRows(co2_scrubber_rating, i, most_least[1], false)
        }
        else if (co2_scrubber_rating[1] && most_least[1] == 3)
        {
            eliminateRows(co2_scrubber_rating, i, most_least[1], true)
        }
    }

    console.log(oxygen_generator_rating, co2_scrubber_rating)
    
    //console.log(`Life support rating: ${oxygen_generator_rating ,co2_scrubber_rating}`)
})

const most_least_columnBit = function(input, n, checkEquals) {
    var ones = 0
    var zeros = 0
    input.forEach((number, index) => {
        if (number[n] == "1") {
            ones++
        } else if (number[n] == "0") {
            zeros++
        }
    }) 

    if (ones > zeros) {
        return [1, 0]
    } else if (zeros > ones) {
        return [0, 1]
    }
    if (zeros == ones && checkEquals) {
        return [3, 3]
    }
}

const eliminateRows = function(input, i, commonBit, allButOne) {
    if (!allButOne) {
        input.forEach((number, index) => {
            if (Number(number[i]) != commonBit) {
                input.splice(index, 1)
            }
        })
    }
    else if (allButOne) {
        input.forEach((number, index) => {
            if (number[0] != "0") {
                input.splice(index, 1)
            }
        })
    }
}
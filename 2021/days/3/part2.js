require("fs").readFile("input.txt", (err, data) => {
    const number = data.toString().split("\n")
    
    oxygenGenRatingValue = {}
    oxygenGenRatingValueHandler = []
    number.forEach((index, row) => {
        oxygenGenRatingValue = Object.assign({index: row})
    })
    
    console.log(oxygenGenRatingValue)
    number[0].forEach((bitIndex, _) => {

        var zeroes = 0
        var ones = 0
        number.forEach((numberIndex, row) => {
            if (number[numberIndex][bitIndex] == "0") {
                zeroes++
            } else if (number[numberIndex][bitIndex] == "1") {
                ones++
            }
        })

        if (zeroes > ones) {
            number.forEach((numberIndex, row) => {
                if (number[bitIndex][numberIndex] == "1") {
                    delete Object.keys(oxygenGenRatingValue).find(key => oxygenGenRatingValue[key] === numberIndex)
                }
            })
        } else if (ones > zeroes) {
            number.forEach((numberIndex, row) => {
                if (number[bitIndex][numberIndex] == "0") {
                    delete Object.keys(oxygenGenRatingValue).find(key => oxygenGenRatingValue[key] === numberIndex)
                }
            })
        }
    })

    console.log(oxygenGenRatingValue)
})
require("fs").readFile("input.txt", (err, data) => {
    const rows = data.toString().split("\n")
    gammaRate = []
    epsilonRate = []
    
    for (var i = 0; i < rows[0].length; i++) {

        var zeroes = 0
        var ones = 0
        for (var j = 0; j < rows.length; j++) {
            if (rows[j][i] == "0") {
                zeroes++
            } else if (rows[j][i] == "1") {
                ones++
            }
        }

        if (zeroes > ones) {
            gammaRate.push(0)
            epsilonRate.push(1)
        } else if(ones > zeroes) {
            gammaRate.push(1)
            epsilonRate.push(0)
        }
    }

    
    console.log(parseInt(gammaRate.join(""), 2) * parseInt(epsilonRate.join(""), 2))
})
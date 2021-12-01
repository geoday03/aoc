require("fs").readFile("input.txt", (err, data) => {
    const body = data.toString().split("\n").map((element) => parseInt(element))

    var increasedCount = 0
    for (var i = 0; i < body.length; i++) {
        if (body[i] + body[i+1] + body[i+2] < body[i+1] + body[i+2] + body[i+3]) {
            increasedCount++
        }
    }

    console.log(increasedCount)
})
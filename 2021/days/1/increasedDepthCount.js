const rl = require("readline/promises").createInterface({
    input: require("fs").createReadStream("./input.txt")
})

var lastDepth
var greaterDepthCount = 0
rl.on("line", line => {
    if (Number(line) > lastDepth) {
        greaterDepthCount++
    }

    lastDepth = Number(line)
}).on("close", () => { console.log(greaterDepthCount) })
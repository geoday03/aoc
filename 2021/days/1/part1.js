const rl = require("readline/promises").createInterface({
    input: require("fs").createReadStream("./input.txt")
})

var lastDepth
var greaterDepthCount = 0
rl.on("line", depth => {
    if (Number(depth) > lastDepth) {
        greaterDepthCount++
    }

    lastDepth = Number(depth)
}).on("close", () => { console.log(greaterDepthCount) })

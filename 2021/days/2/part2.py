lines = open("./input.txt", "r").read().split("\n")

horizontal = 0
depth = 0
aim = 0
for line in lines:
    if line.startswith("forward"):
        horizontal += int(line[-1])
        depth += aim*int(line[-1])
    elif line.startswith("up"):
        aim -= int(line[-1])
    elif line.startswith("down"):
        aim += int(line[-1])

print(horizontal * depth)
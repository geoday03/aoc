lines = open("./input.txt", "r").read().split("\n")

horizontal = 0
depth = 0
for line in lines:
    if line.startswith("forward"):
        horizontal += int(line[-1])
    elif line.startswith("up"):
        depth -= int(line[-1])
    elif line.startswith("down"):
        depth += int(line[-1])

print(horizontal * depth)

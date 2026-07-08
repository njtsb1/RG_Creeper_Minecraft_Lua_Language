--[[
Creature Name
Description
Sound it makes
Attributes
    Attack
    Defense
    Vitality
    Speed
    Intelligence
Skills
    Stealth
    Explosion

===================================================
|
| CREEPER
| A very cunning monster that explodes in your face.
|
| Sound: Tssssss
|
| Attributes:
|   Attack: ########00
|   Defense: ###0000000
|   ...
|
===================================================
]]

-- Enable UTF-8 in the terminal
os.execute("chcp 65001")

-- Creature
local monsterName = "CREEPER"
local description = "A stealthy monster with an explosive temper."
local emoji = "💥"
local sound = "Tssssss"
local favoriteTime = "Night"
local item = "Gunpowder"

-- Attributes
local attackAttribute = 10
local defenseAttribute = 1
local lifeAttribute = 5
local speedAttribute = 7
local intelligenceAttribute = 2

-- function that receives an attribute and returns a progress bar as a string
local function getProgressBar(attribute)
    local fullChar = "⬜"
    local emptyChar = "⬛"

    local result = ""
    for i = 1, 10, 1 do
        if i <= attribute then
            result = result .. fullChar
        else
            result = result .. emptyChar
        end
    end
    return result
end

-- Card
print("===================================================")
print("| ")
print("| " .. monsterName)
print("| " .. description)
print("| ")
print("| Item: " .. item)
print("| Sound: " .. sound)
print("| Favorite Emoji: " .. emoji)
print("| Favorite Time: " .. favoriteTime)
print("| ")
print("| Attributes")
print("|    Attack:       " .. getProgressBar(attackAttribute))
print("|    Defense:      " .. getProgressBar(defenseAttribute))
print("|    Life:         " .. getProgressBar(lifeAttribute))
print("|    Speed:        " .. getProgressBar(speedAttribute))
print("|    Intelligence: " .. getProgressBar(intelligenceAttribute))
print("| ")
print("===================================================")

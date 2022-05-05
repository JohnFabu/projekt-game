input.onButtonPressed(Button.A, function () {
    if (sprite_dole >= 4) {
        sprite_dole = 4
    } else {
        sprite_dole += 1
        ciara.set(LedSpriteProperty.Y, sprite_dole)
    }
})
input.onButtonPressed(Button.B, function () {
    if (sprite_dole <= 0) {
        sprite_dole = 0
    } else {
        sprite_dole += -1
        ciara.set(LedSpriteProperty.Y, sprite_dole)
    }
})
let horiz = 0
let sprite_dole = 0
let ciara: game.LedSprite = null
let x = randint(1, 4)
let y = randint(0, 4)
let sprite = game.createSprite(4, y)
ciara = game.createSprite(0, 4)
sprite_dole = y
game.setLife(5)
game.setScore(0)
basic.forever(function () {
    horiz = 4
    while (horiz >= 0) {
        sprite.set(LedSpriteProperty.X, horiz)
        horiz += -1
        basic.pause(500)
    }
    if (ciara.isTouching(sprite)) {
        horiz = 0
        while (horiz >= 0 && horiz <= 4) {
            sprite.set(LedSpriteProperty.X, horiz)
            sprite.set(LedSpriteProperty.Y, horiz)
            horiz += 1
            basic.pause(500)
        }
    } else {
        basic.showIcon(IconNames.No)
    }
})

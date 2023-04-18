input.onButtonPressed(Button.A, function () {
    voeding += 5
})
input.onButtonPressed(Button.B, function () {
    knuffel += 5
})
let dood = 0
let knuffel = 20
let voeding = 20
basic.forever(function () {
    basic.pause(1000)
    knuffel += -1
    voeding += -1
})
basic.forever(function () {
    if ((voeding && knuffel) > 10) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
    if (knuffel || voeding < 0 && 0 == dood) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})

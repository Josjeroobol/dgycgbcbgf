let dood = 0
let knuffel = 20
let voeding = 20
basic.forever(function () {
    basic.pause(1000)
    knuffel += -1
    voeding += -1
})
basic.forever(function () {
    if (voeding > 10 && knuffel > 10) {
        basic.showIcon(IconNames.Happy)
    }
    if (voeding < 10 && voeding > 0 && (knuffel < 10 && knuffel > 0)) {
        basic.showIcon(IconNames.Sad)
    }
    if (voeding < 0 || knuffel < 0 && 0 == dood) {
        dood = 1
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (dood == 0 && input.buttonIsPressed(Button.A)) {
        voeding += 5
    }
    if (dood == 0 && input.buttonIsPressed(Button.B)) {
        knuffel += 5
    }
})

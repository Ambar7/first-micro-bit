input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # # . # #
            # . . . #
            . # . # .
            . . # . .
            . # # # .
            `)
        music.playMelody("C5 B G F A G B C5 ", 251)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            # # . # #
            . . # . .
            . # # # .
            `)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        music.playMelody("D F D A F C5 B A ", 120)
        basic.showLeds(`
            # # . # #
            # . . . #
            . # . # .
            . . # . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . # #
            . . # . .
            . # . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . . .
            # # . . .
            . . # . .
            . . . # .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        music.playMelody("- C5 B E G A C5 D ", 120)
        basic.showLeds(`
            . # . # .
            # . . . #
            # # . # #
            . . # . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            # # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . # #
            . . . . #
            . . . # .
            . . # . .
            `)
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    for (let index = 0; index < 4; index++) {
        music.playMelody("E D G F B A C5 B ", 120)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            # # . # #
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    }
})
basic.showString("Im Ambar")

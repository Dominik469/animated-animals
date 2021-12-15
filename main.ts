input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Duck)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # # . .
        # # # . .
        . # # # #
        . # # # .
        `)
    basic.pause(500)
})
basic.forever(function () {
	
})

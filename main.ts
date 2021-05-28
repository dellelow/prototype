input.onButtonPressed(Button.A, function () {
    while (true) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
music.playTone(262, music.beat(BeatFraction.Whole))
basic.pause(100)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        music.ringTone(262)
        basic.pause(100)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(100)
    }
})

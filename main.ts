//Rafal - czytanie Joysticka i sterowanie silnikiem - czolg przod i tyl

let m504 = 0
let pt = 0
let pt1 = 0
let kalib = 0
basic.forever(function () {
    m504 = pins.analogReadPin(AnalogPin.P2)
    if (m504 > 518) {
        pt = 1
        pt1 = 0
        kalib = Math.map(m504, 518, 1023, 20, 1023)
    } else if (m504 < 492) {
        pt = 0
        pt1 = 1
        kalib = Math.map(m504, 1, 492, 20, 1023)
        kalib = 1023 - kalib
    } else {
        pt1 = 0
        pt = 0
        kalib = 0
    }
    led.plotBarGraph(
        kalib,
        1023
    )
    pins.digitalWritePin(DigitalPin.P15, pt1)
    pins.digitalWritePin(DigitalPin.P14, pt)
    pins.analogWritePin(AnalogPin.P13, kalib)
    basic.pause(10)
})
 
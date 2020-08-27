let item: number[] = []
basic.forever(function () {
    item = AlphaBot2.AnalogRead()
    serial.writeNumber(item[0])
    serial.writeString("  ")
    serial.writeNumber(item[1])
    serial.writeString("  ")
    serial.writeNumber(item[2])
    serial.writeString("  ")
    serial.writeNumber(item[3])
    serial.writeString("  ")
    serial.writeNumber(item[4])
    serial.writeLine("")
})

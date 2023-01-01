radio.setGroup(17)
basic.showIcon(IconNames.SmallDiamond)
basic.forever(function () {
    radio.sendValue("mgx", input.acceleration(Dimension.X))
    radio.sendValue("mgy", input.acceleration(Dimension.Y))
})

input.onButtonPressed(Button.A, function () {
    miunts += -1
    if (miunts == 0) {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
	
})
let miunts = 0
miunts = 25
let runing = false
basic.showString("beging")
basic.forever(function () {
    if (true) {
        basic.showString("beging")
        miunts += -1
        if (miunts == 0) {
            basic.showIcon(IconNames.Heart)
        }
    }
})

makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    basic.showString(makerbit.irButtonName())
})
makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.NEC)
basic.forever(function () {
	
})

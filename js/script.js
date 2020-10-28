mouseX = MouseEvent.clientX
mouseY = MouseEvent.clientY

document.body.onmouseover = function () {
    console.log(mouseX, mouseY)
}
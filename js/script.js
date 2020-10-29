const MAX_STRETCH = 1.5; // defines the amount the cursor can stretch in acordance to the size of the orginal cursor
const FRICTION = 0.1; // Amount fo friction 

let cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
    var mouseX = e.clientX;
    var mouseY = e.clientY;
})

var cursorX = cursor.clientX;
var cursorY = cursor.clientY;

function Cursor

function AngleDis (dx, dy) {
    return Math.tan(dy/dx)
}

class Cursor {
    constructor (cursorHTML, friction, speed) {
        this.cursor = cursorHTML;
        this.friction = friction;
        this.speed = speed;

        this.precision = 2;

        this.mouse = {x: 0, y: 0};
        this.translation = {x: 1, y: 1};
        
        this.cursor.style.width  = "7.5px"
        this.cursor.style.height = "7.5px"

        this.Events();
        this.Animate();
    }

    Events () {
        window.addEventListener ("mousemove", (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        })
        window.addEventListener ("mousedown", () => {
            let size = 7.5;
            let id = setInterval(() => {
                if (size == 5){
                    clearInterval(id)
                } else {
                    this.cursor.style.width  = size + "px";
                    this.cursor.style.height = size + "px";
                    size -= 0.5;
                }
            }, 25)
        })
        window.addEventListener ("mouseup", () => {
            let size = 5;
            let id = setInterval(() => {
                if (size == 7.5){
                    clearInterval(id)
                } else {
                    this.cursor.style.width  = size + "px";
                    this.cursor.style.height = size + "px";
                    size += 0.5;
                }
            }, 25)
        })
    }

    Animate () {
        setInterval(() => {
            this.Render()
        }, this.speed) 
    }

    Update () {
        this.translation.x += (this.mouse.x - this.translation.x) * this.friction;
        this.translation.y += (this.mouse.y - this.translation.y) * this.friction;
    }

    Render () {
        this.Update()
        this.cursor.style.transform = "translate(" + this.translation.x.toFixed(this.precision) + 'px, ' + this.translation.y.toFixed(this.precision) + 'px)';
    }
}

cursor = new Cursor(document.getElementById('cursor'), 0.05, 1);


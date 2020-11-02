function AngleDis (dx, dy) {
    return Math.tan(dy/dx)
}

class Cursor {
    constructor (cursorHTML, friction, speed) {
        this.cursor = cursorHTML;
        this.friction = friction;
        this.speed = speed * 1000;
        this.precision = 2;

        this.mouse = {x: 0, y: 0};
        this.translation = {x: 1, y: 1};
        
        this.Events();
        this.Animate();
    }

    Events () {
        window.addEventListener ("mousemove", (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        }) 
    }

    Animate () {
        setInterval(() => {
            this.Render()
        }, this.speed) 
    }

    Update () {
        this.translation.x = (this.mouse.x - this.translation.x) * this.friction;
        this.translation.y = (this.mouse.y - this.translation.y) * this.friction;
    }

    Render () {
        this.Update()
        this.cursor.style.transform = "translate(" + this.translation.x.toFixed(this.precision) + 'px, ' + this.translation.y.toFixed(this.precision) + 'px)';
        console.log(this.cursor.style.transform)
    }
}

cursor = new Cursor(document.getElementById('cursor'), 0.1, 1)


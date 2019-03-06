/*const circle = {
        radius: 1,
        location: {
            x: 1,
            y: 1
        },
        draw: function () {
            console.log('draw');

        }
    };

    circle.draw();

         // factory function
    function createCircle(radius) {
        return {
            radius,
            draw: function () {
                console.log('drawxxx');
            }
        };
    }
        const circle = createCircle(1);
        circle.draw();*/

//Constructor function
function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }

}

const another = new Circle(1);

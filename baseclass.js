class BaseClass {


    constructor(x, y, width, height, angle) {


        var options = {
            restitution: 0.8,
            friction: 1
        };


        this.body = Bodies.rectangle(x, y, width, height, options);

        World.add(world, this.body);
        this.width = width;
        this.height = height;

        this.image = loadImage("sprites/base.png");

    }


    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        angleMode(RADIANS);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();







    }











}
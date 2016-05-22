/**
 * Created by Do Dinh Tu on 5/18/2016.
 */
class Bullet {
    constructor(x, y,direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.speedX = 0;
        this.speedY = 0;
        this.sprite = new Image();
        this.sprite.src = "images/bullet_up.png";
        this.spriteUp = new Image();
        this.spriteUp.src = "images/bullet_up.png";
        this.spriteDown = new Image();
        this.spriteDown.src = "images/bullet_down.png";
        this.spriteLeft = new Image();
        this.spriteLeft.src = "images/bullet_left.png";
        this.spriteRight = new Image();
        this.spriteRight.src = "images/bullet_right.png";
        this.move(direction)
    }
    checkCollision(rect1, rect2) {
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y) {
            return true;
        }
        return false;
    }
    

    move(direction){
        switch(direction){
            case 1://up
                this.speedY = -3;
                this.speedX = 0;
                this.sprite = this.spriteUp;
                this.direction = 1;
                break;
            case 2://down
                this.speedY = 3;
                this.speedX = 0;
                this.sprite = this.spriteDown;
                this.direction = 2;
                break;
            case 3://left
                this.speedX = -3;
                this.speedY = 0;
                this.sprite = this.spriteLeft;
                this.direction = 3;
                break;
            case 4://right
                this.speedX = 3;
                this.speedY = 0;
                this.sprite = this.spriteRight;
                this.direction = 4;
                break;
            }
    }

        update(){
                this.x += this.speedX;
                this.y += this.speedY;
            }
        draw(context) {
            context.drawImage(this.sprite, this.x, this.y);
        }
}
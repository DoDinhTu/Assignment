/**
 * Created by Do Dinh Tu on 5/22/2016.
 */
class wallWater{
    constructor(i,j){
        this.x = j * 16;
        this.y = i * 16;
        this.sprite = new Animation(this.x, this.y, "water_",2,10);
    }
    update(){
        this.sprite.update();
    }
    draw(context){
        this.sprite.draw(context);  
    }
}
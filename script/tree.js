/**
 * Created by Do Dinh Tu on 5/22/2016.
 */


class wallTree{
    constructor(i,j){
        this.x = j * 16;
        this.y = i * 16;
        this.sprite = new Image();
        this.sprite.src="images/trees.png";
    }
    draw(context){
        context.drawImage(this.sprite, this.x,this.y);
    }
}
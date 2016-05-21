window.onload = function() {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    var map;
    var arrBrick = new Array();
    var arrSteel = new Array();
    var background = document.getElementById("images/background.jpg");
    document.body.appendChild(canvas);
    //
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //
    gameStart();
    setInterval(()=> {
        gameUpdate();
        gameDrawer(context);
    }, 17);
    map = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    for (var i = 0; i < 26; i++) {
        for (var j = 0; j < 26; j++) {
            if (map[i][j] == 3) {
                var brick = new wallBrick(i, j);
                arrBrick.push(brick);
            }
            ;
            if (map[i][j] == 2) {
                var steel = new wallSteel(i, j);
                arrSteel.push(steel);
            }
            ;
            if (map[i][j] == 1) {
                var water = new wallWater(i, j);
                arrWater.push(water);
            }
            ;
            if (map[i][j] == 4) {
                var tree = new wallTree(i, j);
                arrTree.push(tree);
            }
            ;
        }
    }
    ;
}
    var player;
    var playerBullet;
    function gameStart() {
        player = new Tank(100,100);
        playerBullet = new Bullet(0,0,1);
    }
    function gameUpdate() {
        player.update();
        playerBullet.update();
    }
    function gameDrawer(context) {
        context.fillStyle = "green";
        context.fillRect(0,0,window.innerWidth,window.innerHeight);
        player.draw(context);
        playerBullet.draw(context);
    }
    window.onkeydown = function(e) {
        switch (e.keyCode) {
            case 87 ://W
                player.move(1);
                break;
            case 83 ://S
                player.move(2);
                break;
            case 65 ://A
                player.move(3);
                break;
            case 68 ://D
                player.move(4);
                break;
            case 32 :// Shoot
                player.shoot();
                break;
        }
    };
    window.onkeyup = function(e) {
        switch (e.keyCode){
            case 87://W
                if(player.speedY < 0){
                    player.speedY = 0;
                    player.sprite = player.spriteUp;
                }
                break;
            case 83:// S
                if(player.speedY > 0){
                    player.speedY = 0;
                    player.sprite = player.spriteDown;
                }
                break;
            case 65:// A
                if(player.speedX < 0){
                    player.speedX = 0;
                    player.sprite = player.spriteLeft;
                }
                break;
            case 68:// D
                if(player.speedX > 0){
                    player.speedX = 0;
                    player.sprite = player.spriteRight;
                }
                break;
            default: break;
        }
    }



/**
 * @description Class that define the enemy
 * @constructor
 * @param x - coordinate x in cartesian system
 * @param y - coordinate y in cartesian system
 * @param speed - speed of player
 */
class Enemy {
    constructor(x, y, speed ) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = 'images/enemy-bug.png';
    }

    _checkCollision() {
        // check for collision between enemy and player
        if (
            player.y + 131 >= this.y + 90
            && player.x + 25 <= this.x + 88
            && player.y + 73 <= this.y + 135
            && player.x + 76 >= this.x + 11) {
                player.x = 202.5;
                player.y = 383;

                if (allEnemies.length > 1) {
                    allEnemies.pop();
                }
        }

    }

    update(dt) {
        this.x += this.speed * dt;

        if (this.x >= 505) {
            this.x = 0;
        }
        this._checkCollision();
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

}

/**
 * @description Class that define the player
 * @constructor
 * @param x - coordinate x in cartesian system
 * @param y - coordinate y in cartesian system
 * @param speed - speed of player
 */
class Player {
    constructor(x, y, speed ) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = this.getSkin();
    }
    update() {
    }

    getSkin(){
        let character = ['images/char-boy.png',
            'images/char-cat-girl.png',
            'images/char-horn-girl.png',
            'images/char-pink-girl.png',
            'images/char-princess-girl.png'];

        return character[Math.floor(Math.random()*character.length)];
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    _checkPlayerPosition() {
        if (player.y > 383 ) {
            player.y = 383;
        }
        if (player.y < 0 ) {
            this.sprite = this.getSkin();
            let enemy = new Enemy(0, Math.random() * 184 + 50, Math.random() * 256);
            allEnemies.push(enemy);
            player.y = 383;
        }
        if (player.x > 402.5) {
            player.x = 402.5;
        }
        if (player.x < 2.5) {
            player.x = 2.5;
        }

    }

    handleInput(keyPress) {
        if (keyPress === 'left') {
            player.x -= player.speed;
        }
        if (keyPress === 'up') {
            player.y -= player.speed - 20;
        }
        if (keyPress === 'right') {
            player.x += player.speed;
        }
        if (keyPress === 'down') {
            player.y += player.speed - 20;
        }
        this._checkPlayerPosition();
    }

}

let allEnemies = [];
let player = new Player(202.5, 383, 100);
for (i = 0; i < Math.floor(Math.random()*5); i++) {
    let enemy = new Enemy(0, Math.random() * 184 + 50, Math.random() * 256);
    allEnemies.push(enemy);
}

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

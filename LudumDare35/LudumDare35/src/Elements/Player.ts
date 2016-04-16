module SimpleGame {
    export class Player extends Phaser.Sprite {

        protected velocity;
        protected form;
        protected spacebarPress;
        constructor(game: Phaser.Game, x: number, y: number) {
            // Vitesse du personange
            this.velocity = 300;

            // LA 1ère forme du player est le triangle
            this.form = Game.global.forms.n0; 
            super(game, x, y, 'playerTriangle', 0);
            //game.add.image(40, 100, 'player');
            this.anchor.setTo(0.5, 0.5);
            console.log(this);
            this.width = 50;
            this.height = 43;
            //this.animations.add('walk', [1, 2], 10, true);
            //this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);
            game.physics.enable(this, Phaser.Physics.ARCADE);
            //this.scale.setTo(this.width, this.height);
            game.add.existing(this);
            //this.body.gravity.y = 200;
        }

        update() {
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.body.velocity.x = -this.velocity;
                /*
                if (this.scale.x == 1) {
                    this.scale.x = -1;
                }
                */
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.body.velocity.x = this.velocity;
                /*
                if (this.scale.x == 1) {
                    this.scale.x = -1;
                }
                */
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                this.body.velocity.y = -this.velocity;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                this.body.velocity.y = this.velocity;
            }

            /*
            if (this.game.input.keyboard.upDuration(Phaser.Keyboard.SPACEBAR, 10000)) {
                console.log('test');
                 
            } 
            */

            var spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            spacebar.onDown.add(function () {
                if (!this.spacebarPress) {
                    console.log('DOWN');
                    this.spacebarPress = true;
                }
            });
            spacebar.onUp.add(function () {
                if (this.spacebarPress) {
                    console.log('UP');
                    this.spacebarPress = false;
                }
            });
        }

        // Fonctions propres au player
        changeForm() {
            this.loadTexture('playerCircle', 0);
        }
    }
}
module SimpleGame {

    export class Player extends Phaser.Sprite {
         
        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, 'player', 0);
            //game.add.image(40, 100, 'player');
            this.anchor.setTo(0.5, 0.5);

            this.width = 10;
            this.height = 10;
            //this.animations.add('walk', [1, 2], 10, true);
            //this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);
            //game.physics.enable(this, Phaser.Physics.ARCADE);
            this.scale.setTo(this.width, this.height);
            game.add.existing(this);
            //this.body.gravity.y = 200;
        }

        create() {
            
            
        }

        update() {
            /*
            this.body.velocity.x = 0;

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                
                this.body.velocity.x = -200;
                this.animations.play('walk');

                if (this.scale.x == 1) {
                    this.scale.x = -1;
                }
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {

                this.body.velocity.x = 200;
                this.animations.play('walk');

                if (this.scale.x == -1) {
                    this.scale.x = 1;
                }
            }
            else {
                this.animations.frame = 0;
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                console.log('hello');
                this.body.velocity.y = -300;
                if (this.scale.y == -1) {
                    this.scale.y = 1;
                }
            }
            */
        }

    }

}
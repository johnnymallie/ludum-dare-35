module SimpleGame {

    export class Player extends Phaser.Sprite {
        protected velocity;
        constructor(game: Phaser.Game, x: number, y: number) {
            // Vitesse du personange
            this.velocity = 300;
            
            super(game, x, y, 'player', 0);
            //game.add.image(40, 100, 'player');
            this.anchor.setTo(0.5, 0.5);

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

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.body.velocity.x = -200;
                //this.animations.play('walk');
                /*
                if (this.scale.x == 1) {
                    this.scale.x = -1;
                }
                */
            } 

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.body.velocity.x = this.velocity;
               // this.animations.play('walk');
               /*
                if (this.scale.x == 1) {
                    this.scale.x = -1;
                }
                */
            } 


            if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                this.body.velocity.y = -this.velocity;
                // this.animations.play('walk');
                /*
                 if (this.scale.x == 1) {
                     this.scale.x = -1;
                 }
                 */
            } else {
                //this.body.velocity.y = 0;
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                this.body.velocity.y = this.velocity;
                // this.animations.play('walk');
                /*
                 if (this.scale.x == 1) {
                     this.scale.x = -1;
                 }
                 */
            } else {
               // this.body.velocity.y = 0;
            }
            /*
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                this.body.velocity.y = -this.velocity;
                if (this.scale.y == -1) {
                    this.scale.y = 1;
                }
            } 
            */


            /*

            if (this.cursor.left.isDown){
            this.player.body.velocity.x = -200;
            this.player.animations.play('left');
        }else if (this.cursor.right.isDown){
            this.player.body.velocity.x = 200;
            this.player.animations.play('right');
        } else {
            this.player.body.velocity.x = 0;
            this.player.animations.stop();
            this.player.frame = 0;
        }
        
        if (this.cursor.up.isDown && this.player.body.touching.down){
            this.jumpSound.play();
            this.player.body.velocity.y = -400;
        }
        */
        }

    }

}
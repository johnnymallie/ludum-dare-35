module SimpleGame {


    export class Enemy extends Phaser.Sprite {
        protected velocity;

        constructor(game: Phaser.Game) {
            super(game, null, null, 'enemy', 0);
            
            // Vitesse de l'ennemi
            this.velocity = 100;
            
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
            this.body.velocity.y = this.velocity;
        }
        // Fonctions public
        public killPlayer() {
            this.kill();
        }
    
    }

}
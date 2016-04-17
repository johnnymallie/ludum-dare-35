module SimpleGame {
    export class Enemy extends Phaser.Sprite {
        protected velocity;
        type;
        constructor(game: Phaser.Game, x:number, y:number,properties) {
            super(game, x, y, 'enemy', 0);
            
            // Vitesse de l'ennemi
            if (properties) {
                this.type = properties['type'];
            } else {
                this.velocity = 100;
                this.type = 'normal';
            }
            
            
            // Priorité dans la map
            //this.inputEnabled = true;
            //this.input.priorityID = 2;

            //game.add.image(40, 100, 'player');
            //this.anchor.setTo(0.5, 0.5);
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
            if (this.type == 'normal') {
                this.body.velocity.y = this.velocity;
            } else {
                if (this.type == 'still') {

                }
                if (this.type == 'left') {
                    this.body.position.x -= 2;
                } 
                if (this.type == 'right') {
                    this.body.position.x += 2;
                } 
                
            }
            
        }
    }
}
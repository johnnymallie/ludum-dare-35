module SimpleGame {
    export class Player extends Phaser.Sprite {

        protected velocity;
        protected forms;
        protected colors;
        protected actualForm;

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, 'playerTriangle', 0);
            // Vitesse du personange
            this.velocity = 300;
            
            this.forms = ['playerTriangle', 'playerCircle', 'playerSquare'];
            this.colors = ['yellow', 'blue', 'green'];
            // La 1ère forme du player est le triangle jaune
            this.actualForm = 0;
            
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
             
            var spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            //Self pas génial, trouver autre chose
            var self = this;
            spacebar.onDown.add(function () {
                if (!this.spacebarPress) {
                    //console.log(this);
                    self.changeForm();
                    this.spacebarPress = true;
                }
            });
            spacebar.onUp.add(function () {
                if (this.spacebarPress) {
                    this.spacebarPress = false;
                }
              
            });
        }
        
        // Fonctions propres au player
        protected changeForm() {
            this.actualForm++;
            if (this.actualForm > this.forms.length - 1) {
                this.actualForm = 0;
            }
            this.loadTexture(this.forms[this.actualForm], 0);
        }

        // Fonctions public
        public getForm() {
            return this.forms[this.actualForm];
        }

        public getCouleur() {
            return this.forms[this.actualForm];
        }

        public killPlayer() {
            this.kill();
        }
    }
}
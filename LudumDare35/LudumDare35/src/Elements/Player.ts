﻿module SimpleGame {
    export class Player extends Phaser.Sprite {

        velocity;
        forms;
        colors;
        actualForm;
        hud: SimpleGame.Hud;
        changeSound: Phaser.Sound;
        deathSound: Phaser.Sound;

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
            this.width = 48;
            this.height = 48;

            this.changeSound = game.add.audio('changeSound');
            this.deathSound = game.add.audio('deathSound');

            //this.animations.add('walk', [1, 2], 10, true);
            //this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);
            game.physics.enable(this, Phaser.Physics.ARCADE);
            //this.scale.setTo(this.width, this.height);
            game.add.existing(this);
           

            //Self pas génial, trouver autre chose
            //self = this;
        }

        update() {
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;
            //Self pas génial dans update, trouver autre chose
            var self = this;
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
            /*
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                this.body.velocity.y = -this.velocity;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                this.body.velocity.y = this.velocity;
            }
             */
            
            this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(function () {
                if (!this.spacebarPress) {
                    //console.log(this);
                    self.changeForm();
                    self.changeSound.play();
                    this.spacebarPress = true;
                }
            });
            this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onUp.add(function () {
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
            this.hud.switchForm(this.colors[this.actualForm]); 
            
        }

        // Fonctions public
        public getForm() {
            return this.forms[this.actualForm];
        }

        public getColor() {
            return this.colors[this.actualForm];
        }

        public killPlayer() {
            this.changeSound.stop();
            this.deathSound.play();
            //this.kill();
        }

        public setHud(hud: SimpleGame.Hud) {
            this.hud = hud;
        }
    }
}
module SimpleGame {
    export class Player extends Phaser.Sprite {

        velocity;
        forms;
        colors;
        actualForm;
        hud: SimpleGame.Hud;
        changeSound: Phaser.Sound;
        deathSound: Phaser.Sound;
        motorSound: Phaser.Sound;
        explosed: boolean;
        fire;
        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, 'playerYellow', 0);
            
            this.explosed = false;

            // Vitesse du personange
            this.velocity = 350;
            
            this.forms = ['playerYellow', 'playerBlue', 'playerGreen'];
            this.colors = ['yellow', 'blue', 'green'];
            // La 1ère forme du player est le triangle jaune
            this.actualForm = 0;
            
            game.physics.enable(this, Phaser.Physics.ARCADE);
            

            //game.add.image(40, 100, 'player');
            this.anchor.setTo(0.5, 0.5);
            this.width = 50;
            this.height = 43;

            this.fire = this.game.add.sprite(x, y + 22, 'fire');
            game.physics.enable(this.fire, Phaser.Physics.ARCADE);
            this.fire.anchor.setTo(0.5, 0);
            this.fire.animations.add('light');
            this.fire.animations.play('light', 10, true);
            this.fire.body.velocity.y = -180;

            this.changeSound = game.add.audio('changeSound');
            this.deathSound = game.add.audio('deathSound');
            this.motorSound = game.add.audio('motorSound');
            this.changeSound.volume = Game.global.volume;
            this.deathSound.volume = Game.global.volume;
            this.motorSound.volume = Game.global.volume - 0.4;
            this.motorSound.loop = true;
            //this.animations.add('walk', [1, 2], 10, true);
            //this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);
            
            //this.scale.setTo(this.width, this.height);
            game.add.existing(this);
           
            this.motorSound.play();
            //Self pas génial, trouver autre chose
            //self = this;
        }

        update() {
            this.body.velocity.x = 0;
            //this.fire.body.velocity.x = 0;
            //Self pas génial dans update, trouver autre chose
            var self = this;
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.body.velocity.x = -this.velocity;
               
                //this.fire.body.velocity.x = -this.velocity;
                /*
                if (this.scale.x == 1) {
                    this.scale.x = -1;
                }
                */
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.body.velocity.x = this.velocity; 
                //this.fire.body.velocity.x = this.velocity;
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
                if (!this.spacebarPress && !self.explosed) {
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

            this.fire.body.x = this.body.x+16;
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
            var x = this.position.x;
            var y = this.position.y;
            this.explosed = true;
            this.changeSound.stop();
            this.motorSound.stop();
            this.deathSound.play(); 
            this.kill();
            this.fire.kill();
            var explosion = this.game.add.sprite(x, y, 'explosion');
            explosion.anchor.setTo(0.5, 0.5);
            this.game.time.events.add(750, function () {
                explosion.kill();
            }, this);
            /*
            this.game.time.events.add(1000, function () {
                
            }, this);
            */
        }
        
        public stopSounds() {
            this.changeSound.stop();
            this.motorSound.stop();
        }

        public setHud(hud: SimpleGame.Hud) {
            this.hud = hud;
        }
    }
}
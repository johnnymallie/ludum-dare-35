module SimpleGame {

    export class MainMenu extends Phaser.State {

        background: Phaser.Sprite;
        logo: Phaser.Sprite;
        logo2: Phaser.Sprite;
        logo3: Phaser.Sprite;
        startSound;
        create() {
            this.startSound = this.game.add.audio('startSound');
            this.startSound.volume = Game.global.volume;

            this.background = this.add.sprite(0, 0, 'backgroundMenu');
            this.background.alpha = 0;

            this.logo = this.add.sprite(this.world.centerX, this.world.centerY -100, 'logo');
            this.logo.alpha = 0;
            this.logo.anchor.setTo(0.5, 0.5);

            this.logo2 = this.add.sprite(this.world.centerX, this.world.centerY, 'logo2');
            this.logo2.alpha = 0;
            this.logo2.anchor.setTo(0.5, 0.5);

            this.logo3 = this.add.sprite(this.world.centerX, this.world.centerY + 100, 'logo3');
            this.logo3.alpha = 0;
            this.logo3.anchor.setTo(0.5, 0.5);
            
            this.add.tween(this.background).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
            this.add.tween(this.logo).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
            this.game.time.events.add(2000, function () {
                this.add.tween(this.logo2).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
            }, this);
            this.game.time.events.add(3000, function () {
                this.add.tween(this.logo3).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
            }, this);
            this.input.onDown.addOnce(this.fadeOut, this);
        } 

        fadeOut() {
            this.startSound.play();
            /*
            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);
            */
            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            this.add.tween(this.logo2).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            this.add.tween(this.logo3).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
        
            tween.onComplete.add(this.startGame, this);
        }

        startGame() {

            this.game.state.start('SelectMap', true, false);

        }

    }

}
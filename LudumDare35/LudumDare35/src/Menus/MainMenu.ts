﻿module SimpleGame {

    export class MainMenu extends Phaser.State {

        background: Phaser.Sprite;
        logo: Phaser.Sprite;
        startSound;
        create() {
            this.startSound = this.game.add.audio('startSound');

            this.background = this.add.sprite(0, 0, 'backgroundMenu');
            this.background.alpha = 0;

            this.logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo');
            this.logo.alpha = 0;
            this.logo.anchor.setTo(0.5, 0.5);
            
            this.add.tween(this.background).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
            this.add.tween(this.logo).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
            
            this.input.onDown.addOnce(this.fadeOut, this);
        }

        fadeOut() {
            this.startSound.play();
            /*
            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);
            */
            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
        
            tween.onComplete.add(this.startGame, this);
        }

        startGame() {

            this.game.state.start('SelectMap', true, false);

        }

    }

}
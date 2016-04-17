module SimpleGame {

    export class Preloader extends Phaser.State {

        preloadBar: Phaser.Sprite; 

        preload() {
            // Set-up our preloader sprite
            // this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            // this.load.setPreloadSprite(this.preloadBar);
            this.load.image('backgroundMenu', 'assets/images/menus/backgroundMenu.png');
            this.load.image('logo', 'assets/images/menus/logo.png');
            this.load.image('playerTriangle', 'assets/images/elements/playerTriangle.png');
            this.load.image('playerCircle', 'assets/images/elements/playerCircle.png');
            this.load.image('playerSquare', 'assets/images/elements/playerSquare.png');
            this.load.image('enemy', 'assets/images/elements/enemy.png');
            this.load.image('hud', 'assets/images/menus/hud.png');

            this.load.audio('startSound', ['assets/sounds/effects/start.mp3', 'assets/sounds/effects/start.ogg']);
            this.load.audio('changeSound', ['assets/sounds/effects/change.mp3', 'assets/sounds/effects/change.ogg']);
            this.load.audio('deathSound', ['assets/sounds/effects/boom.mp3', 'assets/sounds/effects/boom.ogg']);
            this.load.audio('selectSound', ['assets/sounds/effects/select.mp3', 'assets/sounds/effects/select.ogg']);

        }

        create() {
            //var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            // tween.onComplete.add(this.startMainMenu, this);
            this.startMainMenu();
        }

        startMainMenu() {
            this.game.state.start('MainMenu', true, false);
            //this.game.state.start('Level1', true, false);

        }

    }

}
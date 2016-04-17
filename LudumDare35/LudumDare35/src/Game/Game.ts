module SimpleGame {
    export class Game extends Phaser.Game {

        private self = this;
        
        static global = {
            playerX: 140,
            playerY: 2500,
            screenWidth: 320,
            screenHeight: 500
        };

        constructor() {
            super(Game.global.screenWidth, Game.global.screenHeight, Phaser.AUTO, 'content', null);
            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('Level1', Level1, false);

            this.state.start('Boot');
        }
        preload() {
            this.load.image("decepticon", "decepticon.png");
        }
        render() {
            // This renders debug information about physics bodies
            // this.debug.game;
        }
    }
} 
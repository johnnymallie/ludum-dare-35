module SimpleGame {
    export class Game extends Phaser.Game {
        
        private self = this;
        
        static global = {
            playerX: 350,
            playerY: 450,
            screenWidth: 700,
            screenHeight: 500,
            forms: {
                n0: 'triangle',
                n1: 'circle',
                n2: 'square'
            }
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
            //this.debug.game;
        }
    }
} 
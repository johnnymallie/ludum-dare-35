module Castlevania {
    export class Game extends Phaser.Game {

        static global = {
            playerWidth: 130,
            playerHeight: 284,
            test: 200
        };

        constructor() {
            super(700, 500, Phaser.AUTO, 'content', null);

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
module SimpleGame {

    export class Boot extends Phaser.State {
        
        preload() {
            //this.load.image('preloadBar', 'assets/loader.png');
            this.load.audio('levelsMusic', ['assets/sounds/musics/levels.mp3', 'assets/sounds/musics/levels.ogg']);
        }

        create() {
            //Game.physics.startSystem(Phaser.Physics.ARCADE);
            //  Set the world (global) gravity
            //Game.physics.arcade.gravity.y = 500;
            //  Unless you specifically need to support multitouch I would recommend setting this to 1
            this.input.maxPointers = 1;
 
            //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
            this.stage.disableVisibilityChange = true;

            if (this.game.device.desktop) {
                //  If you have any desktop specific settings, they can go in here
                //this.stage.scale.pageAlignHorizontally = true;
            }
            else {
                //  Same goes for mobile settings.
            }
            
            Game.global.levelsMusic = this.add.audio('levelsMusic');
            Game.global.levelsMusic.loop = true;
            Game.global.levelsMusic.volume = Game.global.volume;
            this.game.state.start('Preloader', true, false);

        }

    }

}
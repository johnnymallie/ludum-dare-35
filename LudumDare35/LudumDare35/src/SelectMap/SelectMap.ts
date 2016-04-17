module SimpleGame {

    export class SelectMap extends Phaser.State {

        background: Phaser.Sprite;
        logo: Phaser.Sprite;
        map1: Phaser.Image;
        map2: Phaser.Image;
        map3: Phaser.Image;
        selectSound: Phaser.Sound;

        preload() {
            this.game.load.image('map1', 'assets/images/menus/map1.png');
            this.game.load.image('map2', 'assets/images/menus/map2.png');
            this.game.load.image('map3', 'assets/images/menus/map3.png');
            
        }

        create() {

            var map1Image = this.game.add.sprite(this.game.world.centerX, 100, 'map1');
            map1Image.anchor.set(0.5);
            map1Image.inputEnabled = true;
            map1Image.events.onInputDown.add(this.map1Listener, this);

            var map2Image = this.game.add.sprite(this.game.world.centerX, 200, 'map2');
            map2Image.anchor.set(0.5);
            map2Image.inputEnabled = true;
            map2Image.events.onInputDown.add(this.map2Listener, this);

            var map3Image = this.game.add.sprite(this.game.world.centerX, 300, 'map3');
            map3Image.anchor.set(0.5);
            map3Image.inputEnabled = true;
            map3Image.events.onInputDown.add(this.map3Listener, this);
            
            if (!Game.global.levelsMusic.isPlaying) {
                Game.global.levelsMusic.play();
            }
            this.selectSound = this.game.add.audio('selectSound');
            
        }

        map1Listener() {
            this.selectSound.play();
            this.game.state.start('Level1', true, false, ['map1']);
        }

        map2Listener() {
            this.selectSound.play();
            this.game.state.start('Level1', true, false, ['map2']);
        }

        map3Listener() {
            this.selectSound.play();
            this.game.state.start('Level1', true, false, ['map3']);
        }
    }

}
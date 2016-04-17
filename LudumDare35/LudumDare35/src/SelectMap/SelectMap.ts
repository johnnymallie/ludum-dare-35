module SimpleGame {

    export class SelectMap extends Phaser.State {

        background: Phaser.Sprite;
        logo: Phaser.Sprite;
        easy: Phaser.Image;
        medium: Phaser.Image;
        hard: Phaser.Image;

        preload() {
            this.game.load.image('easy', 'assets/images/menus/easy.png');
            this.game.load.image('medium', 'assets/images/menus/medium.png');
            this.game.load.image('hard', 'assets/images/menus/hard.png');
        }

        create() {

            var easyImage = this.game.add.sprite(this.game.world.centerX, 100, 'easy');
            easyImage.anchor.set(0.5);
            easyImage.inputEnabled = true;
            easyImage.events.onInputDown.add(this.easyListener, this);

            var mediumImage = this.game.add.sprite(this.game.world.centerX, 200, 'medium');
            mediumImage.anchor.set(0.5);
            mediumImage.inputEnabled = true;
            mediumImage.events.onInputDown.add(this.mediumListener, this);

            var hardImage = this.game.add.sprite(this.game.world.centerX, 300, 'hard');
            hardImage.anchor.set(0.5);
            hardImage.inputEnabled = true;
            hardImage.events.onInputDown.add(this.hardListener, this);
        }

        easyListener() {
            this.game.state.start('Level1', true, false, ['map2']);
        }

        mediumListener() {
            this.game.state.start('Level1', true, false, ['medium']);
        }

        hardListener() {
            this.game.state.start('Level1', true, false, ['hard']);
        }
    }

}
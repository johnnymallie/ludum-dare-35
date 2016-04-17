module SimpleGame {
    export class Hud extends Phaser.Sprite {
        protected circle: Phaser.Sprite;
        protected triangle: Phaser.Sprite;
        protected square: Phaser.Sprite;
        constructor(game: Phaser.Game, x:number, y:number) {
            super(game, x, y, 'hud', 0);
            this.fixedToCamera = true;
            game.add.existing(this);

            this.triangle = this.game.add.sprite(25, 25, 'playerTriangle');
            this.triangle.width = 25;
            this.triangle.height = 25;
            this.triangle.anchor.setTo(0.5, 0.5);
            this.triangle.fixedToCamera = true;  

            this.circle = this.game.add.sprite(225, 25, 'playerCircle');
            this.circle.width = 25;
            this.circle.height = 25;
            this.circle.anchor.setTo(0.5, 0.5);
            this.circle.fixedToCamera = true;  

            this.square = this.game.add.sprite(425, 25, 'playerSquare');
            this.square.width = 25;
            this.square.height = 25;
            this.square.anchor.setTo(0.5, 0.5);
            this.square.fixedToCamera = true;  
        }

        renderHud() {
            
        }
    }
}
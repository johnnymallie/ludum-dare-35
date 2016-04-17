module SimpleGame {
    export class Hud extends Phaser.Sprite {
        protected circle: Phaser.Sprite;
        protected triangle: Phaser.Sprite;
        protected square: Phaser.Sprite;
        protected places;

        constructor(game: Phaser.Game, x:number, y:number) {
            super(game, x, y, 'hud', 0);
            this.fixedToCamera = true;
            game.add.existing(this);

            this.places = [107,320,533];

            this.triangle = this.game.add.sprite(this.places[0], 25, 'playerTriangle');
            this.triangle.width = 25;
            this.triangle.height = 25;
            this.triangle.anchor.setTo(0.5, 0.5);
            this.triangle.fixedToCamera = true;

            this.circle = this.game.add.sprite(this.places[1], 25, 'playerCircle');
            this.circle.width = 25;
            this.circle.height = 25;
            this.circle.anchor.setTo(0.5, 0.5);
            this.circle.fixedToCamera = true;  

            this.square = this.game.add.sprite(this.places[2], 25, 'playerSquare');
            this.square.width = 25;
            this.square.height = 25;
            this.square.anchor.setTo(0.5, 0.5);
            this.square.fixedToCamera = true;  
        }

        public switchForm(color) {
            switch (color) {
                case 'yellow':
                    this.triangle.cameraOffset.x = this.places[0];
                    this.circle.cameraOffset.x = this.places[1];
                    this.square.cameraOffset.x = this.places[2];
                    break;
                case 'blue':
                    this.circle.cameraOffset.x = this.places[0];
                    this.square.cameraOffset.x = this.places[1];
                    this.triangle.cameraOffset.x = this.places[2];
                    break;
                case 'green':
                    this.square.cameraOffset.x = this.places[0];
                    this.triangle.cameraOffset.x = this.places[1];
                    this.circle.cameraOffset.x = this.places[2];
                    break;
            }       
        }
    }
}
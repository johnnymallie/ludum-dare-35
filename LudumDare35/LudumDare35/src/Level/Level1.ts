module SimpleGame {

    export class Level1 extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        player: SimpleGame.Player;
        platform;
        map: Phaser.Tilemap;
        
        preload() {
            console.log('tilemap');
            this.load.tilemap('level', 'assets/images/levels/level1/map1.json', null, Phaser.Tilemap.TILED_JSON);
            this.load.image('player', 'assets/images/elements/playerTriangle.png');
        }

        create() {
            this.platform = this.add.image(0, 0);
            //this.background = this.add.sprite(0, 0, 'level1');

            //Physics doesn't work
            //Game.physics.enable(this, Phaser.Physics.ARCADE);

            /*this.music = this.add.audio('music', 1, false);
            this.music.play();
            */
            this.player = new Player(this.game, Game.global.playerX, Game.global.playerY);
           
            this.map = this.add.tilemap('level');

            this.map.addTilesetImage('Calque de Tile 1', 'tiles');            
        }

    }

} 
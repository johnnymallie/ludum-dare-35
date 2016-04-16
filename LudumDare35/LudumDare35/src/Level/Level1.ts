module SimpleGame {

    export class Level1 extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        player: SimpleGame.Player;
        platform;
        map: Phaser.Tilemap;
        layer: Phaser.TilemapLayer;
        
        preload() {
            console.log('tilemap');
            this.load.tilemap('level', 'assets/images/levels/level1/map1.json', null, Phaser.Tilemap.TILED_JSON);
            this.load.image('tileset', 'assets/images/levels/level1/tileset.png');
            this.load.image('player', 'assets/images/elements/playerTriangle.png');
        }

        create() {
            this.platform = this.add.image(0, 0);
            //this.background = this.add.sprite(0, 0, 'level1');

            //Physics doesn't work
            //this.game.physics.startSystem(Phaser.Physics.ARCADE);

            /*this.music = this.add.audio('music', 1, false);
            this.music.play();
            */
            this.player = new Player(this.game, Game.global.playerX, Game.global.playerY);
           
            this.map = this.add.tilemap('level');
            console.log(this.map.height);
            this.map.addTilesetImage('tileset'); 
            
            this.layer = this.map.createLayer('Collision');

            this.layer.resizeWorld();     
             
        }

        render() {
            this.game.debug.text('Height : ' + this.map.height, 32, 32, 'rgb(255,255,255)');
        }

    }

} 
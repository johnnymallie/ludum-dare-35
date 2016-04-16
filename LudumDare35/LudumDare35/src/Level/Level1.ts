module SimpleGame {

    export class Level1 extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        player: SimpleGame.Player;
        platform;
        map: Phaser.Tilemap;
        layer: Phaser.TilemapLayer;
        layerWall = Phaser.TilemapLayer;
        
        preload() {
            console.log('tilemap');
            this.load.tilemap('map', 'assets/images/levels/level1/map2.json', null, Phaser.Tilemap.TILED_JSON);
            this.load.image('tiles', 'assets/images/levels/level1/tileset.png');
            this.load.image('playerTriangle', 'assets/images/elements/playerTriangle.png');
            this.load.image('playerCircle', 'assets/images/elements/playerCircle.png');
        }

        create() { 
            this.platform = this.add.image(0, 0);
            //this.background = this.add.sprite(0, 0, 'level1');

            //Physics doesn't work
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            /*this.music = this.add.audio('music', 1, false);
            this.music.play();
            */
            
           
            this.map = this.add.tilemap('map');
            console.log(this.map.height);
            this.map.addTilesetImage('tileset','tiles'); 
            
            this.layer = this.map.createLayer('render');

            this.layer = this.map.createLayer('wall');
            console.log(this.map);
            
            this.layer.resizeWorld();
            //this.layer.fixedToCamera = false;

            this.game.camera.y = 2560;
             
            this.map.setCollisionBetween(1, 10000, true,'wall');

            this.player = new Player(this.game, Game.global.playerX, Game.global.playerY);
            
        }

        render() {
            this.game.debug.text('Height : ' + this.map.height, 32, 32, 'rgb(255,255,255)');
        }

        update() {
            this.game.camera.y -= 1;
            this.player.y -= 1;
            //this.game.physics.arcade.collide(this.player, this.layer,this.test, null, this);
            this.game.physics.arcade.overlap(this.player, this.layer, this.test,null,this)
        }

        test(player, layer) {
            console.log('collision');
        }

    }

} 
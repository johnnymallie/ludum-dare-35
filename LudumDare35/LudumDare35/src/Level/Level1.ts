module SimpleGame {

    export class Level1 extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        player: SimpleGame.Player;
        platform;
        map: Phaser.Tilemap;
        green: Phaser.TilemapLayer;
        hud: SimpleGame.Hud;
        mapFile;
        enemies;
        mapName;

        init(mapName) {
            this.mapName = mapName;
            var stringName = String(mapName);
            this.mapFile = 'assets/images/levels/level1/' + stringName + '.json';
           
        }
        
        preload() {
           
            this.load.tilemap('map', this.mapFile, null, Phaser.Tilemap.TILED_JSON);
            //this.load.tilemap('map', 'assets/images/levels/level1/map2.json', null, Phaser.Tilemap.TILED_JSON);
            this.load.image('tiles', 'assets/images/levels/level1/tileset.png');
            
            this.game.time.advancedTiming = true;
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
            //console.log(this.map.height);
            this.map.addTilesetImage('tileset','tiles'); 
            
            this.green = this.map.createLayer('green');
            this.green.resizeWorld();

            this.map.setCollisionBetween(1, 10);

            // Rajout du joueur
            this.player = new Player(this.game, (this.map.widthInPixels/2), this.map.heightInPixels - 80);
            
            //Rajout d'un groupe d'ennemis

            this.enemies = this.game.add.group();
            /*this.enemies.add(new Enemy(this.game, 50, 150));
            this.enemies.add(new Enemy(this.game, 120, 150));
            this.enemies.add(new Enemy(this.game, 190, 150));
            this.enemies.add(new Enemy(this.game, 260, 150));*/

            //cool mais pas top
            //this.map.createFromObjects('enemy', 4, 'enemy', 0, true, false, this.enemies);
            //mieux
            for (var enemy in this.map.objects['enemy']) {
                console.log(this.map.objects['enemy'][enemy]);
                this.enemies.add(new Enemy(this.game, this.map.objects['enemy'][enemy].x, this.map.objects['enemy'][enemy].y, this.map.objects['enemy'][enemy].properties));
            } 

           // console.log(this.enemies);
            
            this.game.camera.y = this.map.heightInPixels;
            //this.game.camera.y = 2560;
            //this.game.camera.follow(this.player);
            
            // Rajout du HUD
            this.hud = new Hud(this.game, 0, 0);
            this.player.setHud(this.hud);
        }

        render() {
            /*
            this.game.debug.text('Height : ' + this.map.height, 32, 32, 'rgb(255,255,255)');
            this.game.debug.body(this.player);
            this.game.debug.text(String(this.game.time.fps), 2, 14, "#00ff00");
            */
        }

        update() {
            this.game.camera.y -= 2;
            this.player.body.position.y -= 2;
            if (this.player.body.position.x <= 0) {
                this.player.body.position.x = 0;
            }
            if (this.player.body.position.x >= (this.map.widthInPixels-this.player.width)) {
                this.player.body.position.x = this.map.widthInPixels - this.player.width;
            }
            this.game.physics.arcade.overlap(this.player, this.green, this.test, this.checkColor, this);
            
            this.game.physics.arcade.overlap(this.player, this.enemies, this.test, null, this);
            //Zone de fin 
            if (this.player.body.position.y < 0) {
                
                this.game.state.start('SelectMap');
            }
        }

        checkColor(player, collision) {
            var colorOk = false;
            var colorPlayer = String(player.getColor());
            if (collision.index == '1' && (colorPlayer == 'green' || colorPlayer == 'blue') ) {
                colorOk = true;
            }
            if (collision.index == '2' && (colorPlayer == 'yellow' || colorPlayer == 'blue')) {
                colorOk = true;
            }
            if (collision.index == '3' && (colorPlayer == 'green' || colorPlayer == 'yellow')) {
                colorOk = true;
            }

            return colorOk;

        }

        test(player, layer) {
            this.player.killPlayer();
            this.game.state.start('Level1', true, false, [this.mapName]);
        }

    }
} 
class SimpleGame {

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }

    game: Phaser.Game;

    preload() {
        this.game.load.image('logo', 'phaser2.png');
        this.game.load.tilemap('map', 'tilemap/map1.json', null, Phaser.Tilemap.TILED_JSON);

    }

    create() {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);

        this.game.stage.backgroundColor = '#787878';

       var map;
       map = this.game.add.tilemap('map');

        //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
        //  The second parameter maps this name to the Phaser.Cache key 'tiles'
        map.addTilesetImage('Calque de Tile 1', 'tiles');
    
        //  Creates a layer from the World1 layer in the map data.
        //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
        var layer;
        layer = map.createLayer('Collision');

        //  This resizes the game world to match the layer dimensions
        layer.resizeWorld();

    }

}

window.onload = () => {

    var game = new SimpleGame();

};
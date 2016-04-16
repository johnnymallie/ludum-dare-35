window.onload = function () {
    var game = new SimpleGame.Game();
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SimpleGame;
(function (SimpleGame) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.preload = function () {
            //this.load.image('preloadBar', 'assets/loader.png');
        };
        Boot.prototype.create = function () {
            console.log('Boot');
            //Game.physics.startSystem(Phaser.Physics.ARCADE);
            //  Set the world (global) gravity
            //Game.physics.arcade.gravity.y = 500;
            //  Unless you specifically need to support multitouch I would recommend setting this to 1
            this.input.maxPointers = 1;
            //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
            this.stage.disableVisibilityChange = true;
            if (this.game.device.desktop) {
            }
            else {
            }
            this.game.state.start('Preloader', true, false);
        };
        return Boot;
    })(Phaser.State);
    SimpleGame.Boot = Boot;
})(SimpleGame || (SimpleGame = {}));
var SimpleGame;
(function (SimpleGame) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy() {
            _super.apply(this, arguments);
        }
        return Enemy;
    })(Phaser.Sprite);
    SimpleGame.Enemy = Enemy;
})(SimpleGame || (SimpleGame = {}));
var SimpleGame;
(function (SimpleGame) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            _super.call(this, game, x, y, 'player', 0);
            //game.add.image(40, 100, 'player');
            this.anchor.setTo(0.5, 0.5);
            this.width = 10;
            this.height = 10;
            //this.animations.add('walk', [1, 2], 10, true);
            //this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);
            //game.physics.enable(this, Phaser.Physics.ARCADE);
            this.scale.setTo(this.width, this.height);
            game.add.existing(this);
            //this.body.gravity.y = 200;
        }
        Player.prototype.create = function () {
        };
        Player.prototype.update = function () {
            /*
            this.body.velocity.x = 0;

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                
                this.body.velocity.x = -200;
                this.animations.play('walk');

                if (this.scale.x == 1) {
                    this.scale.x = -1;
                }
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {

                this.body.velocity.x = 200;
                this.animations.play('walk');

                if (this.scale.x == -1) {
                    this.scale.x = 1;
                }
            }
            else {
                this.animations.frame = 0;
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                console.log('hello');
                this.body.velocity.y = -300;
                if (this.scale.y == -1) {
                    this.scale.y = 1;
                }
            }
            */
        };
        return Player;
    })(Phaser.Sprite);
    SimpleGame.Player = Player;
})(SimpleGame || (SimpleGame = {}));
var SimpleGame;
(function (SimpleGame) {
    var Shoot = (function (_super) {
        __extends(Shoot, _super);
        function Shoot() {
            _super.apply(this, arguments);
        }
        return Shoot;
    })(Phaser.Sprite);
    SimpleGame.Shoot = Shoot;
})(SimpleGame || (SimpleGame = {}));
var SimpleGame;
(function (SimpleGame) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, Game.global.screenWidth, Game.global.screenHeight, Phaser.AUTO, 'content', null);
            this.self = this;
            this.state.add('Boot', SimpleGame.Boot, false);
            this.state.add('Preloader', SimpleGame.Preloader, false);
            this.state.add('MainMenu', SimpleGame.MainMenu, false);
            this.state.add('Level1', SimpleGame.Level1, false);
            this.state.start('Boot');
        }
        Game.prototype.preload = function () {
            this.load.image("decepticon", "decepticon.png");
        };
        Game.prototype.render = function () {
            // This renders debug information about physics bodies
            //this.debug.game;
        };
        Game.global = {
            playerX: 350,
            playerY: 250,
            screenWidth: 700,
            screenHeight: 500
        };
        return Game;
    })(Phaser.Game);
    SimpleGame.Game = Game;
})(SimpleGame || (SimpleGame = {}));
var SimpleGame;
(function (SimpleGame) {
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        function Level1() {
            _super.apply(this, arguments);
        }
        Level1.prototype.preload = function () {
            console.log('tilemap');
            this.load.tilemap('level', 'assets/images/levels/level1/map1.json', null, Phaser.Tilemap.TILED_JSON);
            this.load.image('player', 'assets/images/elements/playerTriangle.png');
        };
        Level1.prototype.create = function () {
            this.platform = this.add.image(0, 0);
            //this.background = this.add.sprite(0, 0, 'level1');
            //Physics doesn't work
            //Game.physics.enable(this, Phaser.Physics.ARCADE);
            /*this.music = this.add.audio('music', 1, false);
            this.music.play();
            */
            this.player = new SimpleGame.Player(this.game, SimpleGame.Game.global.playerX, SimpleGame.Game.global.playerY);
            this.map = this.add.tilemap('level');
            this.map.addTilesetImage('Calque de Tile 1', 'tiles');
        };
        return Level1;
    })(Phaser.State);
    SimpleGame.Level1 = Level1;
})(SimpleGame || (SimpleGame = {}));
var SimpleGame;
(function (SimpleGame) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.preload = function () {
            //  Set-up our preloader sprite
            //this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            // this.load.setPreloadSprite(this.preloadBar);
            //  Load our actual games assets
            //this.load.image('titlepage', 'assets/titlepage.jpg');
            //this.load.image('logo', 'assets/logo.png');
            //this.load.audio('music', 'assets/title.mp3', true);
            //this.load.spritesheet('simon', 'assets/simon.png', 58, 96, 5);
            //this.load.spritesheet('knight', 'assets/knight2.png', 48, 96, 3);
            //this.load.image('level1', 'assets/level1.png');
            //this.load.image('platform', 'assets/platform.png');
        };
        Preloader.prototype.create = function () {
            //var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            // tween.onComplete.add(this.startMainMenu, this);
            this.startMainMenu();
        };
        Preloader.prototype.startMainMenu = function () {
            //this.game.state.start('MainMenu', true, false);
            this.game.state.start('Level1', true, false);
        };
        return Preloader;
    })(Phaser.State);
    SimpleGame.Preloader = Preloader;
})(SimpleGame || (SimpleGame = {}));
var SimpleGame;
(function (SimpleGame) {
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            _super.apply(this, arguments);
        }
        MainMenu.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'titlepage');
            this.background.alpha = 0;
            this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);
            this.add.tween(this.background).to({ alpha: 1 }, 2000, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);
            this.input.onDown.addOnce(this.fadeOut, this);
        };
        MainMenu.prototype.fadeOut = function () {
            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startGame, this);
        };
        MainMenu.prototype.startGame = function () {
            this.game.state.start('Level1', true, false);
        };
        return MainMenu;
    })(Phaser.State);
    SimpleGame.MainMenu = MainMenu;
})(SimpleGame || (SimpleGame = {}));
//# sourceMappingURL=app.js.map
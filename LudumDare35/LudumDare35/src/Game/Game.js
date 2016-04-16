var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SimpleGame;
(function (SimpleGame) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 700, 500, Phaser.AUTO, 'content', null);
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
            playerWidth: 130,
            playerHeight: 284,
            test: 200
        };
        return Game;
    })(Phaser.Game);
    SimpleGame.Game = Game;
})(SimpleGame || (SimpleGame = {}));
//# sourceMappingURL=Game.js.map
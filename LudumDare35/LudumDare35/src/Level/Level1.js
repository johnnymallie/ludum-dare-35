var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SimpleGame;
(function (SimpleGame) {
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        function Level1() {
            _super.apply(this, arguments);
        }
        Level1.prototype.create = function () {
            this.platform = this.add.image(0, 0);
            //this.background = this.add.sprite(0, 0, 'level1');
            //Physics doesn't work
            //Game.physics.enable(this, Phaser.Physics.ARCADE);
            this.music = this.add.audio('music', 1, false);
            this.music.play();
            this.player = new SimpleGame.Player(this.game, SimpleGame.Game.global.playerWidth, SimpleGame.Game.global.playerHeight);
        };
        return Level1;
    })(Phaser.State);
    SimpleGame.Level1 = Level1;
})(SimpleGame || (SimpleGame = {}));
//# sourceMappingURL=Level1.js.map
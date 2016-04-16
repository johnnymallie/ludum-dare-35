var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SimpleGame;
(function (SimpleGame) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            //super(game, x, y, 'simon', 0);
            _super.call(this, game, x, y, 'knight', 0);
            this.anchor.setTo(0.5, 0);
            this.animations.add('walk', [1, 2], 10, true);
            //this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);
            game.physics.enable(this, Phaser.Physics.ARCADE);
            game.add.existing(this);
            this.body.gravity.y = 200;
        }
        Player.prototype.update = function () {
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
        };
        return Player;
    })(Phaser.Sprite);
    SimpleGame.Player = Player;
})(SimpleGame || (SimpleGame = {}));
//# sourceMappingURL=Player.js.map
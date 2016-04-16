var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
//# sourceMappingURL=Enemy.js.map
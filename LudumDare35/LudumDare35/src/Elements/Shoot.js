var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
//# sourceMappingURL=Shoot.js.map
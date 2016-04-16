﻿module Castlevania {

    export class Level1 extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        player: Castlevania.Player;
        platform;

        create() {
            this.platform = this.add.image(0, 0);
            //this.background = this.add.sprite(0, 0, 'level1');

            Game.physics.enable(this, Phaser.Physics.ARCADE);

            this.music = this.add.audio('music', 1, false);
            this.music.play();

            this.player = new Player(this.game, Game.global.playerWidth, Game.global.playerHeight);
            
        }

    }

} 
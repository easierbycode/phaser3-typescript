import { AnimationHelper } from '../helpers/animation-helper';

export class BootScene extends Phaser.Scene {
  // helpers
  private animationHelperInstance: AnimationHelper;

  // graphics
  private loadingBar: Phaser.GameObjects.Graphics;
  private progressBar: Phaser.GameObjects.Graphics;

  constructor() {
    super({
      key: 'BootScene'
    });
  }

  preload(): void {
    // set the background, create the loading and progress bar and init values
    // with the global data manager (= this.registry)
    this.cameras.main.setBackgroundColor(0x000000);
    this.createLoadingGraphics();

    // pass value to change the loading bar fill
    this.load.on(
      'progress',
      function (value: number) {
        this.progressBar.clear();
        this.progressBar.fillStyle(0x88e453, 1);
        this.progressBar.fillRect(
          this.cameras.main.width / 4,
          this.cameras.main.height / 2 - 16,
          (this.cameras.main.width / 2) * value,
          16
        );
      },
      this
    );

    // delete bar graphics, when loading complete
    this.load.on(
      'complete',
      function () {
        this.animationHelperInstance = new AnimationHelper(
          this,
          this.cache.json.get('animationJSON')
        );
        this.progressBar.destroy();
        this.loadingBar.destroy();
      },
      this
    );

    // load our package
    // this.load.pack('preload', require('../../assets/pack.json'), 'preload');
    [
      {
        "type": "bitmapFont",
        "key": "font",
        "textureURL": require('../../assets/font/superMarioLand.png'),
        "fontDataURL": require('../../assets/font/superMarioLand.fnt'
      },
      {
        "type": "tilemapTiledJSON",
        "key": "level1",
        "url": require('../../assets/maps/level1.json'
      },
      {
        "type": "tilemapTiledJSON",
        "key": "level1Room1",
        "url": require('../../assets/maps/level1room1.json'
      },
      {
        "type": "tilemapTiledJSON",
        "key": "level1Room2",
        "url": require('../../assets/maps/level1room2.json'
      },
      {
        "type": "image",
        "key": "tiles",
        "url": require('../../assets/tiles/tiles.png'
      },
      {
        "type": "json",
        "key": "animationJSON",
        "url": require('../../assets/animations/animations.json'
      },
      {
        "type": "spritesheet",
        "key": "mario",
        "url": require('../../assets/sprites/mario.png'),
        "frameConfig": {
          "frameWidth": 16,
          "frameHeight": 16
        }
      },
      {
        "type": "spritesheet",
        "key": "box",
        "url": require('../../assets/sprites/box.png'),
        "frameConfig": {
          "frameWidth": 8,
          "frameHeight": 8
        }
      },
      {
        "type": "spritesheet",
        "key": "brick",
        "url": require('../../assets/sprites/brick.png'),
        "frameConfig": {
          "frameWidth": 8,
          "frameHeight": 8
        }
      },
      {
        "type": "spritesheet",
        "key": "rotatingCoin",
        "url": require('../../assets/sprites/rotatingCoin.png'),
        "frameConfig": {
          "frameWidth": 8,
          "frameHeight": 8
        }
      },
      {
        "type": "spritesheet",
        "key": "coin",
        "url": require('../../assets/sprites/coin.png'),
        "frameConfig": {
          "frameWidth": 8,
          "frameHeight": 8
        }
      },
      {
        "type": "spritesheet",
        "key": "goomba",
        "url": require('../../assets/sprites/goomba.png'),
        "frameConfig": {
          "frameWidth": 8,
          "frameHeight": 8
        }
      },
      {
        "type": "image",
        "key": "platform",
        "url": require('../../assets/images/platform.png'
      },
      {
        "type": "image",
        "key": "title",
        "url": require('../../assets/images/title.png'
      },
      {
        "type": "spritesheet",
        "key": "coin2",
        "url": require('../../assets/collectibles/coin2.png'),
        "frameConfig": {
          "frameWidth": 8,
          "frameHeight": 8
        }
      },
      {
        "type": "spritesheet",
        "key": "flower",
        "url": require('../../assets/collectibles/flower.png'),
        "frameConfig": {
          "frameWidth": 8,
          "frameHeight": 8
        }
      },
      {
        "type": "spritesheet",
        "key": "heart",
        "url": require('../../assets/collectibles/heart.png'),
        "frameConfig": {
          "frameWidth": 8,
          "frameHeight": 8
        }
      },
      {
        "type": "spritesheet",
        "key": "mushroom",
        "url": require('../../assets/collectibles/mushroom.png'),
        "frameConfig": {
          "frameWidth": 8,
          "frameHeight": 8
        }
      },
      {
        "type": "spritesheet",
        "key": "star",
        "url": require('../../assets/collectibles/star.png'),
        "frameConfig": {
          "frameWidth": 8,
          "frameHeight": 8
        }
      }
    ].forEach( c => this.load[c.type](c) )
  }

  update(): void {
    this.scene.start('MenuScene');
  }

  private createLoadingGraphics(): void {
    this.loadingBar = this.add.graphics();
    this.loadingBar.fillStyle(0xffffff, 1);
    this.loadingBar.fillRect(
      this.cameras.main.width / 4 - 2,
      this.cameras.main.height / 2 - 18,
      this.cameras.main.width / 2 + 4,
      20
    );
    this.progressBar = this.add.graphics();
  }
}

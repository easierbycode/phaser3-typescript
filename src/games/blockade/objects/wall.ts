/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 - 2020 digitsensitive
 * @description  Blockade: Wall
 * @license      {@link https://github.com/digitsensitive/phaser3-typescript/blob/master/LICENSE.md | MIT License}
 */

export class Wall extends Phaser.GameObjects.Image {
  constructor(params) {
    super(params.scene, params.x, params.y, params.key);
    this.setOrigin(0.5, 0.5);
    this.setAlpha(Phaser.Math.RND.between(0.01, 0.4));
    params.scene.add.existing(this);
  }
  update(): void {
    if (this.alpha < 1) {
      this.setAlpha(this.alpha + 0.005);
    } else {
      this.setAlpha(1);
    }
  }
}

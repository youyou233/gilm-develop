/**
 * @author uu
 * @file footerUI控制
 */
cc.Class({
  extends: cc.Component,

  properties: {
    unChoosedSprites: [cc.SpriteFrame],
    choosedSprites: [cc.SpriteFrame],
  },
  init(UI) {
    this._UI = UI
  },
  onOpenShip() {
    this._UI.onPageOpen(1)
  }
})
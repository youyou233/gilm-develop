/**
 * @author uu
 * @file footerUI控制
 */
cc.Class({
  extends: cc.Component,

  properties: {
    buttonNodes: [cc.Node],
    unChoosedSprites: [cc.SpriteFrame],
    choosedSprites: [cc.SpriteFrame],
    blackBg: cc.SpriteFrame,
    whiteBg: cc.SpriteFrame
  },
  init(UI) {
    this._UI = UI
    this.changeAllSpriteToBefore()
  },
  onFooterButtonPressed(event, customEventData) {
    this.changeAllSpriteToBefore()
    switch (customEventData) {
      case '0':
        return this.onOpenShip()
      case '1':
        return this.onOpenGalaxy()
      case '2':
        return this.onOpenMap()
    }
  },
  onOpenShip() {
    this._UI.onPageOpen(1)
    this.changeSpriteToTouched(0)
  },
  onOpenGalaxy() {
    this._UI.onPageOpen(2)
    this.changeSpriteToTouched(1)
  },
  onOpenMap() {
    this._UI.onPageOpen(3)
    this.changeSpriteToTouched(2)
  },
  changeAllSpriteToBefore() {
    for (let i = 0; i < 3; i++) {
      this.buttonNodes[i].getChildByName('sprite').getComponent(cc.Sprite).spriteFrame = this.unChoosedSprites[i]
      this.buttonNodes[i].getComponent(cc.Sprite).spriteFrame = this.blackBg
    }
  },
  changeSpriteToTouched(num) {
    this.buttonNodes[num].getChildByName('sprite').getComponent(cc.Sprite).spriteFrame = this.choosedSprites[num]
    this.buttonNodes[num].getComponent(cc.Sprite).spriteFrame = this.whiteBg
  }
})
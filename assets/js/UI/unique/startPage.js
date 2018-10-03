/**
 * @author uu
 * @file 开始页面动画控制
 */
cc.Class({
  extends: cc.Component,

  properties: {
    status: 0, //0为无法触摸 1为可以触摸

    buttons: [cc.Node],
  },
  init(controller) {
    this._controller = controller
  },
  onShowPage() {
    // 播放动画 或者动作
    this.node.getComponent(cc.Animation).play('startPageAni1')
    this.roteButtons()
  },
  onButtonPressed(event, customEventData) {
    console.log("para is: ", customEventData);
    if (this.status == 1) {
      switch (customEventData) {
        case '1':
          this._controller.onGameStart()
          break;
        case '2':
          break;
        case '3':
          break;
      }
    }
  },
  onNextAni() {
    cc.log('nextAni')
    this.status = 1
    this.node.getComponent(cc.Animation).play('startPageAni2')
  },
  roteButtons() {
    let action0 = cc.repeatForever(cc.rotateBy(1, 180, 180))
    let action1 = cc.repeatForever(cc.rotateBy(1, 180, 180))
    let action2 = cc.repeatForever(cc.rotateBy(1, 180, 180))
    this.buttons[0].getChildByName('bg').runAction(action0)
    this.buttons[1].getChildByName('bg').runAction(action1)
    this.buttons[2].getChildByName('bg').runAction(action2)
  }
})
/**
 * @author uu
 * @file 剧情按钮控制
 */
cc.Class({
  extends: cc.Component,
  properties: {
    labelNode: cc.Label,
    labelBG: cc.Sprite,
  },
  init(eventController, data) {
    this._eventController = eventController
    this.bindText(data.content)
    // 写个判断 判断按钮按下之后的事件
    this.data = data


  },
  // onLoad () {},
  bindText(string) {
    this.labelNode.string = string
    this.changeBGSize(string)
  },
  changeBGSize(string) {
    // 根据文字的多少改变背景的大小
  },
  start() {
    // 可以考虑加个动画
  },
  onButtonPress() {
    this._eventController.onChooseButtonPressed(this.data)
  }
});
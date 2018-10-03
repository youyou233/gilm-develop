/**
 * @author uu
 * @file 控制准备页面
 */
cc.Class({
  extends: cc.Component,

  properties: {
    progress: 0,
    pages: [cc.Node],
    pagesCPN: [require('PSPage')],

    skipButton: cc.Node,
  },
  init(controller) {
    this._controller = controller
    for (let i = 0; i < this.pagesCPN.length; i++) {
      this.pagesCPN[i].init(this)
    }
  },
  onLoad() {
    this.progress = 0
    this.showNextPage()
  },
  onShowSkipButton() {
    this.skipButton.active = true
    // TODO:加一个闪烁的动画
  },
  showNextPage() {
    this.closeAllPage()
    this.progress++
    // 检查是否已经播放完所有页面
    if (this.progress > this.pages.length) {
      this._controller.onStartPage()
      return
    }
    this.pages[this.progress - 1].active = true
    this.skipButton.active = false
    // 获取页面动画
    this.pages[this.progress - 1].getComponent(cc.Animation).play()
  },
  closeAllPage() {
    for (let i = 0; i < this.pages.length; i++) {
      this.pages[i].active = false
    }
  }
})
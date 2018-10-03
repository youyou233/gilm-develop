/**
 * @author uu
 * @file 加载页面组件
 */
cc.Class({
  extends: cc.Component,

  properties: {

  },
  init(PScontroller) {
    this._PScontroller = PScontroller
  },
  showNextPage() {
    this._PScontroller.showNextPage()
  }
})
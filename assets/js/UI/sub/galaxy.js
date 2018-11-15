/**
 * @author uu
 * @file 单个星系
 */
cc.Class({
  extends: cc.Component,

  properties: {
    data: '',
  },
  init(map, data) {
    this._map = map
    this._UI = map._UI
    this.data = data
    this.setGalaxyPos()
    // 按钮绑定
  },
  setGalaxyPos() {
    this.node.setPosition(this.data.pos.x, this.data.pos.y)
  },
  onTouchGalaxy() {
    cc.log('用户点击了星系:', this.data)
    this._map.onToNextGalaxy(this.node,this.data)
  }
})
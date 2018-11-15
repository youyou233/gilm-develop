/**
 * @author uu
 * @file 单个星球
 */
cc.Class({
    extends: cc.Component,
  
    properties: {
      data: '',
    },
    init(galaxy, data) {
      this._galaxy = galaxy
      this._UI = galaxy._UI
      this.data = data
      this.setStarPos()
      // 按钮绑定
    },
    setStarPos() {
      this.node.setPosition(this.data.pos.x, this.data.pos.y)
    },
    // 当碰撞的时候
  })
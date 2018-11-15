/**
 * @author uu
 * @file starUI控制
 * @todo 动态生成地图
 * @todo 更新玩家位置
 * @todo 点击星球进行移动
 */
cc.Class({
  extends: cc.Component,

  properties: {
    starPrefab: cc.Prefab,
    starSpriteFrame: [cc.SpriteFrame],

    player: cc.Node,

    Xspeed: 0,
    Yspeed: 0,
  },
  init(UI) {
    this._UI = UI
    this.createStarPool()
    this.starPoolLength = 10
  },
  createStarPool() {
    this.starPool = new cc.NodePool()
    for (let i = 0; i < this.starPoolLength; i++) {
      let star = cc.instantiate(this, starPrefab)
      this.starPool.put(star)
    }
  },
  // --------------更新视图------------
  updateGalaxy(data) {
    this.data = data
    for (let i = 0; i < data.star.length; i++) {
      if (this.starPool.size() > 0) {
        var star = this.starPool.get()
      } else {
        var star = cc.instantiate(this.starPrefab)
      }
      star.getComponent('star').init(this, data.star[i])
    }
  },
  onTouched() {
    // 获取触摸点 然后移动
    // todo 生成一个目标位标
    // 计算角度 生成speed
  },
  // -----------------移动----------------
  update() {
    // this.player.x += this.Xspeed
    // this.player.y += this.Yspeed
  }
})
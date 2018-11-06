/**
 * @author uu
 * @file mapUI控制
 * @todo 动态生成地图
 * @todo 更新玩家位置
 * @todo 动态更新地图
 * @todo 点击地图上星系进行旅行
 * @todo 视角范围暂时不做
 */
cc.Class({
  extends: cc.Component,

  properties: {
    galaxyPerfab: cc.Prefab,
    galaxySpriteFrame: [cc.SpriteFrame],

    playerPerfab: cc.Prefab,
  },
  init(UI) {
    this._UI = UI
    this._game = UI._game
    this.galaxyPoolLength = 30
  },
  createGalaxyPool() {
    this.galaxyPool = new cc.NodePool()
    for (let i = 0; i < this.galaxyPoolLength; i++) {
      let galaxy = cc.instantiate(this.galaxyPerfab)
      this.galaxyPool.put(galaxy)
    }
  },
  // ----------------更新视图---------------
  updateMap() {
    this.mapData = this._game.mapData
    for (let i = 0; i < this.mapData.length; i++) {
      for (let j = 0; j < this.mapData[i].length; j++) {

      }
    }
  },
  setGalaxyPos(target, position, data) {
    
  },
  updataPlayerPos(pos) {
    if (!pos) {
      if (this._game.gameData) {
        if (this._game.gameData.postion.x == 0) {
          cc.log('未初始化玩家位置')
          this.randomPlayerPosition()
        }
      } else {
        cc.log('异步问题: updataPlayerPos!')
        return
      }
    } else {
      cc.log('更新玩家位置', pos)
      this.gameData.postion = pos
      // TODO:显示玩家位置
    }
  },
  // ---------------数据操作--------------
  randomPlayerPosition() {

  }
})
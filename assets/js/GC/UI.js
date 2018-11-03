/**
 * @author uu
 * @file 控制游戏UI的节点
 */
cc.Class({
  extends: cc.Component,

  properties: {
    achievement: require('Achievement'),
    music: require('Music'),

    // 部分UI控制
    banner: require('bannerUI'),
    footer: require('footerUI'),
    map: require('mapUI'),
    ship: require('shipUI'),
    star: require('starUI'),

    // 节点控制
    mapPage: cc.Node,
    shipPage: cc.Node,
    starPage: cc.Node,

    // UI节点控制
  },
  init(game) {
    this._game = game
    // this.banner.init(this)
    // this.footer.init(this)
    // this.map.init(this)
    // this.ship.init(this)
    // this.star.init(this)
  },
  onLoad() {},

  start() {

  },
  // 生成地图
  //-----------数据绑定 刷新UI视图-----------//
  onUpdataPosition(data) {
    cc.log("位置更新", data);
  },
  onUpdataStock(data) {
    cc.log("仓库更新", data);
  },
  onUpdataStatus(data) {
    cc.log("状态更新", data);
  },
  onUpdataShip(data) {
    cc.log("船舰更新", data);
  },
  onUpdataTechnology(data) {
    cc.log('更新科技', data);
  },
  onUpdataAchievement(data) {
    cc.log('更新成就值', data);
  },
  onUpdataAll(data) {
    cc.log('更新所有内容');
  },
  // --------------生成page----------
  onGenerateMap(data) {
    this.mapController.onGenerateMap(data)
  },
  // ------------页面控制-------------
  onPageOpen(num) {
    this.closeAllPage()
    switch (num) {
      case 1:
      this.shipPage.active=true
        break;
      case 2:
      this.starPage.active=true
        break;
      case 3:
      this.mapPage.active=true
        break;
    }
  },
  closeAllPage() {
    this.mapPage.active = false
    this.shipPage.active = false
    this.starPage.active = false
  }
  // update (dt) {},
});
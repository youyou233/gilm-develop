/**
 * @author uu
 * @file 成就系统与排行榜(可能没有排行榜)
 */
var gameData = require('gameData')
cc.Class({
  extends: cc.Component,
  properties: {
    achievementNode: cc.Node,
    // 成就图片
    achievemenSpriteFrames: [cc.SpriteFrame]
  },
  init(controller) {
    this._controller = controller;
    //获取缓存
  },
  onGetAchievementData() {
    // 获取缓存数据
    this.achievementData = JSON.parse(cc.sys.localStorage.getItem('achievement'))
    // 绑定图片
    for (let i = 0; i < this.achievementData.length; i++) {
      this.achievementData[i].image = this.achievemenSpriteFrames[i]
    }
  },
  onAchieve(num) {
    if (this.achievementData[num].done == false) {
      this.achievementAnimation()
      this.bindInfomation(this.achievementData[num])
      this.achievementData[i].done = true
      // 缓存成就数据
      cc.sys.localStorage.setItem('achievement', JSON.stringify(this.achievementData))
    }
  },
  achievementAnimation() {
    let action = null
    let action1 = cc.moveBy(0.5, 0, -200)
    let action2 = cc.moveBy(0.5, 0, 200)
    let action3 = cc.delayTime(2)
    action = cc.sequence(action1, action3, action2)
    this.achievementNode.runAction(action)
  },
  bindInfomation(data) {
    let image = this.achievementNode.getChildByName('image').getComponent(cc.Sprite)
    let text = this.achievementNode.getChildByName('text').getComponent(cc.Label)
    // TODO:数据绑定
  },
  // 初始化成就数据
  onInitAchievementData() {
    this.achievementData = gameData.initAchievementData()
    for (let i = 0; i < this.achievementData.length; i++) {
      this.achievementData[i].done = false;
      this.achievementData[i].image = this.achievemenSpriteFrames[i]
    }
    cc.sys.localStorage.setItem('achievement', JSON.stringify(this.achievementData))
  },
  // update (dt) {},
});
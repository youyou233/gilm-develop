/**
 * @author uu
 * @file 游戏操作和数据控制
 */
var chapterData = require('chapterData')
var gameData = require('gameData')
var mapData = require('mapData')
cc.Class({
  extends: cc.Component,

  properties: {
    achievement: require('Achievement'),
    music: require('Music'),

    dialougue: require('Dialogue'),
    UI: require('UI'),
    // UI页面节点

    tipsPage: cc.Node,
    dialouguePage: cc.Node,
    gameUIPage: cc.Node,
    // 当前剧情状态
    chapter: 0,
  },

  // ------------------周期函数------------------
  init(controller) {
    this._controller = controller
    this.dialougue.init(this)
    this.UI.init(this)
  },
  onLoad() {},
  onGameStart(num) {
    // num判读是从什么按钮进入的 0为开始游戏 1为载入游戏
    if (num == 0) {
      this.onDataInit()
      this.onOpenDialouguePage(this.chapterData)
    }
    //  else {
    //   this.onOpenGameUIPage()
    //   this.LoadGameData()
    // }
  },
  // ----------------------教程-------------------------

  //----------------------UI页面控制----------------------
  onOpenGameUIPage() {
    this.gameUIPage.active = true
    this.dialouguePage.active = false
  },
  onOpenDialouguePage(data) {
    this.dialougue.onOpen(data)
    this.dialouguePage.active = true
    this.gameUIPage.active = false
  },
  onCloseAllTips() {
    // 获取Tips全部节点 放入对象池
    let tips = this.tipsPage.children
    let tipsLength = tips.length
    for (let i = 0; i < tipsLength; i++) {
      tips[i].destroy()
    }
  },

  // ------------------------剧情相关-----------------------
  // 初始化数据
  onDataInit() {
    cc.log('data init')
    this.chapter = 0
    this.chapterData = chapterData.getChapterData(this.chapter)
    this.mapData = mapData.onGenerateMap()
    this.gameData = gameData.initPlayData()
    // TODO:refash map UI
  },
  onChapterEnd() {
    this.onOpenGameUIPage()
  },
  // ------------------------存档数据相关操作------------------
  //存档功能开发中....
  // LoadGameData(data) {

  // }
  // saveGameData(data) {

  // }
  // update (dt) {},
});
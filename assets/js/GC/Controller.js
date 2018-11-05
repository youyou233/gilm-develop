/**
 * @author uu
 * @desc 游戏场景总控制与页面控制
 */
cc.Class({
  extends: cc.Component,

  properties: {
    game: require('Game'),
    achievement: require('Achievement'),
    music: require('Music'),
    //游戏状态 0进入游戏 1未开始 2开始 3结束
    _status: 0,
    //控制页面跳转
    preStartPage: cc.Node,
    startPage: cc.Node,
    gamePage: cc.Node,
    gameOverPage: cc.Node,
    //音量
    _volume: 0,
    //难度
    _diffcult: 1,

    // 其他控制器
    preStartPageController: require('preStartPage'),
    startPageController: require('startPage'),
  },
  // ------------------生命周期-----------------
  onLoad() {
    //屏幕自适应 API更换
    // var winSize = cc.director.getWinSize()
    // this.winwidth = winSize.width
    // this.winheight = winSize.height
    // 游戏初始化
    this.game.init(this)
    this.preStartPageController.init(this)
    this.startPageController.init(this)
  },
  start() {
    // 打开加载界面
    this._status = 0
    this.closeAllPage()
    this.preStartPage.active = true
  },
  // -------------------游戏状态----------------
  onGameStart() {
    this._status = 2
    this.closeAllPage()
    this.gamePage.active = true
    this.game.onGameStart(0)
  },
  onGameOver() {
    this._status = 3
    this.closeAllPage()
    this.gameOverPage.active = true
  },
  onGameRestart() {
    // 获取当前是否第二周目
    this._status = 2
    this.closeAllPage()
    this.gamePage.active = true
    this.game.onGameStart(0)
  },
  //--------------------页面控制----------------
  //关闭所有页面
  closeAllPage() {
    this.startPage.active = false
    this.preStartPage.active = false
    this.gamePage.active = false
    this.gameOverPage.active = false
  },
  onStartPage() {
    this._status = 1
    this.closeAllPage()
    this.startPageController.onShowPage()
    this.startPage.active = true
  },
  // -------------------游戏存档----------------- TODO: 5
  // checkIsFristTime() {
  //     cc.log(cc.sys.localStorage.getItem('isFristTimePlay'))
  //     //判断是否第一次游戏 默认全部从教程开始
  //     if (!cc.sys.localStorage.getItem('isFristTimePlay')) {
  //         //直接开始新手教程 
  //         cc.sys.localStorage.setItem('isFristTimePlay', 1);
  //         this.onOpenGuid();
  //     } else {
  //         this.onOpenGuid();
  //     }
  // if (!cc.sys.localStorage.getItem('gameSaveData')) {
  //没有游戏存档 关闭存档按钮
  //  }
  // this._diffcult = cc.sys.localStorage.getItem('diffcult') == null ? 1 : cc.sys.localStorage.getItem('diffcult');
  // this._volume = cc.sys.localStorage.getItem('volume') == null ? 1 : cc.sys.localStorage.getItem('volume');
  //  }
  // onLoadGame() {
  //    
  // },
  //onSaveGame() {
  //
  // },
  //-------------------设置-------------------- TODO: 5
  // onOpenSetting() {
  //     //调整声音和难度
  // },
});
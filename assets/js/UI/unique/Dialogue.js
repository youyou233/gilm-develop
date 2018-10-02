/**
 * @author uu
 * @file 对话控制器
 */
cc.Class({
  extends: cc.Component,
  properties: {
    progress: 0,

    chooesButtonPrefab: cc.Prefab,
    chapterLabel: cc.Label,
    buttonsGroup: cc.Node,
  },
  // -------------生命周期函数---------------
  init(game) {
    this._game = game
    this.createButtonPool()
  },
  createButtonPool() {
    this.buttonsPool = new cc.NodePool()
    for (let i = 0; i < 4; i++) {
      let button = cc.instantiate(this.chooesButtonPrefab)
      this.buttonsPool.put(button)
    }
  },
  onOpen(data) {
    this.data = data
    cc.log('dla data:', data)
    this.progress = 0
    this.onShowText(data[0])
  },
  // --------------按钮回调函数----------------
  onChooseButtonPressed(data) {
    // 分析data
    cc.log('按钮点击携带数据:', data)
    if (data.jump) {
      this.progress += data.jump
      this.onShowText(this.data[this.progress])
    } else if (data.end) {
      this._game.onChapterEnd()
    } else {
      this.progress++
      this.onShowText(this.data[this.progress])
    }
  },
  // --------------页面数据绑定函数--------------
  onShowText(data) {
    // 绑定文字
    this.typingAni(this.chapterLabel, data.content, this.showButtons, data.option)
    // 判断文字类型
    switch (data.type) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        break;
    }
    let buttons = this.buttonsGroup.children
    let buttonLength = buttons.length
    if (buttons)
      for (let i = 0; i < buttonLength; i++) {
        this.buttonsPool.put(buttons[0])
      }
  },
  // TODO:打字机效果了解一下？
  typingAni: function (label, text, cb, op) {
    var self = this;
    var html = '';
    var arr = text.split('');
    var len = arr.length;
    var step = 0;
    self.func = function () {
      html += arr[step];
      label.string = html;
      if (++step == len) {
        self.unschedule(self.func, self);
        cb(op, self);
      }
    }
    self.schedule(self.func, 0.05, cc.macro.REPEAT_FOREVER, 0)
  },
  showButtons(options, self) {
    // 是否有选项
    if (options) {
      for (let i = 0; i < options.length; i++) {
        // 给按钮添加event data
        self.onInstantiateButton(options[i])
      }
    } else {
      // 显示一个点击继续的按钮
      // 抓取目前data
      self.onInstantiateButton({
        content: '点击继续...',
        jump: 1,
      })
    }
  },
  // 实例化按钮
  onInstantiateButton(data) {
    let button = null
    if (this.buttonsPool) {
      if (this.buttonsPool.size() > 0) {
        button = this.buttonsPool.get()
      }
    } else {
      button = cc.instantiate(this.chooesButtonPrefab)
    }
    button.parent = this.buttonsGroup
    button.getComponent('chooseButton').init(this, data)
  }
})
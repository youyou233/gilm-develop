/**
 * @author uu
 * @desc 剧情数据
 */
module.exports = {
  getGuidData: getGuidData,
  getChapterData: getChapterData,
}
// content 内容
// type 内容类型 0系统 1机器
// option 选项
// option附加 jump跳转到相对位置 end 结束对话界面
function getGuidData() {
  var guidData = [{ //0
    content: '...',
    type: 0,
    option: null,
  }, {
    content: 'help...',
    type: 1,
    option: null,
  }, {
    content: '...',
    type: 0,
    option: [{
      content: '“有人吗？能听到我说话吗？”',
      jump: 1,
    }],
  }, {
    content: '初始化设定完毕...\n辨识模组加载完毕...\n视觉模组加载完毕...',
    type: 0,
    option: null,
  }, {
    content: '“#@！￥#@￥#@！￥！@#￥@！￥”（电流音）”',
    type: 1,
    option: [{
      content: '“嗨！这里是“玩家的名字”，听得到吗！”',
      jump: 1,
    }],
  }, { //5
    content: '多语言表达模组加载完毕...',
    type: 0,
    option: null,
  }, {
    content: '“我在。。。。”(女性的声音)',
    type: 1,
    option: [{
      content: '“嗨！你还好吗？我收到了你的求救信号，有什么我能帮你的吗？”',
      jump: 1,
    }],
  }, {
    content: '记忆功能初始化完毕...',
    type: 0,
    option: null,
  }, {
    content: '“你刚刚说了些什么？抱歉我没有用心去听。”',
    type: 1,
    option: [{
      content: '“好吧。。。。你遇到什么困难了？”',
      jump: 1,
    }],
  }, {
    content: '“这里很黑。。。。我不知道。。。”',
    type: 1,
    option: [{
      content: '“那周围有没有可以提供亮光的物品？”',
      jump: 1,
    }],
  }, { //10
    content: '“我找找看。。。。。。”',
    type: 1,
    option: null,
  }, {
    content: '（找到一块手表，可以依靠屏幕微弱的亮光来探索周围的环境。）',
    type: 1,
    option: null,
  }, {
    content: '资源储备显示装置获取。。。。',
    type: 0,
    option: null,
  }, {
    content: '“我找到了一个控制面板，这似乎是飞船的启动开关。(启动飞船)”',
    type: 1,
    option: [{
      content: '“有光亮了吗？”',
      jump: 1,
    }],
  }, {
    content: '“嗯，有了，我在一艘飞船上的驾驶室醒来了，我正坐在驾驶椅上。”',
    type: 1,
    option: [{
      content: '“身边还有没有其他人？”',
      jump: 1,
    }],
  }, {
    content: '“没有，这里似乎只有我一个人，飞船的体积看来很小，没有可以给别人躲藏的地方。”',
    type: 1,
    option: [{
      content: '“好的，你叫什么名字？”',
      jump: 1,
    }],
  }, {
    content: '“我叫伊芙。”',
    type: 1,
    option: [{
      content: '“到底发生了什么事？”',
      jump: 1,
    }],
  }, {
    content: '“我不记得了。。。”',
    type: 1,
    option: [{
      content: '“没关系，当务之急是确认你现在的状况。”',
      jump: 1,
    }]
  }, {
    content: '“看看我能在控制面板里找到什么。”',
    type: 1,
    option: null,
  }, {
    content: '（通过手表上的数据以及飞船上的星图依次确认）',
    type: 0,
    option: null,
  }, {
    content: '“这里有用于传送的空间折叠器，不过已经损坏了。”',
    type: 1,
    option: null,
  }, {
    content: '（空间探测器已损坏）\n需要花费（）来进行修补。\n查看货仓，获得（），记忆体核心。',
    type: 0,
    option: [{
      content: '“看来你必须前往离你最近的星系获取修复它的资源。”',
      jump: 1,
    }],
  }, {
    content: '“好吧，我想我已经学会了怎么驾驶这艘飞船。”',
    type: 1,
    option: [{
      content: '点击关闭对话',
      end: 1,
    }]
  }]
  return guidData
}

function getChapterData(chapter) {
  cc.log('第几章故事:', chapter)
  let data = null
  switch (chapter) {
    case 0:
      data = this.getGuidData()
      break
    default:
      throw cc.log('chapter传值错误')
  }
  return data
}
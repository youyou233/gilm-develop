/**
 * @author uu
 * @file 游戏数据
 */
module.exports = {
  initPlayData: initPlayData,
  initAchievementData: initAchievementData,
}

function initPlayData() {
  var playData = {
    //剧情进度
    progress: 0,
    //位置
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    //资源
    stutas: {
      hull: 100, //船体
      power: 100,
      range: 10, //可视范围
      shield: 0, //护盾
    },
    item: {
      hyd: 10,
      oxy: 10,
      carbon: 10,
      si: 0,
      ar: 0,
      ti: 0,
      metal: 0,
      ur: 0,
      darkMatter: 0, //暗物质
      seed: 1, //种子
      UAV: 0, //无人机
    },
    ship: {
      name: '探索者级',
      weight: 2000,
      flexibel: 80, //百分比
      storeCell: 10, //空间
      electric: 1, //回电
      shield: 0, //回盾
      //船舰设备
      device: {
        /**地图 */
        //空间望远镜
        SpaceTelescope: 1,
        //引力透镜
        Gravitationallensing: 0,
        /**移动装备 */
        //跃迁引擎
        Transitioncause: 1,
        //磁力引擎
        Magneticengine: 0,
        //引力帆
        Gravitationalsail: 0,

        /**星系移动装备 */
        //空间压缩装置
        Spacefoldingdevice: 2,
        //引力井发生器
        Gravitywellgenerator: 0,
        //Tau停滞器
        Taustagnation: 0,
        //灰洞穿梭机
        Ashholeshuttle: 0,
        /**资源探测 采集装备 */
        //资源扫描仪
        Resourcescanner: 1,
        //打捞器
        Salvagedevice: 1,
        //冰矿采集器
        Icecollector: 0,
        //气云采集器
        Gascloudcollector: 0,
        /**回复能量 */
        //子空间反应堆
        Subspacereactor: 1,
        //太阳帆
        Sunsails: 0,
        //空间反应堆控制元件
        Reactorcontrolelement: 0,

        /**护甲护盾 */
        //护盾生成器
        ShieldGenerator: 0,
        //全能脉冲投射机
        Pulseprojector: 0,
        //护盾回冲装置
        Shieldreturndevice: 0,

        //护甲薄膜
        Armorfilm: 1,
        //加速聚合器
        Acceleratingpolymerizer: 0,
        //增变器
        Transformer: 0,
        /**其他科技 */
        //脉冲波投射干涉仪
        Pulsewaveinterferometer: 0,
        //隐形装置
        Cloakingdevice: 0,
        //超光速通讯
        Superluminalcommunications: 0,
        //空间膨胀
        Spaceexpansion: 0,
        //无人机单元导航电脑
        UAVunitnavigationcomputer: 0,
        //时间帆
        Timesails: 0,
      },
    },
    //科技
    technology: {
      build: 0, //建造等级
      UAV: 0, //无人机操作技术
      research: 0,
      //----------附加程序-------------
      //反信号区域增效子系统 提升信号范围
      //能量栅格诊断优化程序 加速能量回复
      //核心防御节能管理程序 提升护盾回复
      //跃迁核心优化系统 减少跃迁消耗
      //弥集进化演算法数据库 提升能量回复
      //损伤控制 减少损伤

    },
  }
  return playData
}
// TODO: 6 成就数据结构 
function initAchievementData() {
  return [{
      content: "第一次游戏",
    },
    {
      content: "第一次游戏失败",
    },
    {
      content: "第一次游戏通关",
    },
  ]
}
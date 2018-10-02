/**
 * @author uu
 * @desc 工具箱
 */

module.exports = {
    getRandom: getRandom,
    getDistance: getDistance,
    getRadian: getRadian,
    getAngle: getAngle,
    //动作
}
//-------------函数---------------

/**
 * 生成随机整数
 * @param min max 由最小到最大 包括
 */
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * 计算两点间的距离并返回
 * @param pos1 pos2 两个点 传cc.Node属性
 */
function getDistance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) +
        Math.pow(pos1.y - pos2.y, 2));
}

/**
 * 计算弧度并返回
 * @param point 到ring的弧度
 * 弧度 = 角度 * Math.PI / 180
 */
function getRadian(point, ring) {
    var _radian = Math.PI / 180 * this.getAngle(point, ring);
    return _radian;
}

/**
 * 计算角度并返回
 * @param point 到ring的角度
 * 角度 = 弧度 * 180 / Math.PI
 */
function getAngle(point, ring) {
    var pos = ring.getPosition();
    _angle = Math.atan2(point.y - pos.y, point.x - pos.x) * (180 / Math.PI);
    return _angle;
}
//---------------通用动作------------

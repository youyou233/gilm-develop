/**
 * @author uu
 * @desc 地图数据 随机地图
 */
module.exports = {
    // 函数
    onGenerateMap: onGenerateMap,
    onGenerateGalaxy: onGenerateGalaxy,
    onGenerateStar: onGenerateStar,
    getRandom: getRandom,
}
var mapLength = 40;
var mapWidth = 4;
var minStarsNum = 1;
var maxStarsNum = 7;
var minSDistance = 10;
var maxSDistance = 30;

function onGenerateMap() {
    var myMap = [];
    for (let i = 0; i < mapLength; i++) {
        let j = 1
        if (i < (mapLength / this.getRandom(2, 3))) {
            j = Math.floor(i / mapWidth + 1)
        } else {
            j = Math.floor(mapLength / mapWidth + 1 - i / mapWidth)
        }
        myMap[i] = [];
        for (let n = 0; n < j; n++) {
            //生成一个星系
            myMap[i][n] = this.onGenerateGalaxy(i, n);
        }
    }
    return myMap;
}
var gDistance = 100;
var gIncreaseDis = 2;
var minGDistance = 10;
var maxGDistance = 30;
var galaxyName = ['Achisa', 'Adio', 'Abun', 　'Actun VI', 'Basari I', 'Bustun', 　'Collibert Prime',
    'Flettiria', 　　'Gorogohl', 'Gorg', 　　'Hakogan', 　　'HIX I', 　　'Ichiamea', 　　'Idaka', 　　'Imcies', 　　'Iyan', 　　'Kaekai',
    'Konangko', 　　'Kradak', 　　'Kushima', 　　'Loykio', 　　'LTD 368', 　　'Mocher',
    'Nadrask', 　'Notogertasi', 　　'Noyader IX', 　　'Omister', 　　'Orisa 27', 　　'Phileek', 　　'Quaon-Iyl', 　　'Quiidar II', 　　'Sayall', 　　'Shyinx', 　　'Soleth Prime', 　　'Spekira II', 　　'Sugas-Umoi', 　　'Teogicia', 　　'Turka', 　　'Toniberli', 　　'Usnursven II', 　　'Vesta Prime', 　　'Vikfix II', 　　'Virgus VI', 　　'Xeria - p', 　　'Yesri',
    'Zala', 　　'New Alon', 　　'New Diggister', 　　'New Errady', 　　'New Ventu'

];

function onGenerateGalaxy(col, row) {
    let galaxy = {}
    galaxy.name = galaxyName[this.getRandom(0, galaxyName.length - 1)]
    galaxy.pos = {
        x: col * (col * gIncreaseDis + gDistance) - this.getRandom(minGDistance, maxGDistance),
        y: row * gDistance + this.getRandom(minGDistance, maxGDistance),
    }
    galaxy.stars = []
    let starsNum = this.getRandom(minStarsNum, maxStarsNum)
    for (let i = 0; i < starsNum; i++) {
        galaxy.stars[i] = this.onGenerateStar(i)
    }
    return galaxy
}
var sDistance = 50;
var maxResource = 10;
var starType = [
    '文明', '荒芜', '枯萎', '辐射', '酸性', '冰霜', '炎热', '毒气', '气态', '乐土'
]
var starCenterType = [
    '红矮星', '白矮星', '蓝矮星', '褐矮星', '超新星', '灰洞'
]

function onGenerateStar(row) {
    let star = {}
    let startype = this.getRandom(0, starType.length - 1)
    star.name = starType[startype] + '星球'
    star.type = 0 //0-???
    if (row == 0) {
        star.radius = 0 //中心
        let starCentertype = this.getRandom(0, starCenterType.length - 1)
        star.name = starCenterType[starCentertype]
    } else {
        star.radius = row * sDistance + this.getRandom(minSDistance, maxSDistance)
    }
    star.satellite = null
    // TODO:资源情况
    switch (star.type) {
        case 0:
            break;
        case 1:
            break;
    }
    return star
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// 玩家初始数据信息
var player = {
    hp : 600,
    bg : "url('./img/1.png') no-repeat 0 -96px",
    attack : 10,
    weapon : '无',
    defense : 10,
    shield : '无',
    key : [{yellow : 0},{blue : 0},{red : 0}],
    treasure : [],
    // floor : 1,      // 玩家所处楼层
    flr : 1,        // 玩家到达过的最高楼层
    buyTimes : 0,   // 玩家在商店购买的次数
    hearing:"",     // 玩家在此次谈话时听到的话
    heard : [],     // 玩家谈话时听过的所有话
    direction : 38, // 玩家朝向 默认为向上
    gold : 0        // 金币
}



// 空气
var air = {
    id : 't1'
};
// 墙面
var wall = {   
    id : 't2',
    bg : "url('./img/14.png') no-repeat"
}
// 暗道
var wall1 = {
    id : 't3',
    bg : "url('./img/14.png') no-repeat"
}

// 向上的楼梯
var stair1 = {
    id : 't4',
    bg : "url('./img/7.png') no-repeat",
    direction : 'top'
}
// 向下的楼梯
var stair2 = {
    id : 't5',
    bg : "url('./img/6.png') no-repeat",
    direction : 'bottom'
}
// 黄色门
var door1 = {
    id : 't6',
    color : 'yellow',
    bg : " url('./img/5.png') no-repeat",
}
// 蓝色门
var door2 = {
    id : 't7',
    color : 'blue',
    bg : " url('./img/5.png') no-repeat -32px 0",
}
// 红色门
var door3 = {
    id : 't8',
    color : 'red',
    bg : " url('./img/5.png') no-repeat -64px 0",
}
// 石头门
var door4 = {
    id : 't9',
    bg : " url('./img/5.png') no-repeat -96px 0",
}

// 铁栅栏
var fence = {
    id : 't10',
    bg : " url('./img/8.png') no-repeat -96px 0",
}

//特殊对象 ,
var arr1 = [air,wall,stair1,stair2,door1,door2,
    door3,fence,wall1
        ];


// 幸运金币
var d1 = {
    id : 'd1',
    bg : "url('./img/2.png') no-repeat -96px -223px"
};
// 小生命药水
var d2 = {
    id : 'd2',
    bg : "url('./img/2.png') no-repeat 0 -32px",
    hp : 50
};
// 大生命药水
var d3 = {
    id : 'd3',
    bg : "url('./img/2.png') no-repeat -32px -32px",
    hp : 200
};
// 红色宝石
var d4 = {
    id : 'd4',
    bg : "url('./img/2.png') no-repeat",
    attack : 1
};
// 蓝色宝石
var d5 = {
    id : 'd5',
    bg : "url('./img/2.png') no-repeat -32px 0",
    defense : 2
};
// 黄色钥匙
var d6 = {
    id : 'd6',
    bg : "url('./img/2.png') no-repeat 0 -128px",
    key : 'yellow'
};
// 红色钥匙
var rkey = {
    id : 'd7',
    bg : "url('./img/2.png') no-repeat -64px -128px",
    key : 'red'
}

// 飞行器
var d7 = { 
    id : 'd8',
    bg : "url('./img/16.png') no-repeat",
    name : 'csq'
};
// 蓝色钥匙
var d8 = {
    id : 'd9',
    bg : "url('./img/2.png') no-repeat -32px -128px",
    key : 'blue'
};
// 怪物手册
var d9 = {
    id : 'd10',
    bg : "url('./img/2.png') no-repeat 0 -224px",
    name : 'gwsc'
};
// 记事本
var d10 = {
    id : 'd11',
    bg : "url('./img/2.png') no-repeat -32px -224px",
    name : 'jsb'
}
// 铁剑
var tj = {
    id : 'd12',
    bg : "url('./img/2.png') no-repeat 0 -384px",
}
// 铁盾
var td = {
    id : 'd13',
    bg : "url('./img/2.png') no-repeat 0 -448px",
}

// 道具对象
var arr2 = [d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,tj,td,rkey];


// 绿史莱姆
var g1 = {
    id : 'g1',
    bg : "url('./img/3.png') no-repeat 0 -256px",
    hp : 35,
    attack : 18,
    defense : 1,
    gold : 1,
    name : '绿史莱姆'
};

// 红史莱姆
var g2 = {
    id : 'g2',
    bg : "url('./img/3.png') no-repeat 0 -288px",
    hp : 45,
    attack : 20,
    defense : 2,
    gold : 2,
    name : '红史莱姆'
};

// 小蝙蝠
var g3 = {
    id : 'g3',
    bg : "url('./img/3.png') no-repeat 0 -128px",
    hp : 35,
    attack : 38,
    defense : 3,
    gold : 3,
    name : '小蝙蝠'
};

// 骷髅人
var g4 = {
    id : 'g4',
    bg : "url('./img/3.png') no-repeat",
    hp : 50,
    attack : 42,
    defense : 6,
    gold : 6,
    name : '骷髅人'
};

// 骷髅士兵
var g5 = {
    id : 'g5',
    bg : "url('./img/3.png') no-repeat 0 -32px",
    hp : 55,
    attack : 52,
    defense : 12,
    gold : 8,
    name : '骷髅士兵'
};

// 初级法师
var g6 = {
    id : 'g6',
    bg : "url('./img/3.png') no-repeat 0 -384px",
    hp : 60,
    attack : 32,
    defense : 8,
    gold : 5,
    name : '初级法师'
};

// 中级守卫
var g7 = {
    id : 'g7',
    bg : "url('./img/3.png') no-repeat 0 -672px",
    hp : 100,
    attack : 180,
    defense : 110,
    gold : 50,
    name : '中级守卫'
}

// 初级守卫
var sw1 = {
    id : 'g8',
    bg : "url('./img/3.png') no-repeat 0 -640px",
    hp : 50,
    attack : 48,
    defense : 22,
    gold : 12,
    name : '初级守卫'
}

// 10层 骷髅队长  小boss
var boss1 = {
    id : 'g9',
    bg : "url('./img/3.png') no-repeat 0 -64px",
    hp : 100,
    attack : 65,
    defense : 15,
    gold : 30,
    name : '骷髅队长'
}

// 怪物对象
var arr3 = [g1,g2,g3,g4,g5,g6,g7,sw1,boss1];



// NPC对象

// 智者
var wise_man= {
    id : 'n1',
    bg : " url('./img/10.png') no-repeat",
}
// 商人
var trader = {
    id : 'n2',
    bg : " url('./img/10.png') no-repeat 0 -32px",
}
// 小偷
var thief = {
    id : 'n3',
    bg : " url('./img/10.png') no-repeat 0 -64px",
}

//  商店
var store = {
    id : 'n4',
    bg : " url('./img/12.png') no-repeat -32px 0",
}
var store1 = {
    bg : " url('./img/12.png') no-repeat"
}
var store2 = {
    bg : " url('./img/12.png') no-repeat -64px 0",
}


var arr4 = [wise_man,trader,thief,store]

// 地图
var floor = [
    // 第-1层
[
    air,air,air,air,air,air,air,air,air,air,air,
    air,air,air,air,air,air,air,air,air,air,air,
    air,air,air,air,air,air,air,air,air,air,air,
    air,air,air,air,air,air,air,air,air,air,air,
    air,air,air,air,air,air,air,air,air,air,air,
    air,air,air,air,air,d1,air,air,air,air,air,
    air,air,air,air,air,air,air,air,air,air,air,
    air,air,air,air,air,air,air,air,air,air,air,
    air,air,air,air,air,air,air,air,air,air,air,
    air,air,air,air,air,air,air,air,air,air,air,
    air,air,air,air,air,air,air,air,air,air,air,
],
[ // 1
    stair1,air,g1,g2,g1,air,air,air,air,air,air,
    wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,air,
    d2,air,air,door1,air,wall,d4,d6,air,wall,air,
    air,g4,air,wall,air,wall,d5,d2,air,wall,air,
    wall,door1,wall,wall,air,wall,wall,wall,door1,wall,air,
    d6,air,air,wall,air,door1,g3,g6,g3,wall,air,
    air,g5,air,wall,air,wall,wall,wall,wall,wall,air,
    wall,door1,wall,wall,air,air,air,air,air,air,air,
    air,air,air,wall,wall,door1,wall,wall,wall,door1,wall,
    d2,air,d6,wall,d6,air,air,wall,air,g3,air,
    d2,d7,d6,wall,air,player,air,wall,g2,d3,g2,
],
[ // 2
    stair2,air,door2,air,air,air,air,air,air,air,air,
    player,air,wall,wall,air,g7,air,g7,air,wall,wall,
    air,wall,wall,wall,wall,wall,air,wall,wall,wall,wall,
    air,wall,d6,d6,wall,air,air,air,wall,air,wise_man,
    air,wall,d6,air,fence,air,air,air,fence,air,air,
    air,wall,wall,wall,wall,air,air,air,wall,wall,wall,
    air,wall,thief,air,wall,air,air,air,wall,air,trader,
    air,wall,air,air,fence,air,air,air,fence,air,air,
    air,wall,wall,wall,wall,air,air,air,wall,wall,wall,
    air,wall,d3,d3,wall,air,air,air,wall,air,air,
    stair1,wall,d3,air,fence,air,air,air,fence,air,air,
],
// 
[ // 3 
    d6,d5,wall,d6,d3,d6,wall,air,wall,air,d2,
    air,d2,wall,d3,d6,d3,wall,air,door1,g3,air,
    g6,air,wall,d6,d8,d6,wall,air,wall,wall,wall,
    door1,wall,wall,wall,air,wall,wall,air,wall,air,wise_man,
    air,air,g3,air,air,air,g1,air,air,air,air,
    door1,wall,wall,air,air,air,wall,air,wall,wall,wall,
    g4,air,wall,wall,air,wall,wall,air,wall,air,d2,
    air,d6,wall,air,air,air,wall,air,door1,g6,d6,
    d2,d4,wall,air,air,air,wall,air,wall,wall,wall,
    wall,wall,wall,wall,air,wall,wall,g2,wall,air,air,
    stair2,player,air,air,air,air,wall,air,door1,air,stair1,
],
[  //4
    air,d8,air,wall,store1,store,store2,wall,air,wise_man,air,
    d2,air,d6,wall,air,air,air,wall,d6,air,d3,
    air,air,air,wall,air,air,air,wall,air,g5,air,
    wall, door1,wall,wall,wall,door2,wall,wall,wall,door1,wall,
    air,g6,air,door1,air,g2,air,air,g4,air,air,
    air,air,air,wall,wall,wall,wall,wall,wall,wall,wall,
    g2,air,g1,air,air,air,air,air,air,air,air,
    door1,wall,wall,door1,wall,wall,wall,door1,wall,wall,door1,
    air,wall,air,g3,air,wall,air,g6,air,wall,air,
    air,wall,g1,air,d6,wall,d4,air,d2,wall,player,
    stair1,wall,d6,g1,d6,wall,air,g1,air,wall,stair2,
],
[ // 5
    stair1,wall,air,g2,door1,air,wall,air,air,door1,air,
    air,wall,air,air,wall,d6,wall,g1,g1,wall,g2,
    air,door1,g3,air,wall,air,wall,d6,d6,wall,air,
    wall,wall,wall,door1,wall,g3,wall,d6,d6,wall,air,
    d6,air,g6,air,wall,air,wall,wall,wall,wall,air,
    d6,air,air,g3,wall,air,g1,air,air,air,air,
    wall,g5,wall,wall,wall,air,wall,wall,wall,wall,g2,
    air,air,air,air,wall,g1,wall,air,air,air,air,
    d5,d6,d2,d10,wall,air,wall,door1,wall,wall,wall,
    wall,wall,wall,wall,wall,air,wall,air,wall,air,air,
    stair2,player,air,air,air,air,wall,air,wall1,air,tj,
],
[ // 6
    stair2,wall,d6,d6,wall,air,g6,air,d6,g1,air,
    player,wall,wall,g2,wall,air,wall,wall,wall,wall,door1,
    air,wall,wall,g2,wall,air,wall,d2,air,g4,air,
    air,door1,door1,air,door1,air,wall,trader,air,air,g3,
    air,wall,wall,wall,wall,air,wall,wall,wall,wall,wall,
    air,air,g2,g6,air,d6,air,g4,g5,air,air,
    wall,wall,wall,wall,wall,air,wall,wall,wall,wall,air,
    g6,air,air,wise_man,wall,air,door1,door1,air,door1,air,
    air,g3,air,d5,wall,air,wall,wall,g2,wall,g2,
    door1,wall,wall,wall,wall,air,wall,air,air,wall,air,
    air,g1,air,air,g4,air,wall,d2,d2,wall,stair1,
],
[ // 7
    stair1,wall,d4,wall,air,trader,air,wall,d6,wall,g1,
    air,wall,d2,wall,air,air,air,wall,d6,wall,g2,
    air,wall,g3,wall,g2,wall,g5,wall,d2,wall,g1,
    air,wall,air,wall,air,wall,air,wall,air,wall,air,
    door1,wall,door1,wall,door2,wall,door1,wall,g4,wall,door1,
    air,g5,air,g6,air,air,air,air,air,air,air,
    door1,wall,door1,wall,door1,wall,door1,wall,g5,wall,door1,
    air,wall,air,wall,air,wall,air,wall,air,wall,air,
    air,wall,air,wall,g3,wall,g2,wall,d3,wall,air,
    g1,wall,g1,wall,d6,wall,g6,wall,d6,wall,player,
    air,g2,air,wall,d6,wall,d3,wall,d6,wall,stair2,
],
[ // 8
    stair2,air,door1,door1,air,stair1,air,wall,d6,air,d6,
    player,air,wall,wall,air,air,g1,wall,air,rkey,air,
    door1,wall,wall,wall,wall,door1,wall,wall,d3,air,d2,
    air,wall,d6,d6,d6,air,air,wall,wall,door4,wall,
    d2,wall,wall,wall,wall,wall,g6,wall,sw1,air,sw1,
    air,g2,g1,g2,air,wall,air,wall,air,air,air,
    wall,wall,wall,wall,door1,wall,g3,wall,wall,door1,wall,
    air,air,air,g3,air,g4,air,g6,air,air,air,
    door1,wall,wall,wall,wall,wall,wall,wall,wall,wall,door1,
    g1,air,wall,d4,d6,wall,d8,d2,wall,air,g4,
    air,g3,door2,d6,d5,wall,d6,air,door1,g5,air,
],
[
    // 9 
    air,air,g4,door1,air,stair2,air,door1,g1,air,d2,
    air,d6,air,wall,air,player,air,wall,air,g1,air,
    g5,wall,wall,wall,wall,door2,wall,wall,wall,wall,air,
    air,d6,air,wall,d6,air,d6,door1,door1,air,air,
    d5,air,g3,door1,air,d4,air,wall,wall,wall1,wall,
    wall,wall,wall,wall,wall,wall,g2,wall,air,air,g5,
    d6,air,door1,g5,d6,wall,air,wall,td,wall,air,
    g5,air,wall,air,air,wall,air,wall,wall,wall,door1,
    door1,wall,wall,wall,door1,wall,air,wall,d6,air,g6,
    air,d2,wall,air,g4,wall,g3,wall,air,g4,air,
    stair1,air,door2,air,air,door1,air,door1,g6,air,d2,
],
[
    air,air,air,air,air,air,air,air,air,air,air,
    wall,wall,wall,wall,air,air,air,wall,wall,wall,wall,
    g4,g4,g4,wall,wall,air,wall,wall,g4,g4,g4,
    air,g5,air,door4,air,boss1,air,door4,air,g5,air,
    wall,wall,wall,wall,air,air,air,wall,wall,wall,wall,
    g4,d5,g4,wall,wall,air,wall,wall,g4,d4,g4,
    air,g5,air,wall,wall,air,wall,wall,air,g5,air,
    air,air,air,wall,wall,air,wall,wall,air,air,air,
    door1,wall,door1,wall,wall,door3,wall,wall,door1,wall,door1,
    player,wall,air,wall,air,air,air,wall,air,wall,air,
    stair2,wall,air,g6,air,air,air,g6,air,wall,d3,
],
];

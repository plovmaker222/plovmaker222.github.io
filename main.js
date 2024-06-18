const chars4=[
    {
        "id": 1,
        "name": "MOPS",
        "desc": "Этим нечистым оружием пытали политических преступников.",
        "rarity": 4
    },
    {
        "id": 2,
        "name": "LEIKA",
        "desc": "5000 + гифт будут отданы не зря, ведь это подношение Императрице.",
        "rarity": 4
    }
]
const chars3=[ 
{
        "id": 3,
        "name": "BONDIK",
        "desc": "Гарис 7-8 гавно спартак 5-6 *пердеж* ДА ДЕНИС свосвосвосвосвосвосвосвосвосво",
        "rarity": 3
    },
    {
        "id": 4,
        "name": "PLOVUS",
        "desc": "ммопс ммопс ммопс ммопс ммопс ммопс ммопс",
        "rarity": 3
    },
    {
        "id": 5,
        "name": "RIVAN",
        "desc": "- Пошли на улицы таркова - Пишли",
        "rarity": 3
    }
]
const chars2=[
    {
        "id": 6,
        "name": "MRUME",
        "desc": "вы только вдумайтесь",
        "rarity": 2
    },
    {
        "id": 7,
        "name": "KOHL",
        "desc": "ну парни это не я стойки продал, поймите, не я вас в чс всех кинул",
        "rarity": 2
    },
    {
        "id": 8,
        "name": "STOIKA",
        "desc": "Продано для покупки брони",
        "rarity": 2
    },
    {
        "id": 9,
        "name": "DEIMOS",
        "desc": "Опрокинул пузырь",
        "rarity": 2
    }
]
const chars1=[
    {
        "id": 10,
        "name": "CKYLBLOCK",
        "desc": " Такому могущественному оружию недостаточно одного владельца.",
        "rarity": 1
    },
    {
        "id": 11,
        "name": "QUEENOFFEZZA",
        "desc": "Фезочка, помыть тебя надо",
        "rarity": 1
    },
    {
        "id": 12,
        "name": "DENIS",
        "desc": "ААААААААААААААААААААААААААААААААААААААААА ДАЙ МНЕ ЛИСТОК Я ПОРИСОВАТЬ ХОЧУУУУУУУУУУУУУУ",
        "rarity": 1
    },
    {
        "id": 13,
        "name": "CKYL",
        "desc": "я так ливнуть хочу и тикток снимать с энергетиком в руках ведь я с.т.и.л.е.к.",
        "rarity": 1
    },
    {
        "id": 14,
        "name": "SHOOTER",
        "desc": "пиво льется через край, с 23 февраля) в дотку?",
        "rarity": 1
    }
]

function getRandom(){
    var num=Math.random();
    if(num < 0.4) return 1;  //probability 0.4
    else if(num < 0.7) return 2; // probability 0.3
    else if(num < 0.9) return 3; //probability 0.2
    else return 4;  //probability 0.1
}

function getRandomFromCategory(num){
    switch(num){
        case 1:
            idx=Math.floor(Math.random() * chars1.length);
            return chars1[idx];
        case 2:
            idx=Math.floor(Math.random() * chars2.length);
            return chars2[idx];
        case 3:
            idx=Math.floor(Math.random() * chars3.length);
            return chars3[idx];
        case 4:
            idx=Math.floor(Math.random() * chars4.length);
            return chars4[idx];
    }
}

class characters {
    constructor(id, name, desc, rarity){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.rarity = rarity;
    }
}

function rollPress () {
    const charJSON = getRandomFromCategory(getRandom());
    var charRolled = new characters(charJSON.id, charJSON.name, charJSON.desc, charJSON.rarity);
    document.getElementById("charname").innerHTML = charRolled.name;
    document.getElementById("chardesc").innerHTML = charRolled.desc;
    document.getElementById("charrarity").innerHTML = charRolled.rarity;
    if (charRolled.id==11){
        document.getElementById("charimg").src = "./images/" + charRolled.name + ".gif";
    }
    else {
        document.getElementById("charimg").src = "./images/" + charRolled.name + ".jpeg";
    }
    document.getElementById(charRolled.id).innerHTML++;

}
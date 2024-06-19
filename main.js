const chars5=[
    {
        "id": 15,
        "name": "SOVETDIREKTOROV",
        "desc": "Итоги голосования: Дима Бонд не допускается к разбану на этом сервере.",
        "rarity": 5
    }
]

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
    else if(num < 0.85) return 3; //probability 0.15
    else if(num < 0.95) return 4; // probability 0.1
    else return 5;  //probability 0.05
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
        case 5:
            idx=Math.floor(Math.random() * chars5.length);
            return chars5[idx];
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
    if (charRolled.id==11 || charRolled.id==15){
        document.getElementById("charimg").src = "./images/" + charRolled.name + ".gif";
    }
    else {
        document.getElementById("charimg").src = "./images/" + charRolled.name + ".jpeg";
    }
    document.getElementById(charRolled.id).innerHTML++;
    checkWin();

}

function getCharacterById (id) {
    for (let i = 0; i < chars1.length; i++){
        if (chars1[i].id == id){
            return chars1[i];
        }
    }
    for (let i = 0; i < chars2.length; i++){
        if (chars2[i].id == id){
            return chars2[i];
        }
    }
    for (let i = 0; i < chars3.length; i++){
        if (chars3[i].id == id){
            return chars3[i];
        }
    }
    for (let i = 0; i < chars4.length; i++){
        if (chars4[i].id == id){
            return chars4[i];
        }
    }
    for (let i = 0; i < chars5.length; i++){
        if (chars5[i].id == id){
            return chars5[i];
        }
    }
}

function showItem (id) {
    if (document.getElementById(id).innerHTML < 1){
        document.getElementById("charname").innerHTML = "not found yet!";
        document.getElementById("chardesc").innerHTML = "not found yet!";
        document.getElementById("charrarity").innerHTML = "not found yet!";
        document.getElementById("charimg").src = "./images/PLACEHOLDER.jpeg";
    }   
    else {
        const gottenChar = getCharacterById(id);
        var charByID = new characters(gottenChar.id, gottenChar.name, gottenChar.desc, gottenChar.rarity);
        document.getElementById("charname").innerHTML = gottenChar.name;
        document.getElementById("chardesc").innerHTML = gottenChar.desc;
        document.getElementById("charrarity").innerHTML = gottenChar.rarity;
        if (gottenChar.id==11 || gottenChar.id==15){
            document.getElementById("charimg").src = "./images/" + gottenChar.name + ".gif";
        }
        else {
            document.getElementById("charimg").src = "./images/" + gottenChar.name + ".jpeg";
        }
    }
}

function checkWin(){
    if (document.getElementById(1).innerHTML >= 1 && document.getElementById(2).innerHTML >= 1 && document.getElementById(3).innerHTML >= 1 && document.getElementById(4).innerHTML >= 1 && document.getElementById(5).innerHTML >= 1 && document.getElementById(6).innerHTML >= 1 && document.getElementById(7).innerHTML >= 1 && document.getElementById(8).innerHTML >= 1 && document.getElementById(9).innerHTML >= 1 && document.getElementById(10).innerHTML >= 1 && document.getElementById(11).innerHTML >= 1 && document.getElementById(12).innerHTML >= 1 && document.getElementById(13).innerHTML >= 1 && document.getElementById(14).innerHTML >= 1 && document.getElementById(15).innerHTML >= 1){
        document.getElementById("youwinblock").style.display = "block";
        console.log("true");
        return true;
    }
    else {
        console.log("false");
        return false;
    }
}
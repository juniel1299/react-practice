// 사용자 정의 타입가드

type Dog = {
    name : string;
    isBark : boolean;
};

type Cat = {
    name : string;
    isScratch : boolean;
};

type Animal = Dog | Cat;

// 강아지인지 고양이인지 구분 (???)
function isDog(animal : Animal): animal is Dog{
    return (animal as Dog).isBark !== undefined;
}

function isCat(animal : Animal) : animal is Cat {
    return (animal as Cat).isScratch !== undefined;
}


function warning(animal:Animal){
    if("isBark" in animal){

    }else if ("isScratch" in animal){

    }
}
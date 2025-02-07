// 타입 추론 
// 그냥 적어도 타입스크립트가 대충 추론하지만 무조건 되는건 아님 .. 
let a = 10;

let b = "hello";

let c = {
    id:1,
    name:"ㅇㅇ",
    profile : {
        hair:"ㅇㅇ",
    },
}

let {id,name,profile} = c;
let [one,two,three] = [1,'hello',true];

function func(message = "hello"){
    return "hello";
}

//정보가 없을때 추론 -> any 
// any 타입의 진화 -> 암묵적 any 타입 ()
let d;
// 숫자로 변경됨 
d = 10;
d.toFixed();

//문자로 다시 바꿀 수도 있음
d="hello";
d.toLowerCase();

// 그냥 리터럴 타입으로 나옴 (어차피 10 말고 담을게 없어서)
const num = 10;

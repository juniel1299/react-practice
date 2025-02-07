// 대수 타입 
// 여러개의 타입을 합성해서 새롭게 만들어낸 타입 
// 합집합 타입과 교집합 타입이 존재 

// 1. 합집합 - Union 타입

// a 변수에는 string 과 number 타입 선언 됨 (둘 다 가능.)
let a : string | number ; 
a = 1;
a = 'ㅎㅇ';


let arr : (number | string | boolean)[] = [1,'ㅎㅇ',true];


type Dog = {
    name : string,
    color : string,
};

type Person = {
    name : string,
    language : string,
};
// 합집합처럼 타입 선언한 두개를 붙일 수 있다 
// 단 , name 키만 쓰거나 language 키만 쓰면 에러남 . 
type Union1 = Dog | Person

let union1 : Union1 = {
    name:'ㅎㅇ',
    color:'ㅎㅇ',
};

let union2 : Union1 = {
    name:'ㅁㅁ',
    language:'ㄴㄴ',
};

let union3 : Union1 = {
    name:'ㄱㄱ',
    color:'tt',
    language:'ㅂㅂ',
};

// 2. 교집합 타입 - Intersection 타입 
// 여러개의 타입의 교집합을 만들 수 있음 (기본 타입으로 섞으면 대부분 never 나옴.)
// 객체 타입으로 교집합을 많이 씀 . 
//let variable: number & string;


// Dog 선언한 타입 , Person에서 선언한 타입 다 써야함 (교집합)
type Intersection = Dog & Person;

let intersection : Intersection = {
    name : '22',
    color : '33',
    language : '44',
};
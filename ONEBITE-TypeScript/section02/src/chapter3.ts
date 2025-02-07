//object
// 변수 : object 사용 시 typescript 는 객체지만 타입은 모름 > 에러남 .
// 키 밸류 형식으로 타입 주석을 해줘야함 .. 
// 구조적 타입 시스템 (c언어 , java 같은 이름을 기준으로 한다면 명목적 타입 시스템)
// 변수 : 타입 에서 타입 뒤에 ? 를 붙이면 있어도 되고 없어도 된다라는 뜻임 . 
// readonly 변수 : 타입 적으면 읽기 전용으로 값을 바꿀 수 없음..
let user: {
    id?:number,
    name:string,
} = {
    id : 1,
    name : 'ㅇㅇ',
};


user = {
    name : 'ㄹㄹ',
};

let config : {
    readonly apiKey : string;
} = {
    apiKey: 'cc',
};

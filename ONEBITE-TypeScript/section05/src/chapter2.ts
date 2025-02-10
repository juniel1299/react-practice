// 선언 합침

// type Person = {
//     name : string;
// }

// type Person = {
//     age : number;
// };

// 동일 한 이름으로 type 을 쓸 수 없음 (interface 는 가능)

interface Person {
    name : string;
}

interface Person {
    //name : number; (단, 같은 키 값을 오버라이딩 하는 식으로 진행은 못 함 .) (키 밸류가 기존과 같으면 에러 안 뜸..)
    age : number;
}
// interface 는 같은 변수를 여러번 써도 됨 + 객체 값 합쳐버림
const person : Person  = {
    name : "",
    age : 27,
};

// 모듈 보강
interface Lib {
    a : number;
    b : number;
}

// 객체가 추가 된 만큼 넣어줌 . 
interface Lib {
    c : string;
}

const lib : Lib = {
    a : 1,
    b : 2,
    c : 'hello',
};

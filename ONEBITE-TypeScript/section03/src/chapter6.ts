// 타입 단언 

// {} as 타입선언 식으로 하게 되면 먼저 선언 후 
// 추후 값을 넣는 구조를 가지게 할 수 있음.


type Person = {
    name : string;
    age : number;
};

let person = {} as Person;

person.name = 'ㅇㅇ';
person.age = 22;

// 초과 프로퍼티가 발생하는 경우
// 기존 2개 선언 한 후 3개를 넣게 되는 경우가 발생 할 때 사용 가능하다. 
type Dog = {
    name : string;
    color : string;
};

let dog = {
    name : 'ㅇㅇ',
    color : 'dd',
    breed : 'ㅁㅁ',
} as Dog;

// 타입 단언 규칙 
// 값 as 단언 <- 단언식
// A as B 에서 A가 B의 슈퍼타입 또는 A가 B의 서브타입인 경우에 가능하다.

let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as string;




// const 단언 

let num4 = 10 as const;

let cat = {
    name : 'ㅇㅇ',
    color : '22'
} as const;


//Non Null 단언
type Post = {
    title: string,
    author? : string,
};

let post : Post = {
    title : 'ㅇㅇ',
    author: 'ㅇㅈㅇ',
};
// Optional Changing (자바스크립트) -> author 에 자동으로 ? 붙여줌
// number 로 선언 했지만 ? 때문에 undefined 도 가능하기 때문에 에러 남 
const len : number = post.author!.length;
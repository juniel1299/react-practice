// 인터페이스


// 호출 시그니처만 작성하면 안에 객체도 불러 올 수 있음..
// 함수 타입으로 쓰게 되면 오버로드 시그니처 이해 못 함. (호출 시그니처 써야함) , (람다식 x)
interface Person {
    readonly name : string;
    age? : number;
    sayHi () : void;
    sayHi (a: number, b: number) : void;
}

const person : Person = {
    name:'ㅇㅇ',
    sayHi: function(){
        console.log("HI");
    },
};

person.sayHi();
person.sayHi(1,2);
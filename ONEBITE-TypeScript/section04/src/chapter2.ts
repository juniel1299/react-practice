// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 기준 
// 1. 반환값의 타입이 호환되는가?
// 2. 매개변수의 타입이 호환되는가?



// 기준 1 . 반환값이 호환되는가?

type A = () => number; // 넘버 타입
type B = () => 10; // 넘버 리터럴 타입 


let a:A = () => 10;
let b:B = () => 10;

a = b;
// b = a (안 됨) (다운캐스팅)

// 기준 2 . 매개변수가 호환되는가 ? 
// 2-1 매개변수 개수가 같을 때

type C = (value : number) => void;
type D = (value : 10) => void;

let c : C = (value) => {};
let d : D = (value) => {};

//c = d;
d = c;

type Animal = {
    name : string;
};

type Dog = {
    name : string;
    color : string;
};

let animalFunc = (animal : Animal) => {
    console.log(animal.name);
};

let dogFunc = (dog : Dog) => {
    console.log(dog.name);
    console.log(dog.color);
}

//animalFunc = dogFunc; 안 됨
dogFunc = animalFunc;


let testFunc = (animal:Animal) => {
    console.log(animal.name);
    //console.log(animal.color); animal에 color 없으니 당연히 안 됨 
}

let testFunc2 = (dog : Dog) =>{
    console.log(dog.name);
}

// 2-2 매개변수 개수가 다를 때

type Func1 = (a : number , b: number) => void;
type Func2 = (a : number) => void;

let func1 : Func1 = (a,b) => {};
let func2 : Func2 = (a) => {};

func1 = func2; // 많은 값 = 적은 값
// func2 = func1; 적은 값 = 많은 값 -> 값이 다 못 들어가기 때문에 안 됨
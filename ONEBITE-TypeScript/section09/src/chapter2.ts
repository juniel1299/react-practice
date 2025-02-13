// infer 

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

type C = ReturnType<number>;


// 예시 

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
//1. T에 적용되는 타입은 Promise 타입이어야 한다.
//2. 프로미스 타입의 결과값 타입을 반환해야한다.



type PromiseA = PromiseUnpack<Promise<number>>;
//number 


type PromiseB = PromiseUnpack<Promise<string>>;
//string
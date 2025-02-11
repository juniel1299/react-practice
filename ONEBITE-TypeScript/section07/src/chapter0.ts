// 제네릭

function func<T>(value:T) : T{
    return value;
}

let num = func(10);

if(typeof num === 'number'){
    num.toFixed();
}

let bool = func(true);

let str = func('string');

let arr = func([1,2,3]);

let arr2 = func<[number,number,number]> ([1,2,3]);
// 타입 좁히기
// 조건문을 활용해 넓은 타입에서 좁은 타입으로
// 타입을 상황에 따라 범위를 조정함.

type Person = {
    name : string,
    age : number,
};

// value 가 number 면 toFixed
// value 가 string 이면 toUpperCase
// value 가 Date 면 getTime
// value 가 Person 이면 name 은 age 입니다.
function func(value : number | string | Date | Person)  {
    if(typeof value === 'number'){
        console.log(value.toFixed());
    }
    else if (typeof value === 'string'){
        console.log(value.toUpperCase());
    }
    else if (value instanceof Date){
        console.log(value.getTime());
    }
    else if (value && "age" in value) {
        console.log(`${value.name} 은 ${value.age} 살 입니다.`);
    }
};

// keyof 연산자


//typeof 를 타입 정의 시에 사용하게 되면 추출 할 수 있음.
type Person = typeof person;


function getPropertyKey(person : Person, key : keyof Person){ //keyof 다음은 무조건 타입 
    return person[key];
}

const person = {
    name : 'ㅇㅇ',
    age : 22,
};

getPropertyKey(person, "name");
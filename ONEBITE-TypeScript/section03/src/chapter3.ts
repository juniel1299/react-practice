// 기본 타입간의 호환성

let num1 : number = 10;
let num2 : 10 = 10;

num1 = num2;


// 객체 타입간의 호환성 
// 어떤 객체타입을 다른 객체 타입으로 취급해도 괜찮은가 ? 

type Animal = {
    name:string,
    color:string,
};

type Dog = {
    name:string,
    color:string,
    breed:string,
};

let animal:Animal = {
    name: '기린',
    color : 'yellow'
};

let dog:Dog = {
    name:'ㅇㅇ',
    color:"ㅈㅈ",
    breed:"ㅍㅍ",
};

animal = dog;

// dog = animal; 인 경우 안 됨 
// (animal 과 dog 가 부모 자식 관계가 됨) -> dog 가 슈퍼 , animal이 자식
// 동일한 키 2개 (dog은 + breed) 이므로 dog가 슈퍼이므로 다운캐스팅 .

type Book = {
    name : string,
    price : number,
};

type ProgrammingBook = {
    name : string,
    price : number,
    skill : string,
};

let book : Book;

let programmingBook : ProgrammingBook = {
    name : "dd",
    price : 11,
    skill : '33',
};

book = programmingBook;

//programmingBook = book; 마찬가지로 다운캐스팅이라 안 됨

// 초과 프로퍼티 검사 
// Book 타입 선언시에 skill 없었는데 추가하면 에러남 . 

let book2 : Book = {
    name : '333',
    price : 22,
    //skill : '33',
};

// 추가하고 싶으면  이렇게 초기화 하면 됨 . 
let book3 : Book = programmingBook;

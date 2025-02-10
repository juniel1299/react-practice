// 인터페이스 확장
// extends 를 이용해 Animal이 가지고 있는 객체를 공유 가능함.

interface Animal {
    name : string;
    age : number;
};

interface Dog extends Animal {
    isBark : boolean;
};

interface Cat extends Animal {
    isScratch : boolean;
};
interface Chicken extends Animal {
    isFly : boolean;
};


const dog : Dog = {
    name : 'ㅇㅇ',
    age : 11,
    isBark : true,
}

interface DogCat extends Dog, Cat {

}

const dogCat : DogCat = {
    name : "",
    age : 11,
    isBark : true,
    isScratch : true,
}
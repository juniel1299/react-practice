// 제네릭 인터페이스 , 타입 변수 (제네릭 타입 변수)

interface KeyPair<K,V> {
    key: K,
    value : V
};

let keyPair : KeyPair<string,number> = {
    key : 'key',
    value : 0,
};

let keyPair2 : KeyPair<boolean,string[]> = {
    key:true,
    value:['1','1'],
};

// 인덱스 시그니처

interface NumberMap {
    [key : string] : number;
}

let numberMap1 : NumberMap = {
    key : 11,
    key2 : 131
};

interface Map<V>{
    [key : string] : V;
}

let stringMap : Map<string> = {
    key : "value",
};

let booleanMap : Map<boolean> = {
    key:true,
};

// 제네릭 타입 별칭

type Map2<V> = {
    [key: string] : V;
};

let stringMap2 : Map2 <string> = {
    key: "hello"
};

// 제네릭 인터페이스 활용 예시
// 유저 관리 프로그램 , 유저구분 : 학생 , 개발자 

interface Student {
    type : 'student';
    school : string;
};

interface Developer {
    type : 'developer';
    skill : string;
};

interface User<T> {
    name : string;
    profile : Student | Developer;
}

function goToSchool(user:User<Student>){
    if(user.profile.type !== 'student'){
        console.log('???');
        return;
    }
    const school = user.profile.school;
    console.log(`${school}로 완료`);    
}

const developer1 : User<Developer> = {
    name : 'ㅇㅇ',
    profile : {
        type : "developer",
        skill : "TypeScript",
    },
};

const studentUser : User<Student> = {
    name : 'ㅇㅇ',
    profile : {
        type : "student",
        school : "ㄹㄹ",
    },
}

goToSchool(developer1);
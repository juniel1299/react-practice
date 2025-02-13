// Partial<T>
// -> 부분적인, 일부분의
// -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입 . 


interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?:string;
}

type Partial<T> = {
    [key in keyof T]? : T[key]; // 인덱스드 엑세스 타입 (특정 개체에서 타입 추출)
}


const draft: Partial<Post> = {
    title: 'ㅈㅈ',
    content : 'ㅇㅇ',
}


// Required<T>
// 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입 . 

type Required<T> = {
    [key in keyof T]-?: T[key];
}

const withThumbnailPost : Required<Post> = {
    title : "ㅇㅇ",
    tags:['ts'],
    content:'2',
    thumbnailURL:'11',
};

//Readonly<T>

// 읽기전용 수정 불가 
// 특정 객ㅊ체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만듬

type Readonly<T> = {
    readonly [key in keyof T] : T[key];
};

const readonlyPost: Readonly<Post> = {
    title:'ㅇㅇ',
    tags:[],
    content:'ㅇㅇ',
};
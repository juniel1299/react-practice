// Pick<T,K>
// 객체 타입으로부터 특정 프로퍼티만 골라내는 타입 

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?:string;
}

type Pick<T,K extends keyof T> = {
    [key in K]: T[key];
}

const legacyPost : Pick<Post,"title" | "content"> = {
    title:'??',
    content:'??!',
};

// Omit<T,K>
// 객체 타입으로부터 특정 프로퍼티를 제거하는 타입

type Omit<T,K extends keyof T> = Pick<T, Exclude<keyof T,K>>;

const noTitlePost : Omit<Post,'title'> = {
    content:'ㅇㅇ',
    tags:[],
    thumbnailURL:'ㅇㅇ'
}

// Record<K,V>
//객체 타입을 정의 할 때 반복되는 내용을 간단하게 정의 할 수 있게 해줌. 

type ThumbnailLegacy = {
    large : {
        url : string;
    };
    medium : {
        url : string;
    };
    small : {
        url : string;
    };
    watch: {
        url : string;
    }
};

type Record<K extends keyof any, V> = {
    [key in K]: V;
};

type Thumbnail = Record<"large" | "medium" | "small", { url: string}>;
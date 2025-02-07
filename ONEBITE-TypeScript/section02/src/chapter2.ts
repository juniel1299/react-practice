// 배열
// 자바의 제네릭 처럼 할 수도 있고 [] 로도 가능함.
// 타입 [] 또는 배열 <타입>
let numArr : number[] = [1,2,3];

let strArr : string[] = ['hello','hi','안녕'];

let boolArr : boolean[] = [true,false,true];
let boolArr1 : Array<boolean> = [true,false,true];

// 여러 타입의 데이터가 존재하는 배열
let multiArr :(number | string)[] = [1,'hello'];

// n차원 배열
let doubleArr:number[][] = [
    [1,2,3],
    [4,5,6]
]

// 튜플 (길이 타입이 고정된 배열) , 
// 단 자바스크립트에 튜플 없음 -> 그냥 배열로 나옴 (js로 바뀌면서 길이 제한 못 걸음)
let tup1:[number,number] = [1,2];

let tup2:[number,string,boolean] = [1,'2',true];

// 순서를 지켜야 하는 경우 (ex : 이름 , 번호)에 사용
const users:[string,number][] = [
    ['ㅇㅇㅇ',1],
    ['ㄴㄴㄴ',2],
    ['ㅁㅁㅁ',3],
]
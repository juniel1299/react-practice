// 함수 타입 표현식
// 비슷한 형태가 많으면 하나의 타입 선언을 호출해주자..

type Operation = (a:number , b : number) => number;


const add : Operation = (a,b) => a + b;
const minus : Operation = (a,b) => a - b;
const multiply : Operation = (a,b) => a * b;
const divide : Operation = (a,b) => a / b;


// 호출 시그니처 
// 콜 시그니처
type Operation2 = {
    (a : number , b : number) : number;
    name : string;
};

const add2 : Operation2 = (a,b) => a + b;
const minus2 : Operation2 = (a,b) => a - b;
const multiply2 : Operation2 = (a,b) => a * b;
const divide2 : Operation2 = (a,b) => a / b;

// 하이브리드 타입
add2.name
// 함수 오버로딩 
// 하나의 함수를 매개변수의 개수 또는 타입에 따라 
// 여러가지 버전을 만듬 
// 하나의 함수 func 
// 모든 매개 변수 타입 number 
// 매개변수 1개 -> 20 더해서 출력
// 3개 -> 모든 수의 합


// 버전들 -> 오버로드 시그니처 (함수를 오버로딩 하기 위해서 버전 명시)
function func(a:number): void;
function func(a:number,b:number,c:number): void;

// 구현부

function func(a:number,b?:number,c?:number){
    if(typeof b ==='number' && typeof c === 'number'){
        console.log(a+b+c);
    }
    else {
        console.log(a + 20);
    }
};

func(1);
func(1,3,2);
// 함수 타입 정의 

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 (타입의) 매개변수 받고 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a:number,b:number) : number {
    return a + b;
}


//화살표 함수 타입 정의 방법

const add = (a:number,b:number): number => a+b;


//함수의 매개변수 (선택적 매개변수)
//선택적 매개변수 (뒤에 ? 붙는거)는 무조건 맨 뒤로 보내야 한다 (필수적 매개변수는 선택적 뒤에 있을 수 없다.)
function introduce (name = 'ㅇㅇ',tall? : number){
    console.log(`name : ${name}`);
    console.log(`tall : ${tall}`);
}

introduce('ㅇㅇ',11);

introduce('ㅇㅇ')

function getSum(...rest : number[]){
    let sum = 0;
    rest.forEach((it)=> (sum += it));

    return sum;
}

getSum(1,2,3);
getSum(1,2,3,4,5);
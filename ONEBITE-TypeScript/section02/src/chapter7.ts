// void 
// void -> 아무것도 없음을 의미하는 타입 (undefined 만 가능 , return 없음)
// strictNullCheck 끄면 값 넣을 수 있음. 
// null을 선언 하면 또 return 으로 한번 더 써야하므로 void 씀 

function func1() : string {
    return "hello";
}

function func2() : void {
    console.log('ㅎㅇ');
}



// Never 
// 불가능한 타입
// 정상적으로 종료가 안 되는 경우 
// 저장할 수 없는 경우 
function func3():never {
    while(true){

    }
}

function func4():never{
    throw new Error();
}
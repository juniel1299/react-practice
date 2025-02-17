// 1번 사례 


function swap<T, U>(a:T,b:U){
    return [b,a];
}

const [a,b] = swap ("1",2);

// 2번 
// 데이터의 타입 변수를 모르는데 선언 또는 호출하게 될 경우 unknown 활용
function returnFirstValue<T>(data:[T, ...unknown[]]){
    return data[0];
}


let num = returnFirstValue([0,1,2]);

let str = returnFirstValue(["dd",'ww']);

// 3번
// length 가 존재하는 경우만 전달하도록 (var4 불가능하도록)
function getLength<T extends {length : number}>(data: T){
    return data.length;
}

let var1 = getLength([1,2,3]);  //3

let var2 = getLength("12345");  //5

let var3 = getLength({length : 10});    //10 

//let var4 = getLength(10); 불가능. 
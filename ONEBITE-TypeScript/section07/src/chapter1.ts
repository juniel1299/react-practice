// 1번 사례 


function swap<T, U>(a:T,b:U){
    return [b,a];
}

const [a,b] = swap ("1",2);

// 2번 

function returnFirstValue<T>(data:[T, ...unknown[]]){
    return data[0];
}


let num = returnFirstValue([0,1,2]);

let str = returnFirstValue(["dd",'ww']);

// 3번
// length 가 존재하는 경우만 전달하도록 
function getLength<T extends {length : number}>(data: T){
    return data.length;
}

let var1 = getLength([1,2,3]);

let var2 = getLength("12345");

let var3 = getLength({length : 10});

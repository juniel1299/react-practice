//number

let num1 : number = 123;
let num2 : number = -123;
let num3 : number = 0.123;
let num4 : number = -0.123;
let num5 : number = Infinity;
let num6 : number = -Infinity;
let num7 : number = NaN;

//string
let str1:string = "hello";
let str2:string = `hello${num1}`;

let boo1:boolean = true;
let boo2:boolean = false;

// undefined
let unde1:undefined = undefined;


//  null 옵션 strictNullChecks 를 tsconfig 옵션에서 키게 되면 에러 남 .
// 단 strict 를 키고 strictNullChecks 는 따로 끌 수 있음 .  
let null1:null = null;


// 리터럴 타입
// 무조건 : 우측에 있는 숫자만 들어감. 
let strA : 10 = 10; 

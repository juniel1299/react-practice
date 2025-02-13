//분산적인 조건부 타입 

type StringNumberSwitch<T> = T extends number ? string : number;

let a : StringNumberSwitch<number>;

let b : StringNumberSwitch<string>;

//유니온 타입을 넣었기 때문에 분산적 조건부 타입이 되어버림. 
// -> 한번은 number , 한번은 string 으로 들어감 
// -> string , number 가 됨 
// -> 이후 하나로 묶임 <string | number>
let c : StringNumberSwitch<number | string>;

// boolean 으로 한번 , number 로 한번 , string 으로 한 번 들어감 
// -> number , string , number 가 됨 
// -> 이후 하나로 묶임 <number | string > (중복은 지워짐) 
let d : StringNumberSwitch<boolean | number | string>;


//예시
// T가 U의 확장형태인가 ?
type Exclude <T,U> = T extends U ? never : T;


// <number,string> | <string , string> | <boolean , string > 
// -> number , never , boolean 
// -> 결과 number | never | boolean ( never 는 생략됨 ) -> number | boolean
type A = Exclude<number | string | boolean,string>;


//예시 2 

type Extract<T,U> = T extends U ? T : never;


// <number , string > | <string, string> | <boolean,string> 
// -> never | string | never 
// -> string
type B = Extract<number | string | boolean , string > ;


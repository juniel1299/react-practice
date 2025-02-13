//조건부 타입 
// 확장,3항 연산자를 활용해서 타입을 선언함 .  (제네릭 타입과 많이씀).

// ex : 넘버는 string의 확장인가 ? -> 아니므로 number
type A = number extends string ? string : number;

type ObjA = {
    a : number;
};

type ObjB = {
    a : number;
    b : number;
}

// ObjB는 ObjA의 확장이므로 number 
type B = ObjB extends ObjA ? number : string;


//제네릭 , 조건부 타입 

type StringNumberSwitch<T> = T extends number ? string : number;

let varA : StringNumberSwitch<number>

let varB : StringNumberSwitch<string>

function removeSpaces<T>(text : T) : T extends string ? string : undefined;
    function removeSpaces(text:any) {
        if(typeof text === 'string'){
            return text.replaceAll(" ","");
        }
        else{
            return undefined;
        }
    }

let result = removeSpaces("가 나 다 라 마");
console.log(result.toUpperCase());
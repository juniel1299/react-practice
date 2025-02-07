//타입 별칭
// 타입을 type 변수로 정의 해놓고 쓸 수 있다. (단 같은 스코프 내에서 여러개 못 씀) 
// js로 변환될 떄 타입 정의는 사라짐. 
type User = {

    id : number,
    name : string,
    nickname : string,
    bio : string,
}

let user:User = {
    id : 1,
    name : 'dd',
    nickname : '???',
    bio : '222',
};


// 인덱스 시그니처
// 키와 밸류의 규칙을 이용해서 타입 주석을 정의함.
type CountryCodes = {
    [key: string]:string;
}
let countryCodes: CountryCodes = {
    Korea : 'ko',
    UnitedKingdom : 'uk',
    UnitedState : 'us',
}

//키는 문자 , 이외에 number 이므로
type CountryNumberCodes = {
    [key:string] :number;
}
let countryNumberCodes : CountryNumberCodes = {
    Korea:410,
    UnitedKingdom:420,
    UnitedState:430,
}


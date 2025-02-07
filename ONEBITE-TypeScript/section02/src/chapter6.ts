// any 
// 특정 변수의 타입을 모를 때 사용 할 수 있는 타입 . 
// 타입스크립트에서 타입 검사를 피해갈 수 있음 
// (단, 함수를 넣은채로 upper 메서드를 쓴다던가 하면 에러 남 . (타입스크립트 특징을 없앰) )

// 변수에 숫자형 선언 후 문자형 넣은 형태 ..
let anyVar : any = 10;
anyVar = 'hello';


// unknown
// any 처럼 타입 모를 때 사용 가능
// 단, 값을 집어넣을 수 없음 . 
let unknownVar : unknown;

unknownVar = 10;
unknownVar = "";
unknownVar = [1,2,3,4];


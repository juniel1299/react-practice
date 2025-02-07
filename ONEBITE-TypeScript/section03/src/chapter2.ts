// Unknown 타입 (모든 타입의 슈퍼 타입 -> 모든 값을 넣을 수 있음.)
function unknownExam() {
    let a : unknown = 1;
    let b : unknown = "hello";
    let c : unknown = true;
    let d : unknown = null;
    let e : unknown = undefined;
}

//Never 타입 (공집합으로 보면 됨 .)
function neverExam() {
    function neverFunc():never {
        while (true) {}
    }

    let num : number = neverFunc();
    let str : string = neverFunc();
    let bool : boolean = neverFunc();
}

// void 타입 

function voidExam() {
    function voidFunc() : void {
        console.log('hi');
    }

    let voidVar : void = undefined;
}
// any 타입 (모든 타입의 슈퍼타입으로도 존재가 가능하고 , never를 제외한 모든 타입의 서브 타입으로 존재 가능하다 . )
function anyExam() {
    let unknownVar : unknown;
    let anyVar : any;
    let undefinedVar : undefined;

    anyVar = unknownVar;

    undefinedVar = anyVar;
}
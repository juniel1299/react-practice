// 인터페이스와 클래스

interface CharacterInterface {
    name : string;
    moveSpeed : number;
    move() : void;
}

class Charater implements CharacterInterface{

    constructor(public name : string, public moveSpeed : number){}
    move() : void {
        console.log(`${this.moveSpeed}ㅇㅇㅇ`);
    }
}
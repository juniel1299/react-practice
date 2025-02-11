//접근 제어자 
//access modifier
// public private proteced (그냥 자바..)

class Employee {
    //필드
    public name: string;
    private age : number;
    protected position : string;

    //생성자
    constructor(name:string, age:number, position:string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    //메서드
    work(){
        console.log('일함');
    }
};

const employeeB = new Employee("ㅇㅇ",22,"ㅇㅇ");

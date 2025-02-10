/**
 * 클래스
 */

let studentA = {
    name: '김민경',
    grade: "a+",
    age: 27,
    study() {
        console.log("열심히 공부 함")
    },
    introduce() {
        console.log('안녕하세요')
    }
}

class Student {
    // 필드 : 클래스가 만들어낼 객체의 프로퍼티를 의미함
    name;
    grade;
    age;
    // 생성자 : 클래스를 호출하면 실제로 객체를 생성하는 함수
    constructor(name, grade, age) {
        // this : 클래스가 만들고 있는 객체이다
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    // 메서드
    // 💡 메서드간 ,를 쓰지않는다
    study() {
        console.log('열심히 공부함')
    }
    introduce() {
        console.log('안녕하세요')
    }
}

class StudentDeveloper extends Student {
    //필드
    favoriteSkill;
    //생성자
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age)
        this.favoriteSkill = favoriteSkill;
    }

    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍함`)
    }
}
const studentDeveloper = new StudentDeveloper("이정환", "A+", 27, 'typeScript')
console.log(studentDeveloper)
console.log(studentDeveloper.programming())

// 클래스를 호출하고 객체를 생성할때 new키워드 필수
// 함수를 호출하듯 인수를 전달하게 되면 클래스에 있는 생성자를 호출하게 된다.
// 클래스를 이용해서 만든 객체 => 인스턴스
// 스튜던트 인스턴스

// let studentB = new Student("김민경",1,27)
// console.log(studentB)
// studentB.study()
// studentB.introduce()
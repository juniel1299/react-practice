// enum 타입 

// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입 

// 숫자형 enum
// 0 -> 관리자 , 1 -> 유저 , 2 -> 게스트
// 굳이 숫자 할당 안 해줘도 위에서부터 0 , 1 , 2 적용됨 . (첫번째 숫자가 10이면 11 12 됨 .)
enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

// 문자형 enum
enum Language {
    Korea = 'ko',
    UnitedState = 'us'
}

const user1 = {
    name : 'ㅇㅇ',
    role : Role.ADMIN, // 0 관리자
    language : Language.Korea
}
const user2 = {
    name : 'ㅇㅇ',
    role : Role.USER, // 1 일반 유저
    language : Language.Korea
}
const user3 = {
    name : 'ㅇㅇ',
    role : Role.GUEST, // 2 게스트
    language : Language.UnitedState
}
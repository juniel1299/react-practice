// 서로소 유니온 타입 
// 교집합이 없는 타입들로만 만들었을 때 유니온 타입이라 말함.
// ( ex : string , number)

type Admin = {
    tag : 'ADMIN';
    name : string;
    kickCount : number;
};

type Member = {
    tag : 'MEMBER';
    name : string;
    point : number;
};

type Guest = {
    tag : 'GUEST';
    name : string;
    visitCount : number;
};


type User = Admin | Member | Guest;


// Admin -> {name} 님이 현재 {kickCount}번 강퇴했습니다.
// Member -> {name} 님이 현재 {point}번 강퇴했습니다.
// Guest -> {name} 님이 현재 {visitCount}번 강퇴했습니다.
function login(user : User){

    switch(user.tag){
        case "ADMIN" :
            {
                console.log(`${user.name}님 ${user.kickCount} 번 강퇴했습니다.`);
                break;
            }
        case "MEMBER" :
            {
                console.log(`${user.name}님 ${user.point} 번 강퇴했습니다.`);
                break;
            }
        case "GUEST" : 
            {
                console.log(`${user.name}님 ${user.visitCount} 번 강퇴했습니다.`);
                break;
            }
        break;
    }
}

// 비동기 작업이 결과를 처리하는 객체 

type LoadingTask = {
    state : "LOADING"
};

type FailedTask = {
    state : "FAILED",
    error : {
        message : string;
    }
}

type SuccessTask = {
    state : "SUCCESS",
    response : {
        data : string;
    }
}

type AsyncTask = LoadingTask | FailedTask | SuccessTask;
// 로딩중 -> 콘솔 로딩중 출력
// 실패 -> 실패 메세지 출력
// 성공 -> 데이터 출력

function processResult(task : AsyncTask) {
    switch(task.state){
        case "LOADING" :
            {
                console.log('로딩중');
                break;
            }
        case "FAILED" :
            {
                console.log(`에러 발생 ${task.error.message}`);
                break;
            }
        case "SUCCESS" :
            {
                console.log(`${task.response.data}`);
                break;
            }
    }
}


const loading : AsyncTask = {
    state : 'LOADING',
};

const failed : AsyncTask = {
    state : 'FAILED',
    error : {
        message : "오류",
    },
};

const success : AsyncTask = {
    state : "SUCCESS",
    response : {
        data : "ㅇㅇ",
    },
};


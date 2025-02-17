// 프로미스

const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(20);    // 성공 결과 값
        //reject('실패');    // 실패 결과 값
    },3000);              //몇 초 후 (ms)
})

promise.then((response) => {
    console.log(response);  // response 는 unknown 형식 (연산x) 그러므로 제네릭으로 타입 할당해줘야함 (Promise<number>)
});

promise.catch((err) => {
    if(typeof err === 'string'){
        console.log(err);
    }
});

// 프로미스를 반환하는 함수 , 타입 정의

interface Post {
    id : number;
    title : string;
    content : string;
};

function fetchPost(): Promise<Post>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({
                id : 1,
                title : 'dㅇ',
                content : 'ㄴㄹㅂ',
            });
        },3000);
    });
}

const postRequest = fetchPost();
postRequest.then((post) => {
    post.id;
})
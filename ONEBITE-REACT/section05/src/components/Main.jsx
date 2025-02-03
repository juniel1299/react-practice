import "./Main.css";
// JSX 주의 사항 
// 1. 중괄호 내부에는 자바스크립트 표현식만 가능하다 (if , for 직접 못 넣음) 
// 2. 숫자 , 문자열 , 배열 값만 렌더링 된다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야 한다. (최상위에 2개 이상 있으면 안 됨 , 어쩔 수 없는 경우 빈 태그로 감싼다.)
const Main = () =>{
    const user = {
        name : "장원준",
        isLogin: true,
    };

    if(user.isLogin) {
        return <div className="logout"> 로그아웃 </div>;
    } else {
        return <div> 로그인 </div>;
    }
    // return 
    //     <>
    //     {user.isLogin ?
    //         (<div> 로그아웃</div>
    //     ) : (
    //     <div> 로그인</div>
    //     )};
    // </>
};

export default Main;
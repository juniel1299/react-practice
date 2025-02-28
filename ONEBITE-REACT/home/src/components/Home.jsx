import { useState } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

export default function Home(){

    const [id,setId] = useState();
    const [password,setPassword] = useState();

    const nav = useNavigate();
    const onCLickLogin = () => {
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const user = existingUsers.find(user => user.id === id && user.password === password);

        if (user) {
            localStorage.setItem("isAuthenticated", "true"); 
            localStorage.setItem("currentUser", id); 
            nav("/homepage"); // 
          } else {
            alert("아이디 또는 비밀번호가 잘못되었습니다.");
          }
    }
    const onCLickRegisterPage = () => {
        nav("/register");
    }


    return(
        <div className="container">
            <div className='title'>
                로그인
            </div>
            <div className='input'>
                <input type="id" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)}/>
                <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={onCLickLogin}>로그인</button>
                <button onClick={onCLickRegisterPage}>회원가입</button>
            </div>
        </div>
    )
}
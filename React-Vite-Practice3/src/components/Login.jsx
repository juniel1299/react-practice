import { useNavigate } from "react-router-dom";
import Header from "./Header";
import './login.css';
import { useState } from "react";
const Login = () => {
    // 로그인
    const [loginId, setLoginId] = useState();
    const [loginPassword, setLoginPassword] = useState();
    const nav = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    //회원가입 화면 이동
    const onClickRegister = () => {
        nav('/register')
    }

    const onClickIdSearch = () => {
        nav('/searchPassword')
    }


    // 로그인 버튼 
    const handleLogin = () => {
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const user = existingUsers.find(user => user.loginId === loginId && user.loginPassword === loginPassword);

        // 로그인 사용자 저장
        if (user) {
            localStorage.setItem("isAuthenticated", "true"); 
            localStorage.setItem("currentUser", loginId); 
            nav("/"); // 
          } else {
            alert("아이디 또는 비밀번호가 잘못되었습니다.");
          }
    };

    // 비밀번호 보이게 / 안 보이게 
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div>
        <Header/>
            <div className="Login">
                아이디
                <input
                    className="textInput"
                    type="text"
                    placeholder="아이디"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                />
                비밀번호
                <input 
                    className="textInput"
                    type={showPassword ? "text" : "password"}
                    placeholder="비밀번호"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === 'Enter'){
                            handleLogin();
                        }
                    }}
                />
                <button 
                    onClick={handleLogin}
                >로그인</button>
                <div className="password-toggle">
                    <input
                        className="checkbox"
                        type="checkbox"
                        checked={showPassword}
                        onChange={togglePasswordVisibility}
                        id="showPassword"
                    />
                    <label htmlFor="showPassword">비밀번호 표시</label>
                </div>
            </div>
            <button className="Register-Button" onClick={onClickRegister}>회원가입</button>
            <button className="ID-Search-Button" onClick={onClickIdSearch}>비밀번호 찾기</button>
        </div>
    )
}
export default Login;
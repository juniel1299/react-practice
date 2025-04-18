import { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

// 계정 타입 선언
interface User {
    loginId: string;
    loginPassword: string;
  }
function Register() {
    const [loginId, setLoginId] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const navigate = useNavigate();
  
    const handleRegister = () => {
      if (!loginId || !loginPassword) {
        alert("아이디와 비밀번호를 입력해주세요.");
        return;
      }
  
      // 기존 사용자 정보 가져오기
    const existingUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");

  
      // 아이디 중복 체크
      const userExists = existingUsers.some((user: User) => user.loginId === loginId);
      if (userExists) {
        alert("이미 존재하는 아이디입니다.");
        return;
      }
  
      // 새로운 사용자 추가
      const newUser = { loginId, loginPassword };
      localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
      
      alert("회원가입이 완료되었습니다!");
      navigate("/");
    };
  
    return (
      <div className="Register">
        <Header/>
        <h2>회원가입</h2>
        <input
          type="text"
          placeholder="아이디"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === 'Enter'){
                handleRegister();
            }
        }}
        />
        <button onClick={handleRegister}>회원가입</button>
      </div>
    );
  }
  
  export default Register;
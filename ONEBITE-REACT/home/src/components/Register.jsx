import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleRegister = () => {
      if (!id || !password) {
        alert("아이디와 비밀번호를 입력해주세요.");
        return;
      }
  
      // 기존 사용자 정보 가져오기
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  
      // 아이디 중복 체크
      const userExists = existingUsers.some(user => user.username === id);
      if (userExists) {
        alert("이미 존재하는 아이디입니다.");
        return;
      }
  
      // 새로운 사용자 추가
      const newUser = { id, password };
      localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
      
      alert("회원가입이 완료되었습니다!");
      navigate("/");
    };
  
    return (
      <div className="Register">
        <h2>회원가입</h2>
        <input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
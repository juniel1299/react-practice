import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import './login.css';

// 사용자 정보 타입 선언
interface User {
  loginId: string;
  loginPassword: string;
}

const Login = () => {
  // 로그인 상태 관리
  const [loginId, setLoginId] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // 회원가입 페이지 이동
  const onClickRegister = (): void => {
    nav("/register");
  };

  // 비밀번호 찾기 페이지 이동
  const onClickIdSearch = (): void => {
    nav("/searchPassword");
  };

  // 로그인 버튼 클릭 시 실행
  const handleLogin = (): void => {
    const existingUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    const user: User | undefined = existingUsers.find(
      (user: User) => user.loginId === loginId && user.loginPassword === loginPassword
    );

    // 로그인 성공 시 localStorage에 사용자 정보 저장 후 홈으로 이동
    if (user) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("currentUser", loginId);
      nav("/");
    } else {
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  // 비밀번호 보이기/숨기기 기능
  const togglePasswordVisibility = (): void => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <Header />
      <div className="Login">
        아이디
        <input
          className="textInput"
          type="text"
          placeholder="아이디"
          value={loginId}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginId(e.target.value)}
        />
        비밀번호
        <input
          className="textInput"
          type={showPassword ? "text" : "password"}
          placeholder="비밀번호"
          value={loginPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginPassword(e.target.value)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
        />
        <button onClick={handleLogin}>로그인</button>
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
      <button className="Register-Button" onClick={onClickRegister}>
        회원가입
      </button>
      <button className="ID-Search-Button" onClick={onClickIdSearch}>
        비밀번호 찾기
      </button>
    </div>
  );
};

export default Login;
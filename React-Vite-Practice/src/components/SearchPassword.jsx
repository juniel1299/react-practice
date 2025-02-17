import { useState } from 'react';
import './SearchPassword.css';
import { useNavigate } from 'react-router-dom';

const SearchPassword = () => {
    const [loginId, setLoginId] = useState('');
    const [foundPassword, setFoundPassword] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const nav = useNavigate();
    const onClickHome = () => {
        nav('/');
    }

    // 비밀번호 찾기 함수
    const handleSearchPassword = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find((user) => user.loginId === loginId);
        

        if (user) {
            setFoundPassword(user.loginPassword);
            setErrorMessage('');
        } else {
            setFoundPassword(null);
            setErrorMessage('아이디를 찾을 수 없습니다.');
        }
    };

    return (
        <div>
            <h2>비밀번호 찾기</h2>
            <input
                type="text"
                placeholder="아이디를 입력하세요"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSearchPassword();
                }}
            />
            <button onClick={handleSearchPassword}>비밀번호 찾기</button>

            <div>
                검색 결과
            </div>
            {foundPassword && (
                <div className="result">
                    <p> 비밀번호: {foundPassword}</p>
                </div>
            )}

            {errorMessage && (
                <div className="error">
                    <div>{errorMessage}</div>
                </div>
            )}
            <button onClick={onClickHome}>
                뒤로가기
            </button>
        </div>
    );
};

export default SearchPassword;
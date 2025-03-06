import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
    const nav = useNavigate();
    
    return(
        <div className="header">
            <div onClick={() => nav('/history')}>
                검색 기록
            </div>
            <div onClick={() => nav('/')}>
                Home
            </div>
            {/* 추후 변경 (하나로)*/}
            <div onClick={() => nav('/register')}>
                회원가입
            </div>
            <div onClick={() => nav('/login')}>
                로그인
            </div>
        </div>
    )
}

export default Header;
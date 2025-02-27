import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './header.css';

const Header = () => {
    const nav = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 상태 추가

    // 메뉴 열기/닫기 함수
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    // 홈 화면 이동
    const useHome = () => {
        nav("/", { replace: true });
    };

    // 로그인 확인
    useEffect(() => {
        const authStat = localStorage.getItem("isAuthenticated") === 'true';
        setIsLogin(authStat);
    }, []);

    // 로그인/로그아웃 기능
    const authAction = () => {
        if (isLogin) {
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('currentUser');
            setIsLogin(false);
            nav('/login');
        } else {
            nav('/login');
        }
    };

    return (
        <div className="Header">
            <div className="Left-header">
                {/* 메뉴 아이콘 클릭하면 메뉴 열림 */}
                <div className="Menu-icon" onClick={toggleMenu}>☰</div>
            </div>
            <div className="Center-header" onClick={useHome}>
                Home
            </div>
            <div className="Right-header" onClick={authAction}>
                {isLogin ? "로그아웃" : "로그인"}
            </div>

            {/* 메뉴 UI 추가 */}
            {isMenuOpen && (
                <div className="Menu">
                    <ul>
                        <li onClick={useHome}>🏠 홈</li>
                        <li onClick={() => nav('/profile')}>👤 내 프로필</li>
                        <li onClick={() => nav('/settings')}>⚙️ 설정</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;
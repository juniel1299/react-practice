import { useNavigate,useParams, Navigate } from 'react-router-dom';
import './header.css';
import { useEffect, useState } from 'react';
const Header = () => {
    const nav = useNavigate();
    const [isLogin, setIsLogin] = useState(false);

    // 홈 화면 이동 
    const useHome = () => {
        nav("/", { replace: true })
    }
    // 로그인 확인 
    useEffect(() => {
        const authStat = localStorage.getItem("isAuthenticated") === 'true';
        setIsLogin(authStat);
    },[]);

    // 로그인 확인 후 글자 변경 (로그인 / 로그아웃)
    const authAction = () => {
        if (isLogin){
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('currentUser');
            setIsLogin(false);
            nav('/login');
        } 
        else {
            nav('/login');
        }
    };

    // 해당 글자 클릭시 이동

    return (
        <div className="Header">
            <div className="Left-header">
                <div className="Menu-icon"/>
            </div>
            <div className="Center-header" onClick={useHome}>
                Home
            </div>
            <div className="Right-header" onClick={authAction}>
                {isLogin ? "로그아웃" : "로그인"}
            </div>
        </div>
    )
}

export default Header;
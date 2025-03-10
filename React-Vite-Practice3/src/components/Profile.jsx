import Header from "./Header";
import './profile.css';

const Profile = () => {
    return(
        <>
            <Header/>
            <div className="idSection">
                아이디 :
                    {localStorage.getItem("currentUser").length > 0 
                    ? localStorage.getItem("currentUser") 
                    : "현재 로그인 상태가 아닙니다..."
                    } 
            </div>
        </>
    )
}
export default Profile;
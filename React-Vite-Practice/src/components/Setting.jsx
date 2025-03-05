import { useState } from "react";
import Header from "./Header";

const  Setting = () => {
    const [darkmode, setDarkmode] = useState(false);

    const onClickDarkmode = () => {
        setDarkmode(!darkmode);
        console.log('테스트');
    }

    return(
        <div>
            <Header/>
            <button onClick={onClickDarkmode}>
                다크모드
            </button>
        </div>
    )
}

export default Setting;
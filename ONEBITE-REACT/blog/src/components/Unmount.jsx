import { useEffect } from "react";

const Unmount = () => {
        useEffect(()=> {
            return () => {
                console.log(`언마운트`);
            }
        },[]);

    return (
        <div>
            언마운트
        </div>
    )
}

export default Unmount;
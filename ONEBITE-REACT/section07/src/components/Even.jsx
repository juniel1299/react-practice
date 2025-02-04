import {useEffect} from 'react';

const Even  = () => {
    useEffect(() => {
        //클린 업 , 정리함수 (useEffect 가 끝나는 시점에서 동작함) 즉 mount 가 될 때 실행 -> unmount 때 종료 
        return () => {
            console.log("unmount");
        };
    }, []);
    return ( 
        <div>
            짝수
        </div>
    )
}

export default Even;
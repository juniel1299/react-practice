'use client';
import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

export default function Error({error,reset}:{error:Error; reset:()=>void;}){
    const router = useRouter();
    useEffect(()=>{
        console.error(error);
    },[error]);

    return(
        <>
            <div>에러 발생..</div>
            <button onClick={()=>{
                startTransition(()=>{ // React 18에 생긴 메서드 . ()
                    router.refresh() //현재 페이지에 필요한 서버 컴포넌트들을 다시 불러옴..
                    reset() //에러 상태를 초기화 , 컴포넌트 다시 렌더링..
                })
            }}>
                재시도
            </button>
        </>
    );
}
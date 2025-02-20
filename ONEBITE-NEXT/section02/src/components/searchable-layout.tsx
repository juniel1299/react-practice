import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react"
import style from './searchable-layout.module.css'
export default function SearchableLayout({
    children,
}:{
    children: ReactNode;
}) {

    const router = useRouter();
    const [search, setSearch] = useState("");

    const q = router.query.q as string;

    useEffect(() => {
        setSearch(q || "");
    },[q]);

    // 검색어 값 받아옴. 
    const onChangeSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    // 검색어가 동일하거나 없으면 페이지 이동 x , 존재시 페이지 이동 . 
    const onSubmit = () => {
        if(!search || q ===search) return;
        router.push(`/search?q=${search}`)
    }

    // 엔터키 누르면 submit 동작
    const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            onSubmit();
        }
    }

    return (
        <div>
            <div className={style.searchbar_container}>
                <input
                    onKeyDown={onKeyDown}
                    placeholder="검색어를 입력해주세요"
                    onChange={onChangeSearch}
                    value={search}
                />
                <button onClick={onSubmit}>검색</button>
            </div>
            {children}
        </div>
    )
}
"use client"

import { useEffect } from "react";
import style from "./page.module.css"

export default function Home() {
  console.log('Home 컴포넌트 실행');

  useEffect(()=> {});
  const secretKey = 'ㄱㄴㄷㄹ';

  return (
    <div className={style.page}>
      최상단
    </div>
  );
}

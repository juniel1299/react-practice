import { ReactNode } from "react";
import Link from "next/link";
import style from './global-layout.module.css';

export default function GlobalLayouts({
    children,
}:{
    children:ReactNode;
}){
    return (
        <div className={style.container}>
          <header className="header"><Link href={'/'}>📘 Book</Link></header>
          <main className={style.main}>
           {children}
          </main>
          <footer className={style.footer}>제작 @juniel1299</footer>
        </div>
      );
}
import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";
import { BookData } from "@/types";

async function Footer(){
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`);
  if(!response.ok){
    return <footer>오류</footer>
  }

  const books: BookData[] = await response.json();
  const bookCount = books.length;

  return (
    <footer>
      <div>{bookCount}개 도서 존재</div>
    </footer>
  )
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>📚 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <footer><Footer/></footer>
        </div>
      </body>
    </html>
  );
}

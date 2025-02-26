import BookItem from "@/components/book-item";
import style from "./page.module.css";
import books from "@/mock/books.json";
import { BookData } from "@/types";
import { delay } from "@/util/delay";
import { Suspense } from "react";
import BookItemSkeleton from "@/components/skeleton/book-item-skeleton";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";

// 특정 페이지의 유형을 강제로 static , dynamic 적용함.
//auto , force-dynamic , force-static , error
// export const dynamic = ''

async function AllBooks(){
  await delay(1500);
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,{cache:"force-cache"});
  if(!response.ok){
    return <div>오류 발생</div>
  }
  const allBooks:BookData[] = await response.json();
  return(
    <div>
      {allBooks.map((book)=> <BookItem key={book.id} {...book}/>)}
    </div>
  )
}

async function RecoBooks(){
  await delay(3000);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,{next:{revalidate : 3}});
  if(!response.ok){
    return <div>오류 발생</div>
  }
  const RecoBooks:BookData[] = await response.json();

  return(
    <div>
      {RecoBooks.map((book)=> (
        <BookItem key={book.id} {...book}/>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <Suspense fallback={
          <BookListSkeleton count={3}/>
        }>
          <RecoBooks/>
        </Suspense>
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <Suspense fallback={
          <BookListSkeleton count={10}/>
        }>
          <AllBooks/>
        </Suspense>
      </section>
    </div>
  );
}

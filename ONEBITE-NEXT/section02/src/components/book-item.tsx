import { BookData } from "@/type"
import Link from "next/link"
import style from "./book-item.module.css"
export default function bookItem (
    {
      id,
      title,
      subTitle,
      description,
      author,
      publisher,
      coverImgUrl,
    }:BookData) {
    return(
        <Link href={`/book/${id}`} className={style.container}>
            <img src={coverImgUrl}/>
            <div>
                <div className={style.title}>{title}</div>
                <div className={style.subTitle}>{subTitle}</div>
            </div>
            <br/>
            <div className={style.author}>{author} | {publisher}</div>
        </Link>
    )
}
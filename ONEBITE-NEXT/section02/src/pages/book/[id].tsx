import { GetServerSideProps, GetServerSidePropsContext, GetStaticPropsContext, InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import style from "./[id].module.css";
import fetchOneBook from "@/lib/fetch-one-book";

export const getStaticPaths = () => {
    return {
        //어떤 경로가 있을 수 있는지 미리 알려주기 위해 배열로 전달
        paths: [
            {params : { id : '1'}},
            {params : { id : '2'}},
            {params : { id : '3'}},
        ],
        //존재하지 않는 경우 대비 (false 시 notfound 적용됨.)
        fallback: 'blocking',
    }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const id = context.params!.id;
    const book = await fetchOneBook(Number(id));
    return {
        props : {
            book,
        },
    };
}
export default function Page({
    book,
}: InferGetStaticPropsType<typeof getStaticProps>) {

    if(!book) return "에러";

    const { id, title, subTitle,description,author,publisher,coverImgUrl } = book;

    return (
        <div className={style.container}>
            <div className={style.cover_img_container} style={{backgroundImage:`url('${coverImgUrl}')`}}>
                <img src={coverImgUrl}/>
            </div>
            <div className={style.title}>
                {title}
            </div>
            <div className={style.subTitle}>
                {subTitle}
            </div>
            <div className={style.author}>
                {author} | {publisher}
            </div>
            <div className={style.description}>
                {description}
            </div>
        </div>
    )
}
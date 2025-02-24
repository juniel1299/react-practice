import { GetServerSideProps, GetServerSidePropsContext, GetStaticPropsContext, InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import style from "./[id].module.css";
import fetchOneBook from "@/lib/fetch-one-book";
import Head from "next/head";
import { useRouter } from "next/router";

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
    const router = useRouter();
    if(router.isFallback){
        return(
            <>
                <Head>
                <title>한입북스</title>
                <meta property='og:image' content='/thumbnail.png'/>
                <meta property='og:title' content='한입북스'/>
                <meta property='og:description' content='한입북스에 등록된 도서들을 만나보세요'/>
                </Head>
            </>
        )
    }
    if(!book) return "에러";

    const { id, title, subTitle,description,author,publisher,coverImgUrl } = book;

    return (
        <>
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
        </>
    )
}
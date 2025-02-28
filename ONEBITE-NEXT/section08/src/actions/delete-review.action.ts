'use server';

import { revalidatePath, revalidateTag } from "next/cache";

export async function deleteReviewAction (_:any,formData:FormData){
    const reviewId = formData.get('reviewId')?.toString();
    const bookId = formData.get("bookId")?.toString();

    if(!reviewId){
        return{
            status:false,
            error:'에러발생',
        };
    }

    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/${reviewId}`,
            {
                method:"DELETE",
            }
        );
        if(!response.ok){
            throw new Error(response.statusText);
        }

        revalidateTag(`review-${bookId}`);
    }catch(err){
        return {
            status:false,
            error:`리뷰 삭제 실패 : ${err}`
        }
    }
}
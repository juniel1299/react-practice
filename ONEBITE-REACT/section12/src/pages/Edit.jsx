import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext,useEffect, useState } from "react";
import { DiaryDispatchContext,DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";
const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const {onDelete,onUpdate} = useContext(DiaryDispatchContext);

    const curDiaryItem = useDiary(params.id);

    const onClickDelete = () => {
        //팝업 창 출력
        if(window.confirm("일기를 정말 삭제할까요? 복구되지 않습니다.")){
            onDelete(params.id);
            nav('/',{replace:true});
        }
    }

    const onSubmit = (input) => {
        // react router 버전 업데이트를 통해 confirm 이 아닌 다른 방식으로 진행 .
        if(window.confirm("일기를 수정할까요?")){   
            onUpdate(
                params.id, 
                input.createdDate.getTime(), 
                input.emotaionId, 
                input.content
            );
            nav("/",{ replace:true });
        }
    };

    return (
        <div>
            <Header 
                title={"일기 수정하기"}
                leftChild={
                    <Button onClick={() => nav(-1)} text={"< 뒤로 가기"}/>
                }
                rightChild={
                    <Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete} />
                }
            />
            <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
        </div>
    )
}

export default Edit;
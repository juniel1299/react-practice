import {useContext, useState, useEffect} from 'react';
import { DiaryStateContext } from '../App';
import { useNavigate } from 'react-router-dom';

// 커스텀 훅 
const useDiary = (id) => {
    
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();
    const nav = useNavigate();

    useEffect (() => {
        const currentDiaryItem = data.find(
            (item) => String(item.id) === String(id)
        );
        // 특수 케이스 (useEffect 필요)
        if(!currentDiaryItem){
            window.alert("존재하지 않는 일기입니다.");
            nav('/',{replace:true});
        }

        setCurDiaryItem(currentDiaryItem);
    } , [id]);
return curDiaryItem;
}

export default useDiary;
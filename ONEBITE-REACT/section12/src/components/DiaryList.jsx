import Button from "./Button";
import "./DiaryList.css";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DiaryList = ({data}) => {
    const nav = useNavigate();

    const [sortType, setSortType] = useState("latest");

    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }

    const getSortedData = () => {
        // 새로운 배열을 생성해 정렬 (그냥 sort 하면 문제 발생 가능성 높음)
        return data.toSorted((a,b) => {
            if(sortType === 'oldest'){
                return Number(a.createdDate - b.createdDate);
            } 
            else {
                return Number(b.createdDate - a.createdDate); 
            }
        });
    };

    const sortedData = getSortedData();

    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button
                onClick={() => nav("/new")}
                text={"새 일기 쓰기"} 
                type={"POSITIVE"}/>
            </div>
            <div className="list_wrapper">
                {sortedData.map((item) => <DiaryItem key={item.id} {...item}/>)}
            </div>
        </div>
    )
}

export default DiaryList;
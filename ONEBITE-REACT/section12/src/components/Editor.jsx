import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import {useState} from "react";

const emotionList = [
    {
        emotionId:1,
        emotionName : "완전 좋음",
    },
    {
        emotionId:2,
        emotionName : "완전 좋음",
    },
    {
        emotionId:3,
        emotionName : "보통",
    },
    {
        emotionId:4,
        emotionName : "나쁨",
    },

    {
        emotionId:5,
        emotionName : "끔찍함",
    },
];

const getStringedDate = (targetDate) => {
    //날짜 -> YYYY-MM-DD 로 변환
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let day = targetDate.getDate();

    if(month < 10){
        month = `0${month}`;
    }
    if(day < 10){
        day = `0${day}`;
    }
    return `${year}-${month}-${day}`;
}

const Editor = () => {

    const [input, setInput] = useState({
        createdDate : new Date(),
        emotionId : 3,
        content : "",
    });

    const onChangeInput = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        if(name === 'createdDate'){
            value = new Date(value);
        }
        setInput({
            ...input,
            [name] : value,
        });
    };

    return (
        <div className="Editor">
            <section className="date_section">
                <h4>오늘의 날짜</h4>
                <input 
                    name="createdDate"
                    onChange={onChangeInput}
                    value={getStringedDate(input.createdDate)} 
                    type="date" 
                />
            </section>
            <section className="emotion_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map((item) => (
                        <EmotionItem 
                        onClick={() => 
                            onChangeInput({
                            target : {
                                name : "emotionId",
                                value : item.emotionId,
                            },
                        })}
                            key={item.emotionId} 
                            {...item} 
                            isSelected={item.emotionId === input.emotionId}
                        />
                    ))}
                </div>
            </section>
            <section className="content_section">
                <h4>오늘의 일기</h4>
                <textarea
                    name="content"
                    value={input.content}
                    onChange={onChangeInput} 
                    placeholder="오늘은 어땠나요?"
                />
            </section>
            <section className="button_section">
                <Button 
                    text={"취소하기"}
                />
                <Button 
                    text={"작성완료"} 
                    type={"POSITIVE"}
                />
            </section>
        </div>
    )
}

export default Editor;
import {useState, useRef} from 'react';
// 회원가입 폼 
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Register = () => {

    const [input, setInput] = useState({
        name : "",
        birth : "",
        country : "",
        bio : "",
    });

    const countRef = useRef(0);
    const inputRef = useRef();
    let count = 0;


    const onChange = (e) => {
        //countRef.current++;
        // 해당 행위를 통해 리렌더링이 발생하지 않는 다는 것을 알 수 있음 ..
        count++;
        console.log(count);
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        });
    };

    const onSubmit = () => {
        if(input.name === ""){
            //이름을 입력하는 DOM 요소에 포커스
            inputRef.current.focus();
        }
    }

    return (
        <div> 
            <div>
                <input
                    ref={inputRef}
                    name="name"
                    value={input.name} 
                    onChange={onChange}
                    placeholder={"이름"} 
                />
            </div>
            <div>
                <input 
                    name="birth"
                    value={input.birth} 
                    onChange={onChange}
                    type="date"
                />
            </div>
            <div>
                <select 
                    name="country"
                    value={input.country}
                    onChange={onChange} 
                >
                    <option></option>
                    <option>한국</option>
                    <option>미국</option>
                    <option>중국</option>
                </select>
            </div>

            <div>
                <textarea 
                    name="bio"
                    value={input.bio} 
                    onChange={onChange} 
                />
            </div>
            <button onClick={onSubmit}>제출</button>
        </div>
    );
};
export default Register;
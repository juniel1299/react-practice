
import useInput from '../components/useInput';
// 3가지 hook 팁 
// 1. 함수 컴포넌트 , 커스텀 훅 내부에서만 호출 가능 
// 2. 조건부로 호출 될 수 없음 (조건문 , 반복문 안에서)
// 3. 나만의 훅 ( Custom Hook ) 직접 만들 수 있다.


const HookExam = () => {

    const [input , onChange] = useInput();
        return (
            <div>
                <input value={input} onChange={onChange} />
            </div>
        );
};

export default HookExam;
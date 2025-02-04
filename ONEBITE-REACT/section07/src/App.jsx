import "./App.css";
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import {useState , useEffect , useRef} from 'react';


// 현재 controller ,  viewer 가 부모 자식 관계가 아닌 동일 선상에 있으므로 props 가 안 됨 
// 리액트에서 데이터의 흐름은 부모에서 자식 방향으로만 갈 수 있다. (단방향 데이터 흐름)
// 즉 App 에서 Viewer , Controller 내용을 넘겨줘야함 
// State Lifting (State 끌어 올리기)
function App(){
  // count를 부모인 app.jsx 에 생성해서 viewer에 넘겨주자 . 
  const [count , setCount] = useState(0);
  const [input , setInput] = useState("");

  const isMount = useRef(false);
  // 의존성 배열 
  // dependency array 
  // deps 라고도 부름 

  // 1. 미운트 : 탄생 (useEffect 에 빈배열 주면 한번만 렌더링 됨 )
  
  useEffect(() => {
    console.log('mount');
  }, []);
  
  // 2. 업데이트  : 변화, 리렌더링 (업데이트가 될 때 마다 실행됨)
  // useRef 의 값을 이용해서 처음엔 동작하지 않음 , 이후 변화가 발생하여 리렌더링 될 때 동작하는 구조 
  useEffect(() => {
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log('update');
  })
  
  // 3. 언마운트 : 죽음
  

  // 결국 count , setCount 모두 알아야 Controller 가 현재값을 기준으로 계산하므로 이벤트 핸들러 또한 App.jsx 에 만든다 . 
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>
        Simple Counter
      </h1>
      <section>
        <input 
          value={input} 
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count = {count}/>  
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton = {onClickButton}/>
      </section>
    </div>
  );
}

export default App;


// react developer tool 플러그인 (크롬) 설치
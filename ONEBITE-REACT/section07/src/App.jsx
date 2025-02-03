import "./App.css";
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import {useState , useEffect} from 'react';


// 현재 controller ,  viewer 가 부모 자식 관계가 아닌 동일 선상에 있으므로 props 가 안 됨 
// 리액트에서 데이터의 흐름은 부모에서 자식 방향으로만 갈 수 있다. (단방향 데이터 흐름)
// 즉 App 에서 Viewer , Controller 내용을 넘겨줘야함 
// State Lifting (State 끌어 올리기)
function App(){
  // count를 부모인 app.jsx 에 생성해서 viewer에 넘겨주자 . 
  const [count , setCount] = useState(0);
  const [input , setInput] = useState("");
  // 의존성 배열 
  // dependency array 
  // deps 라고도 부름 
  useEffect (() => {
    console.log(`count : ${count} / input : ${input}`);
  }, [count,input]);
  
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
      </section>
      <section>
        <Controller onClickButton = {onClickButton}/>
      </section>
    </div>
  );
}

export default App;
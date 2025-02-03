
import './App.css';
import HookExam from './components/HookExam';
// html 을 반환하는 경우 컴포넌트라 부름.

// 부모 컴포넌트 (App 의 경우 최상위이므로 루트 컴포넌트라 부름)
// 버튼 클릭 시 마다 리렌더링이 발생 ( 부모 컴포넌트가 리렌더링이 발생 할 경우 자식도 리렌더링이 발생함 -> 컴포넌트를 분리함)

// useState = State 생성 , 컴포넌트 내부의 변수로 활용 가능 ,  값이 변경되면 컴포넌트 리렌더링 
// useRef = Reference 생성 , 컴포넌트 내부의 변수로 활용 가능 , 어떤 경우에도 리렌더링을 유발하지 않음 


// Class 컴포넌트 > 모든 기능을 이용 할 수 있음 (State , Ref 등등 ) , 문법이 복잡함 
// Function 컴포넌트 > 기존에는 UI 렌더링만 가능했으나 React Hook을 통해 Function 컴포넌트에서 Class 컴포넌트처럼 모든 기능 사용 가능 
// (useState (State 기능 낚아오는 Hook ) , useRef (Ref 기능을 낚아오는 Hook) )
function App() {
  return (
    <>
    <HookExam />
    </>
  );
}

export default App;

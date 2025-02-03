
import './App.css';
import {useState} from "react";

import Bulb from './components/Bulb';
import Counter from './components/Counter';
// html 을 반환하는 경우 컴포넌트라 부름.

// 부모 컴포넌트 (App 의 경우 최상위이므로 루트 컴포넌트라 부름)
// 버튼 클릭 시 마다 리렌더링이 발생 ( 부모 컴포넌트가 리렌더링이 발생 할 경우 자식도 리렌더링이 발생함 -> 컴포넌트를 분리함)


function App() {
  return (
    <>
      <Bulb/>
      <Counter />
    </>
  );
}

export default App;

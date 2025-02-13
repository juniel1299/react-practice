import { useRef, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); 
  const countRef = useRef(0); 

  const increaseState = () => {
    setCount(count + 1); 
  };

  const increaseRef = () => {
    countRef.current += 1; 
    console.log("ref 값:", countRef.current);
  };

  return (
    <div>
      <h1>State 값: {count}</h1>
      <h1>Ref 값: {countRef.current}</h1>
      <button onClick={increaseState}>State 증가</button>
      <button onClick={increaseRef}>Ref 증가</button>
    </div>
  );
}

export default Counter;
import { useMemo, useReducer, useState } from "react";


function Exam() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);

  // 복잡한 연산 (값을 2배로 늘리고 3초 대기)
  const expensiveCalculation = (num) => {
    console.log("⚡ 계산 중...");
    let result = num * 2;
    for (let i = 0; i < 1000000000; i++) // 3초 걸리는 연산
    return result;
  };

  // `useMemo`를 사용하여 `value` 변경 시만 연산 실행
  const memoizedValue = useMemo(() => expensiveCalculation(value), [value]);

  return (
    <div>
      <h2>계산된 값: {memoizedValue}</h2>
      <button onClick={() => setValue(value + 1)}>값 변경</button>
      <button onClick={() => setCount(count + 1)}>카운트 변경 ({count})</button>
    </div>
  );
}
export default Exam;
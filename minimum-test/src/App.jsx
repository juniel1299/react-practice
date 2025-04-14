import React from 'react';
import ReactDOM from 'react-dom/client';
import FlowChart from './components/FlowChart';

const App = () => {
  return (
    <div>
      <h1>기존 DOM</h1>
      <FlowChart />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default App;
import {useState } from 'react';
// import Content from './useReducer todoApp'
// import Todo from './Todo useReducer/index'
import Content from './useImperativeHandle'


function App() {
  const [show, setShow] = useState('')
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content/>}
    </div>
  );
}

export default App;

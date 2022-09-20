import Content from './useLayoutEffect'
import { useState } from 'react';


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

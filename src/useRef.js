import { useRef, useState, useEffect } from "react";

// ref = reference = tham chiếu
// lưu được giá trị một tham chiếu biên ngoài component




function Content() {
  const [count, setCount] = useState(60);

  const timerId = useRef()
  const prevCount = useRef()

    useEffect(() => {
      prevCount.current = count
  }, [count])


  const handleStart = () => {

    timerId.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    console.log('Start -> ', timerId.current);
  };

  const handleStop = () => {
    clearInterval(timerId.current)
    console.log('stop -> ',  timerId.current);

  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </div>
  );
}

export default Content;

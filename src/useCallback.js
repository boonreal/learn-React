import { useState, useCallback } from "react";
import Main from "./Main";

// useCallback : GIúp tránh tạo ra những hàm mới không cần
// thiết trong function component



function Content() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  return (
    <div>
      <Main onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  );
}

export default Content;

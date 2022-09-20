import {useLayoutEffect, useState, useEffect, useCallback} from 'react'

// so sánh useEffect và useLayoutEffect

// // useEffect
// 1.1 Gây render (cập nhật state/re-render từ component cha)
// 2.1 Render Component
// 3. Re-render UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Chạy useEffect callback

// // useLayoutEffect
// 1.1 Gây render (cập nhật state/re-render từ component cha)
// 2.1 Render Component
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Chạy useLayoutEffect callback (sync) 
    // React sẽ đợi cho đến khi Hook chạy xong
// 5. Render lại UI


// => Hầu hết useEffect là phù hợp nhưng khi code gây hiện tượng 
// nhấp nháy, ta chuyển sang useLayoutEffect, nó có thể giúp giải quyết vấn đề.Content
// Bởi useLayoutEffect chạy đồng bộ, ứng dụng sẽ không cập nhật trực quan cho đến khi 
// Hook chạy xong

// => useLayoutEffect sẽ gọi lại callback và hàm cleanup
//  nếu dependency thay đổi sau đó mới render lại UI.


// Bài toán :chạy số 0-3 : - code bị nháy số
function Content() {

  const [count, setCount] = useState(0)

  useLayoutEffect(() => {
    if(count > 3) {
      setCount(0)
    }
  }, [count])

  const handleRun = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleRun}>Run</button>
    </div>
  );
}

export default Content;

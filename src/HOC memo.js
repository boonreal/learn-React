import {useState} from 'react'

// 1. useMemo() -> Higher Order Component( HOC)
// 2. useCallback()

// memo = memory = ghi nhớ 
// Nó ghi nhớ các props của một component để nó quyết định
// có re-render component đó hay không -> tối ưu hiệu năng
// => Memo xử lý component tránh bị re-render trong tình
// huống không cần thiết

// nếu component có props thay đổi => re-render
function Content() {

    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1 )
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>Click me</button>
        </div>
    )
}

export default Content 
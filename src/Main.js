import {memo } from 'react'

function Main({onIncrease}) {

    console.log('re-render');

    return(
        <>
            <h2>Hi anh em</h2>
            <button onClick={onIncrease}>Click me</button>
        </>
    )
}
export default memo(Main)
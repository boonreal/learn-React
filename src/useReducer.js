import {useReducer} from 'react'

// useState
// 1. Init state: 0,
// 2. Action: up(state+1) / down(state-1)

// useReducer
// 1. Init state: 0,
// 2. Action: up(state+1) / down(state-1)
// 3. Reducer
// 4. Dispatch

// initState
const initState = 0
// Actions
const UP_ACTION = 'up'
const DONW_ACTION = 'down'
// Reducer => nhận đầu vào và trả đầu ra mới
const reducer = (state, action) => {
    switch(action) {
        case UP_ACTION: return state + 1
        case DONW_ACTION: return state -1
        default: throw new Error('invalid action')
    }
}


function Reducer(){
    const [count, dispatch] = useReducer(reducer, initState)


    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(UP_ACTION)}>
                up
            </button>
            <button onClick={()=>dispatch(DONW_ACTION)}>
                down
            </button>
        </div>
    )
}
export default Reducer
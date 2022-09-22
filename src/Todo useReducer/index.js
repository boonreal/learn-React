import { useReducer, useRef } from "react";
import {setJob, addJob, deleteJob} from './action'
import reducer, {initState} from './reducer'


//dispath

export default function App() {
  const [state, dispath] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const inputRef = useRef();
  const handleAdd = () => {
    dispath(addJob(job));
    dispath(setJob(""));
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <h1>TODO</h1>
      <input
        placeholder="Enter your job..."
        ref={inputRef}
        value={job}
        onChange={(e) => dispath(setJob(e.target.value))}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => dispath(deleteJob(index))}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

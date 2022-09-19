import {useState} from 'react'


function App() {

    const [jobs, setJobs] = useState([])



  return (
    <div className="App">
        <input 

        />
        <button>Add</button>
        <ul>
            {jobs.map((job, index) => (
                <li key={index}>{job}</li>
            ))}
        </ul>
    </div>
  );
}

export default App;

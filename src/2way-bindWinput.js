import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "JavaScript"
  },
  {
    id: 2,
    name: "HTML CSS"
  },
  {
    id: 3,
    name: "ReactJS"
  }
];


function App() {
  {/* two-way with input */}
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  // const handleSubmit = () => {
  //   console.log(name, email);
  // }

  {/* two-way with checkbox */}
  const [checked, setChecked] = useState([])
  console.log(checked);

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if(isChecked) {
        return checked.filter(item => item != id)
      }
      else {
        return [...prev, id]
      }

    })
  }

  const handleSubmit = () => {
      console.log({id: checked});
  }
  return (
    <div className="App">
      {/* two-way with input */}
      {/* <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSubmit}>submit</button> */}

      {/* two-way with checkbox */}
      {courses.map(course => (
        <div key={course.id}>
           <input type="checkbox"
           checked ={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
           />
           {course.name}
        </div>
      ))}



      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default App;

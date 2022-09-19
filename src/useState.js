import {useState} from 'react'
const orders = [100,200,300]
function App() {

  
  const[counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur)
    return total
  })

  // const handleIncrease = () => {
  //   setCounter(counter + 1)
  // }

  // callback với setState
  // const handleIncrease2 = () => {
  //   setCounter(prevState => prevState + 1)
  // }.

  // callback với InitalState 
    const handleIncrease3 = () => {
    setCounter(prevState => prevState + 1)
    }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrease3}>increase</button>
    </div>
  );
}

export default App;

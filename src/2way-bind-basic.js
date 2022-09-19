import {useState} from 'react'
const gifts = [
    'cpu i-9',
    'ram 32gb',
    'rgb keyboard'
]
function App() {

  
  const[gift, setGift] = useState()

  const handleRandomGift = () => {
    let indexRandom = Math.floor(Math.random() * gifts.length);

    setGift(gifts[indexRandom]);
  };

  return (
    <div className="App">
      <h1>{gift || 'chưa có phần thưởng'}</h1>
      <button onClick={handleRandomGift}>take</button>
    </div>
  );
}

export default App;

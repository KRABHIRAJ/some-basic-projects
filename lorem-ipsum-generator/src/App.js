import { useState } from 'react';
import './App.css';
import data from "./data";

function App() {

  const [count, setCount] = useState(0);
  const [loremData, setLoremData] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount < 0) {
      amount = 1;
    }
    if (amount >9) {
      amount = 9;
    }
     setLoremData(data.slice(0, amount));

  }

  return (
    <div className="app">
      <h1 className='heading'>Generate Interesting Lorem Ipsum!!</h1>
      <form className='app__form'>
        <span>Paragraphs: </span>
        <input value={count} onChange={(e) => setCount(e.target.value)} type="number" />
        <button onClick={handleClick}>Generate</button>
      </form>
      <div className='lorem__ipsum'>
        {loremData.map((data, index) => {
          return <p key={index} className='loremIpsum__text'>{ data }</p>
        })}
      </div>
    </div>
  );
}

export default App;

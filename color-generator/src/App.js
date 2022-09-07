import './App.css';
import Values from 'values.js';
import { useEffect, useState } from 'react';
import SingleColor from './components/SingleColor';

function App() {
  const [hexCode, setHexCode] = useState();
  const [error, setError] = useState(false);
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  // const tempColor = new Values(hexCode).all(10);
  const handleClick = (e) => {
    e.preventDefault();
    try {
      setColors(new Values(hexCode).all(10));
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }



  return (
    <div className="app">
        <form className='app__form'>
            <h2>Color Generator</h2>
        <input
          className={`color__input ${error ? "error__color" : null}`}
          type="text"
          placeholder='#f15025'
          value={hexCode}
          onChange={(e) => setHexCode(e.target.value)}
        />
            <button onClick={handleClick} className='form__button'>
                Submit
            </button>
      </form>
      
      <div className='app__colors'>
        {colors.map((color, index) => {
                   return <SingleColor key={index} index={index} hex={color.hex} {...color} />
        })}
      </div>
    </div>
  );
}

export default App;

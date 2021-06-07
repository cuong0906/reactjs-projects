import { useState } from 'react';
import LoremText from './components/LoremText';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    let amount = parseInt(count);
    if(count <= 0){
      amount = 1;
    }
    if(count > 8){
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>lorem ipsum Generator App</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="0"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">Generate</button>
      </form>
      <LoremText text={text}/>
    </section>
  );
}

export default App;

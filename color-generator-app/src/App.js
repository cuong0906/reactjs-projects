import { useState } from "react";
import SingleColor from "./components/SingleColor";
import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [list, setList] = useState(new Values('#fff').all(10));
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error){
      setErr(true);
      console.log(error);
    }
  };

  const handleOnchange = (e) => {
    setErr(false);
    setColor(e.target.value);
  };

  return (
    <>
      <section className="container">
        <h3> Color generator app</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#fff"
            value={color}
            onChange={handleOnchange}
            className={`${err ? 'error' : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {
          list.map((color, index) => {
            return (
              <SingleColor
                key={index}
                index={index}
                hexColor={color.hex}
                {...color}
              />
            );
          })
        }
      </section>
    </>
  );
}

export default App;

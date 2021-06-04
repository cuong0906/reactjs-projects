import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import data from './data';

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    setPeople(data);
  }, []);

  return (
    <main>
      <section className="container">
        <h2>{people.length} birthdays today!</h2>
        <List people={people}/>
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;

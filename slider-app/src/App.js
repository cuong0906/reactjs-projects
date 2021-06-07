import { useEffect, useState } from 'react';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import Review from './components/Review';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if(index < 0){
      setIndex(lastIndex);
    }
    if(index > lastIndex){
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {
          people.map((person, personIndex) => {
            return (
              <Review 
                key={person.id}
                index={index}
                person={person} 
                personIndex={personIndex}
              />
            )
          })
        }
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronsLeft/>
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronsRight/>
        </button>
      </div>
    </section>
  );
}

export default App;

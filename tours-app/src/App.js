import { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/Loading/Loading';
import Tour from './components/Tours/Tour';
import Tours from './components/Tours/Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setLoading(false);
      setTours(tours);
      
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  if(loading){
    return (
      <main>
        <Loading/>
      </main>
    );
  }
  if(tours.length === 0){
    return (
      <main>
        <div className="title">
          <h2>No tours left.</h2>
          <button className="btn" onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;

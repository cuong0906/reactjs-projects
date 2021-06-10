import { useEffect, useState } from 'react';
import { FaCalendarTimes, FaEnvelopeOpen, FaLock, FaMap, FaPhone, FaUser } from 'react-icons/fa';

const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState('name');
  const [val, setVal] = useState('random person');

  const getPerson = async () => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    
    const person = data.results[0];
    const { phone, email } = person;
    const { large: img } = person.picture;
    const { password } = person.login;
    const { first, last } = person.name;
    const { 
      dob: { age },
    } = person;
    const { 
      street: { 
        number, 
        name }
      } = person.location;

    const newPerson = {
      phone,
      email,
      img,
      password,
      age,
      name: `${first} ${last}`,
      street: `${number} ${name}`,
    }
    setPerson(newPerson);
    setLoading(false);
    setVal(newPerson.name);
    setTitle('name');
  };

  const handleVal = (e) => {
    if(e.target.classList.contains('icon')){
      const newVal = e.target.dataset.label;
      setTitle(newVal);
      setVal(person[newVal]);
    }
  };

  useEffect(() => {
    getPerson();
  },[]);

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img 
            src={(person && person.img) || defaultImage}
            className="user-img" 
            alt="random user"
          />
          <p className="user-title">My {title} is</p>
          <p className="user-value">{val}</p>
          <div className="values-list">
            <button className="icon" data-label="name" onMouseOver={handleVal}>
              <FaUser/>
            </button>
            <button className="icon" data-label="email" onMouseOver={handleVal}>
              <FaEnvelopeOpen/>
            </button>
            <button className="icon" data-label="age" onMouseOver={handleVal}>
              <FaCalendarTimes/>
            </button>
            <button className="icon" data-label="street" onMouseOver={handleVal}>
              <FaMap/>
            </button>
            <button className="icon" data-label="phone" onMouseOver={handleVal}>
              <FaPhone/>
            </button>
            <button className="icon" data-label="password" onMouseOver={handleVal}>
              <FaLock/>
            </button>
          </div>
          <button className="btn" type="button" onClick={getPerson}>
            {loading ? 'loading...' : 'random user'}
          </button>
        </div>
      </div>
      <h2>Random person app</h2>
    </main>
  );
}

export default App;

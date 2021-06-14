import Photo from "./components/Photo";
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from "react";

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = 'https://api.unsplash.com/photos/';
const searchUrl = 'https://api.unsplash.com/search/photos/';

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [pages, setPages] = useState(0);
  const [query, setQuery] = useState('');

  const fetchImage = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${pages}`;
    const urlQuery =`&query=${query}`;
    if(query){
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    }else{
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPhotos((oldPhotos) => {
        if(query && pages===1){
          return data.results;
        }else if(query){
          return [...oldPhotos, ...data.results];
        }else{
          return [...oldPhotos, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPages(1);
    fetchImage();
  };

  useEffect(() => {
    fetchImage();
  },[pages]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      let scrollHeight = window.innerHeight + window.scrollY;
      
      if(!loading && scrollHeight >= document.body.scrollHeight -2){
        setPages((oldPage) => {
          return oldPage + 1;
        })
      }
    });

    return () => window.removeEventListener("scroll", event);
  },[]);

  return (
    <main>
      <section className="search">
        <h2>Photo stock app</h2>
        <form className="search-form">
          <input 
            type="text"
            placeholder="search"
            className="form-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch/>
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {
            photos.map((img, index) => {
              return <Photo key={index} {...img}/>
            })
          }
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
}

export default App;

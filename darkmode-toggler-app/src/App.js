import { useEffect, useState } from "react";
import Article from "./components/Article";
import data from './data';

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem('theme')){
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());
  const [title, setTile] = useState('Light');

  const toggleTheme = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setTile("Dark");
    }else{
      setTheme('light-theme');
      setTile("Light");
    }
  };

  useEffect(() =>{
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  },[theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>{title} mode toggler</h1>
          <button className="toggle" onClick={toggleTheme}></button>
        </div>
      </nav>
      <section className="articles">
        {
          data.map((item) => {
            return <Article key={item.id} {...item}/>
          })
        }
        <Article />
      </section>
    </main>
  );
}

export default App;

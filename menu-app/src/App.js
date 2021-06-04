import { useEffect, useState } from "react";
import Categories from "./components/Categories";
import Menu from "./components/MenuItem/Menu";
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu app</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu menuItems={menuItems}/>
    </main>
  );
}

export default App;

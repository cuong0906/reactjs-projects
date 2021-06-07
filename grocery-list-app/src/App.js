import { useEffect, useState } from "react";
import Alert from "./components/Alert";
import List from "./components/ListItem/List";

const fetchLocalStorageList  = () => {
  let list = localStorage.getItem('list');
  if(list){
    return list = JSON.parse(localStorage.getItem('list'));
  }else{
    return [];
  }
};

function App() {
  const [list, setList] = useState(fetchLocalStorageList());
  const [name, setName] = useState('');
  const [editID, setEditID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show:false, msg: '', type:''});

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){
      showAlert(true, 'danger', 'Please Enter value!');
    }else if(name && isEditing){
      setList(
        list.map((item) => {
          if(item.id === editID){
            return {...item, title: name};
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'Value changed!');
    }else{
      showAlert(true, 'success', 'Item has been added to the list!');
      const newItem = { id: new Date().getTime().toString(), title: name};

      setList([...list, newItem]);
      setName('');
    }
  };

  const showAlert = (show = false, type ='', msg='') => {
    setAlert({show, type, msg});
  };

  const removeItem = (id) => {
    showAlert(true, 'danger', 'Item removed!');
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const foundItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(foundItem.title)
  };

  const clearList = () => {
    showAlert(true, 'danger', 'Item has been removed.');
    setList([]);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} list={list} removeAlert={showAlert}/>}
        <h3>Grocery app</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="steak"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      {
        list.length > 0 && (
        <div className="grocery-container">
          <List list={list} removeItem={removeItem} editItem={editItem}/>
          <button className="clear-btn" onClick={clearList}>
            Clear items
          </button>
        </div>
        )
      }
    </section>
  );
}

export default App;

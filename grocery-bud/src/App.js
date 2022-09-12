// import { json } from 'body-parser';
import { useEffect, useState } from 'react';
import './App.css';
import Item from './components/Item';



// const getLocalStorage = () => {
//   let list = localStorage.getItem('item');

//   if (list) {
//     return json.parse(localStorage.getItem('list'));
//   } else {
//     return [];
//   }
// }

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState("");



  // useEffect(() => {
  //   localStorage.setItem("list", json.stringify(list));
    
  // }, [list])

  const deleteItem = (id) => {
    const newList = list.filter((item) => {
      return item.id != id;
    })

    setList(newList);
  }

  const editItem = (id) => {
    setEditId(id);
    const currItem = list.find((item) => {
      return item.id === id;
    })

    setItem(currItem.item);
    
    // setItem()
  }

  const handleClick = (e) => {
    e.preventDefault();

    if (isEditing != true) {
      const id = new Date().getTime().toString();
      const currItem = {
        item: item,
        id: id
      }
      setList([...list, currItem]);
      setItem("");
    }

    if (isEditing) {
      

      const index = list.findIndex((item) => {
        return item.id === editId;
      })
      
    
      list[index].item = item;
      setList(list);
      setItem("");
      setIsEditing(false);
    }
    
  }

  const clearItem = () => {
    setList([]);
  }


  return (
    <div className='app__container'>
       <div className="app">
          <h2>Grocery Bud</h2>
          <form className='app__form'>
              <input value={item} onChange={(e) => setItem(e.target.value)} className='app__input' type="text" placeholder="e.g. Rice" />
          <button onClick={handleClick} className='app__button'>{ isEditing ? "Edit" : "Submit"}</button>
          </form>
          
          <div className='list__items'>
          {list.map((item) => {
            return <Item
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              setIsEditing={setIsEditing}
              editItem={editItem}
            />
            })}
          </div>
          <span onClick={clearItem} className='clear'>Clear Items</span>
        </div>
    </div>
    
  );
}

export default App;

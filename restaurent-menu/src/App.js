import { useEffect, useState } from 'react';
import './App.css';
import Category from './components/Category';
import Items from './components/Items';
import data from "./data";

function App() {
  const [allCategories, setAllCategories] = useState([]);
  const [menuItems, setMenuItems] = useState(data);
  
  useEffect(() => {
    setAllCategories(["all", ...new Set(menuItems.map((menuItem) => {
        return menuItem.category;
    }))])
  }, [])

  const showThisCategory =  (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }

   const temp = data.filter((menuItem) => {
     return menuItem.category == category;
    })
    
    setMenuItems(temp);

  }
  
  return (
    <div className="app">
      <h1>Hotel Sitara</h1>
      {/* <div className='border__bottom'></div> */}
      <div className='allCategories'>
          {allCategories.map((currCategory) => {
          return  <Category showThisCategory = {showThisCategory} currCategory={ currCategory } />
          })}
      </div>
      
      <Items menuItems={menuItems} />
    </div>
  );
}

export default App;

import React from 'react';
import "./Category.css";

function Category({showThisCategory, currCategory}) {
  return (
      <div className='category'>
          <button onClick={() => showThisCategory(currCategory)} className='category__btn'>{currCategory }</button>
    </div>
  )
}

export default Category;

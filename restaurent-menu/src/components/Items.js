import React, { useEffect, useState } from 'react';
import "./Items.css";
import data from "../data";
import Item from './Item';



function Items({menuItems}) {

  return (
      <div className='items'>
          {menuItems.map((menuItem) => {
                   return <Item key={menuItem.id} { ...menuItem } />
          })}
    </div>
  )
}

export default Items

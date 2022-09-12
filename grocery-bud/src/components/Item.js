import React from 'react';
import "./Item.css";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

function Item({ item ,deleteItem, setIsEditing, editItem}) {
    
    const handleEdit = () => {
        setIsEditing(true);
        editItem(item.id);
    }
  return (
    <div className='item'>
          <p className='item__item'>{item.item}</p>
          <div className='item__icon'>
            <CreateIcon onClick={handleEdit} className='create__icon'/>
            <DeleteIcon onClick={() => deleteItem(item.id)} className='delete__icon' />
          </div>
          

    </div>
  )
}

export default Item

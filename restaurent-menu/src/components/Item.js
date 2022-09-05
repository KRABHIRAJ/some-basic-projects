import React from 'react';
import "./Item.css";

function Item({category, desc, id, img, price, title}) {
    return (
        <div className='menu'>
            <div className='menuImage__div'>
                <img
                    src={img}
                    alt={title}
                    className="menu__image"
                />
            </div>

            <div className='item__details'>
                <div className='item__info'>
                    <h3 className='item__title'>{title}</h3>
                    <h3 className='item__price'>₹ { Math.floor(price*10) }</h3>
                </div>

                <span className='item__description'>{ desc }</span>
            </div>
        </div>
  )
}

export default Item

import React, { useState } from 'react';
import "./Tour.css";


function Tour({ tour, removeTour }) {
    const [hide, setHide] = useState(true);

 
    return (
    <div className='tour'>
          <img
              className='tour__image'
              src={tour.image}
              alt={tour.id}
          />

          <div className="tour__details">
              <h3 className="tour__name">{tour.name}</h3>
              <h3 className="tour__price">₹ {tour.price}</h3>
          </div>
            <p className='tour__info'>
                {hide == true ? <>{tour.info.substring(0, 150)}...  <span className='read__button' onClick={() => setHide(false)}>Read More</span></> : <>{ tour.info } <span onClick={() => setHide(true)} className='read__button'>show less</span></>}
            </p>
            <div className='tourButton__div'>
                <button onClick={() => removeTour(tour.id)} className='tour__button'>Not Interested</button>
            </div>
          
            

    </div>
  )
}

export default Tour;

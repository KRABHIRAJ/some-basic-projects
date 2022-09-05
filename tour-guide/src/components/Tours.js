import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Tour from './Tour';
import "./Tours.css";
const url = 'https://course-api.com/react-tours-project';



function Tours() {

    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);
    const removeTour = (id) => {
        const newTours = tours.filter((tour) => {
            return tour.id != id;
        })

        setTours(newTours);
    }    
    const fetchTours = async () => {
        setLoading(true);
        const response = await fetch(url);
        const tours = await response.json();
        setTours(tours);
        setLoading(false);
    }
    useEffect(() => {
        fetchTours();
    }, []);
  return (
    <div className='tours'>
          {loading ? <Loading /> : <>
              {tours.map((tour) => {
                  return <Tour removeTour={removeTour} key={tour.id} tour={ tour } />
              })}
          </>}

          {tours.length == 0 && loading==false && <button onClick={() => fetchTours()} className='refresh__button'>Refresh</button>}

          
          
          
          
    </div>
  )
}

export default Tours

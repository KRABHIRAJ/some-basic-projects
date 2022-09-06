import React, { useEffect, useState } from 'react';
import "./Reviews.css";
import reviews from "../data";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Reviews() {
    let position = "nextItem";
    const [index, setIndex] = useState(1);
    
    useEffect(() => {
        if (index < 0) {
            setIndex(reviews.length - 1);
        }
        else if (index > reviews.length - 1) {
            setIndex(0);
        }
    }, [index]);

    // setTimeout(() => {
    //     setIndex(index + 1);
    // },3500)
        
   
  return (
    <div className='reviews'>
          {reviews.map(({id, name, job, image, text }, currIndex) => { 
              const setClass = () => {
                if (currIndex === index) {
                position = "activeItem";
                    }
                else if (index === currIndex - 1) {
                    position = "prevItem";
                }
              }
            setClass();
              
              
              return  <div className={`review ${position}`}>
            <img 
                    className='profile__img'
                    src={image}
                    alt={name}
                />

                <span className="review__name">
                    {name}
                </span>

                <span className="review__job">
                    {job}
                </span>

                <span className="review__description">
                    {text}
                </span>

                <div className="review__buttons">
                    <ArrowBackIosIcon onClick={() => setIndex(index-1)} className="icon" />
                    <ArrowForwardIosIcon   onClick={() => setIndex(index+1)} className="icon" />
                </div>

                
            </div>
          })}

    </div>
  )
}

export default Reviews;


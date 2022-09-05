import React, { useState } from 'react';
import "./Reviews.css";
import reviews from "../data";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Reviews() {
    const [index, setIndex] = useState(2);
    const {id, image, job, name, text} = reviews[index];


    const handleSurprise = () => {
        const num = Math.floor(Math.random() * reviews.length);
        if (index == num) {
            setIndex(handleCornerCase(index + 1));
        } else {
            setIndex(num);
        }

    }


    const handleCornerCase = (index) => {
        if (index >= reviews.length) {
            let newIndex = 0;
            return newIndex;
        }
        else if (index < 0) {
            let newIndex = reviews.length - 1;
            return newIndex;
        }
        else {
            return index;
        }
    }

    const handlePrev = () => {
            setIndex(handleCornerCase(index - 1));
    }

    const handleNext = () => {
        setIndex(handleCornerCase(index + 1));
        
    }

  return (
    <div className='reviews'>
          
          <img 
              className='profile__img'
              src={image}
              alt={name}
          />

          <span className="reviews__name">
              {name}
          </span>

          <span className="reviews__job">
              {job}
          </span>

          <span className="reviews__description">
              {text}
          </span>

          <div className="reviews__buttons">
              <ArrowBackIosIcon onClick={handlePrev} className="icon" />
              <ArrowForwardIosIcon onClick={handleNext} className="icon" />
          </div>

          <span onClick={handleSurprise} className="surprise__icon" >
              Surprise Me
          </span>




    </div>
  )
}

export default Reviews;


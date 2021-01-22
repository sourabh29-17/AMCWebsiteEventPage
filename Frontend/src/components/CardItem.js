import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
  
      <li className='cards__item'>
        
         
            {/* // eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img
              className='cards__item__img'
              alt='Event Image'
              src={props.src}
            />
          
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
       
      </li>
      
    </>
  );
}

export default CardItem;

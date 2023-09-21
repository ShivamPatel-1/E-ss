import React from 'react';

import './Feature.css';



const Feature = ({title,text}) => {
  return(
    <div className='E-waste__feature-container__feature'>
      <div className='E-waste__feature-container__feature-title'>
        <div/>
        <h1>{title}</h1>
      </div>
      <div className='E-waste__feature-container__feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature
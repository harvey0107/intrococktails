import React from 'react';

const Card = (props) => {
  return(
    <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 phm navy'>
       <img alt ='cocktail' src={props.id} />
      <div>
        <h2>{props.name}</h2>
        <h4>{props.ingredients}</h4>
      </div>
    </div>
    );   
 }   


export default Card; 
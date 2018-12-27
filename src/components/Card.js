import React from 'react';

//emulating a random robot image from the site
//also components also return one element, and one element only!!
//see below, Card is just returning one big div element, thats it
//in img src, we are doing each individual element as id to randomize the robot images

//in parameters, it is destructuring
const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
import React from 'react';
import 'tachyons';
//import {robots} from './robots';

//const card=(props) => {
const card=({name,email,id}) => {
    return (
        //JSX - that is why we need to import React
        //We can return only one element, so everything is in div
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="robot" src={`https://robohash.org/${id}?200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
};

export default card;
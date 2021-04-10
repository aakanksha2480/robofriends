import React from 'react';
import Card from './Card';
//import {robots} from './robots';
//import Searchbox from './Searchbox';

const Cardlist=({robots}) => {
    // if(true) {
    //     throw new Error("noooooooo!");
    // }
    return (
        <div>
            {   
                 robots.map((user,i) => {
                    return (<Card key={i} id={user.id} name={user.name} email={user.email}/>);
                 })
            }
       </div>
    );
};



export default Cardlist;
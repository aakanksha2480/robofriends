import React from 'react';

const Searchbox=({searcgfield,onSearch}) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--gren bg-lightest-blue'
                type='search' 
                placeholder='enter name'
                onChange={onSearch}>
            </input>
        </div>
    );
};

export default Searchbox;
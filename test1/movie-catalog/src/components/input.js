import React from 'react';

import '../styles/input.css';

const Input = ({ handleSearch }) => {
    return (
        <div className='input-wrapper'>
            <input
                className='search'
                placeholder='Search...'
                onChange={handleSearch}
            />
        </div>
    );
};

export default Input;
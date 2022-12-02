import React from 'react';
import './Terminal.css';

export const Terminal = () => {
    return (
        <div className='terminal'>
            <div className='terminal__header'>
                <div className='terminal__header-label'>Terminal:</div>
                <div className='terminal__header-tab'>Local</div>
            </div>

            <div className='terminal__content'>
                yarn install
            </div>

        </div>
    );
};

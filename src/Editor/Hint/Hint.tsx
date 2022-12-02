import React from 'react';
import './Hint.css';

export const Hint = () => {
    return (
        <div className='hint'>
            <div className='hint__header'>
                <div className='hint__header-label'>Step:</div>
                <div className='hint__header-tab'>#1</div>
            </div>

            <div className='hint__content'>
                Some hint text
            </div>

            <footer className='hint__footer'>
                <button className='hint__footer-button'>Previous</button>
                <button className='hint__footer-button'>Next</button>
            </footer>

        </div>
    );
};

import React, { useState, useEffect } from 'react';
import './index.css';


const ImportantStar = ({onStarClick, isFavorite}) => {
    return (
        <span className={`important-star ${isFavorite ? 'important' : ''}`} onClick={() => onStarClick()}>
            &#9734;
        </span>
    )
}

export default ImportantStar;
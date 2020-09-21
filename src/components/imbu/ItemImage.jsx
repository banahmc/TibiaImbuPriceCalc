import React from 'react';
import { getItemImageId } from '../../utilities';

export const ItemImage = ({ itemName, imageTitle }) => {
    const imageId = getItemImageId(itemName);
    return (
        <span title={`${imageTitle || itemName}`}>
            <a href="#" onClick={(e) => { e.preventDefault(); }}><img src={`images/${imageId}.gif`} /></a>
        </span>
    );
}

export default ItemImage;
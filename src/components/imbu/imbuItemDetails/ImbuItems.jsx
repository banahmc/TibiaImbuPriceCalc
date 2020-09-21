import React from 'react';
import _ from 'lodash';

import { ImbuItemEditable } from './ImbuItemEditable.jsx';

export const ImbuItems = ({ itemPrices, imbuementOptions, inputs, onChangePrice, onChangeCount }) => {
    return (
        Object.keys(imbuementOptions[0]).map(itemName => {
            const itemPrice = _.find(itemPrices, { itemName });
            const inputState = inputs.filter(x => x.id === itemName)[0];
            if (!!itemPrice && !!inputState) {
                return (
                    <ImbuItemEditable
                        key={itemPrice.itemName}
                        name={itemPrice.itemName}
                        price={itemPrice.value}
                        count={itemPrice.Count}
                        edited={inputState.edited}
                        onChangePrice={onChangePrice}
                        onChangeCount={onChangeCount} />
                );
            }
        })
    );
}

export default ImbuItems;
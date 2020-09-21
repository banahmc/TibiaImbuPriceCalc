import React from 'react';
import { PricesAlert } from './PricesAlert.jsx';

export const PricesNotFoundAlert = () => {
    return (
        <PricesAlert
            variant='danger'
            heading='Item Prices Missing :-('
        >
            <p>Item Prices seem to be missing. It could be an issue with item prices API (blame Macko)...</p>
        </PricesAlert>
    );
}

export default PricesNotFoundAlert;
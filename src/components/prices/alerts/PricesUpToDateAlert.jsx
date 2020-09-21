import React from 'react';

import { PricesAlert } from './PricesAlert.jsx';
import { momentFormat, fancyDateTimeFormat } from '../../../formatters';

export const PricesUpToDateAlert = ({ updatedOn }) => {
    const date = momentFormat(updatedOn, fancyDateTimeFormat);
    return (
        <PricesAlert
            variant='success'
            heading='Item Prices Up-to-Date :-)'
        >
            <p>Item Prices have been updated in the last 24 hours ({date}).</p>
        </PricesAlert>
    );
}

export default PricesUpToDateAlert;
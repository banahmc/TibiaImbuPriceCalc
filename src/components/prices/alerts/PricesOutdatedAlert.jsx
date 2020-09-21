import React from 'react';

import { PricesAlert } from './PricesAlert.jsx';
import { momentFormat, fancyDateTimeFormat } from '../../../formatters';

export const PricesOutdatedAlert = ({ hours, updatedOn }) => {
    const date = momentFormat(updatedOn, fancyDateTimeFormat);
    return (
        <PricesAlert
            variant='warning'
            heading='Item Prices Outdated :-('
        >
            <p>Beware! Item Prices seem to be outdated. The latest update was {hours} hour(s) ago ({date}).</p>
        </PricesAlert>
    );
}

export default PricesOutdatedAlert;
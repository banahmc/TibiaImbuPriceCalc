import React from 'react';

import { PricesAlert } from './PricesAlert.jsx';

export const PricesLoadingAlert = () => {
    return (
        <PricesAlert
            variant='info'
            heading='Loading...'
        />
    );
}

export default PricesLoadingAlert;
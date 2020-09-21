import React from 'react';

import { PricesAlert } from '../../prices/alerts/PricesAlert.jsx';
import ImbuCostAnalysisResultItem from './ImbuCostAnalysisResultItem.jsx';

const ImbuCostAnalysisResultDetails = ({ calculatedOptions }) => {
    return (
        <>
            {calculatedOptions.map((calculatedOption, i) => {
                return (
                    <PricesAlert key={i} variant='success' heading={`#${i + 1} option`}>
                        <ImbuCostAnalysisResultItem calculatedOption={calculatedOption} />
                    </PricesAlert>
                );
            })}
        </>
    );
}

export default ImbuCostAnalysisResultDetails;
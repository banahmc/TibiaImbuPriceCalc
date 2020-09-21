import React from 'react';
import { Form, Row } from 'react-bootstrap';

import ImbuItem from '../ImbuItem.jsx';
import ImbuItemsTotalPrice from '../imbuItemDetails/ImbuItemsTotalPrice.jsx';

const ImbuCostAnalysisResultItem = ({ calculatedOption }) => {
    return (
        <>
            <Form.Group as={Row} className="justify-content-center">
                {Object.entries(calculatedOption.itemSet).map((items, i) => {
                    return <ImbuItem key={i} itemName={items[0]} itemCount={items[1]}/>
                })}
            </Form.Group>
            <ImbuItemsTotalPrice totalPrice={calculatedOption.totalPrice} />
        </>
    );
}

export default ImbuCostAnalysisResultItem;
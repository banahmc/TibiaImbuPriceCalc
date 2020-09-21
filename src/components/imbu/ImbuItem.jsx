import React from 'react';
import { Col } from 'react-bootstrap';

import ItemImage from './ItemImage.jsx';

const ImbuItem = ({ itemName, itemCount }) => {
    return (
        <Col xs='1' sm='2'>
            <ItemImage itemName={itemName} />
            <span><small>{itemCount}</small></span>
        </Col>
    );
}

export default ImbuItem;
import React from 'react';
import { Form, Row } from 'react-bootstrap';

export const ImbuItemsTotalPrice = ({ totalPrice }) =>
    <Form.Group as={Row}>
        <Form.Label column xs="12">
            <span style={{ fontWeight: 'bold' }} title="Total price for imbu (based off of currently set prices)">Total Price: {totalPrice.toLocaleString()} gp</span>
        </Form.Label>
    </Form.Group>
;

export default ImbuItemsTotalPrice;
import React from 'react';
import { Alert } from 'react-bootstrap';

export const PricesAlert = (props) => {
    return (
        <Alert variant={props.variant}>
            <Alert.Heading>{props.heading}</Alert.Heading>
            <hr />
            {props.children}
        </Alert>
    );
}

export default PricesAlert;
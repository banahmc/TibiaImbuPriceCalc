import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import '../../../styles/imbu/imbuItem.css';
import ItemImage from '../ItemImage.jsx';

export const ImbuItemEditable = ({ name, price, count, edited, onChangePrice, onChangeCount }) =>
    <Form.Group as={Row}>
        <Col xs='1' sm='2'>
            <ItemImage itemName={name} />
        </Col>
        <Form.Label column xs={{ span: 4, offset: 1 }} sm={{ span: 5, offset: 0 }}>
            <span title="Item name">{name}</span>
        </Form.Label>
        <Col xs='2' className='count-input-wrapper'>
            <Form.Control id={`${name}-count`} plaintext={!edited} value={count} onChange={onChangeCount} title="Item count" maxLength='2'/>
        </Col>
        <Col xs='3' className='price-input-wrapper'>
            <Form.Control id={`${name}-price`} plaintext={!edited} value={price} onChange={onChangePrice} title="Item unit price" maxLength='6'/>
        </Col>
    </Form.Group>
;

export default ImbuItemEditable;
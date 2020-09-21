import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../../styles/imbu/Imbuements.css';
import ImbuTypeCard from './ImbuTypeCard.jsx';
import { imbuTypes } from '../../types';

export const Imbuements = () =>
    <Container className='imbuements-wrapper'>
        <Row>
            {Object.values(imbuTypes).map(imbuType => 
                <Col key={imbuType.id} sx={6} sm={{ span: 10, offset: 1 }} md={{ span: 7, offset: 0 }} lg={{ span: 6, offset: 0 }} xl={{ span: 5, offset: 0 }}>
                    <ImbuTypeCard imbuType={imbuType} />
                </Col>
            )}
        </Row>
    </Container>
;

export default Imbuements;
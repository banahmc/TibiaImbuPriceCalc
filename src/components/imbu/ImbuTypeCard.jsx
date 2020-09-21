import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';

import { AppContext } from '../../context/AppContext';

import '../../styles/imbu/ImbuType.css';
import ImbuItemPriceEditor from './imbuItemDetails/ImbuItemPriceEditor.jsx';
import ImbuCostAnalysisResult from './analysisResult/ImbuCostAnalysisResult.jsx';

export const ImbuTypeCard = ({ imbuType }) => {
    const context = useContext(AppContext);
    const itemPrices = context.itemPrices.filter(x => x.Type == imbuType.id || x.itemName === 'Gold Token');
    const imbuementOptions = context.imbuementOptions.filter(x => x.type == imbuType.id)[0].items;
    return (
        <Card className="text-center imbu-type-card" bg="light">
            <Card.Header>
                <Card.Img variant='left' src={`images/${imbuType.id}.gif`} style={{ float: 'left' }} />
                <span><strong>{imbuType.name}</strong></span>
            </Card.Header>
            <Card.Body>
                <div style={{ marginBottom: '15px' }}>
                    <ImbuCostAnalysisResult itemPrices={itemPrices} imbuementOptions={imbuementOptions} />
                </div>
                <div>
                    <ImbuItemPriceEditor itemPrices={itemPrices} imbuementOptions={imbuementOptions} />
                </div>
            </Card.Body>
        </Card>
    );
}

export default ImbuTypeCard;
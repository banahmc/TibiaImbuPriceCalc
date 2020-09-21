import React, { Component } from 'react';
import { If, Then } from 'react-if-elseif-else-render';
import _ from 'lodash';
import { ButtonToolbar, Button  } from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';

import { withAppContext } from '../../hoc/withAppContext';

import { calculateImbuItemPrice, sumImbuItemPrices } from '../../../utilities';
import { PricesAlert } from '../../prices/alerts/PricesAlert.jsx';
import Toolbar from '../Toolbar.jsx';
import ImbuCostAnalysisResultDetails from './ImbuCostAnalysisResultDetails.jsx';
import ImbuCostAnalysisResultItem from './ImbuCostAnalysisResultItem.jsx';

export class ImbuCostAnalysisResult extends Component {
    state = {
        showDetails: false
    }
    calculateOption = (itemPrices, itemSet) => {
        let selectedPrices = [];
        Object.entries(itemSet).forEach(([itemName, count]) => {
            const itemPrice = _.find(itemPrices, { itemName });
            if (itemPrice) {
                const itemPriceInfo = {
                    itemName: itemPrice.itemName,
                    Count: itemPrice.Count,
                    value: itemPrice.value,
                    price: calculateImbuItemPrice(itemPrice.value, count)
                };

                if (itemName === 'Gold Token') {
                    itemPriceInfo.Count = count;
                }

                selectedPrices = [...selectedPrices, itemPriceInfo];
            }
        });
        return { itemSet, totalPrice: sumImbuItemPrices(selectedPrices) };
    }
    calculateOptions = (imbuementOptions, itemPrices) => {
        let results = [];
        imbuementOptions.forEach(itemSet => {
            const result = this.calculateOption(itemPrices, itemSet);
            results = [...results, result];
        });
        return results;
    }
    analyzeOptions = (imbuementOptions, itemPrices) => {
        const calculatedOptions = this.calculateOptions(imbuementOptions, itemPrices);
        const bestOption = _.minBy(calculatedOptions, 'totalPrice');
        return { calculatedOptions, bestOption };
    }
    render() {
        const { showDetails } = this.state;
        const { imbuementOptions, itemPrices } = this.props;
        const { calculatedOptions, bestOption } = this.analyzeOptions(imbuementOptions, itemPrices);
        return (
            <>
                <PricesAlert variant='success' heading='Cheapest option'>
                    <ImbuCostAnalysisResultItem calculatedOption={bestOption}/>
                    <If condition={!!calculatedOptions && calculatedOptions.length > 0}>
                        <Then>
                            <Toolbar>
                                <ButtonToolbar>
                                    <Button
                                        aria-controls="imbu-cost-analysis-result-details"
                                        aria-expanded={showDetails}
                                        variant="success"
                                        size="sm"
                                        onClick={() => this.setState({ showDetails: !showDetails })}
                                    >
                                        Details
                                    </Button>
                                </ButtonToolbar>
                            </Toolbar>
                            <Collapse in={this.state.showDetails}>
                                <div id="imbu-cost-analysis-result-details">
                                    <ImbuCostAnalysisResultDetails calculatedOptions={calculatedOptions} />
                                </div>
                            </Collapse>
                        </Then>
                    </If>
                </PricesAlert>
            </>
        );
    }
}

export default withAppContext(ImbuCostAnalysisResult);
import React, { Component } from 'react';
import { If, Then } from 'react-if-elseif-else-render';

import { withAppContext } from '../../hoc/withAppContext';

import { PricesAlert } from '../../prices/alerts/PricesAlert.jsx';
import { ImbuItems } from './ImbuItems.jsx';
import { toNumber, limit, removeLeadingZero } from '../../../formatters';
import { getArrayElementInfo } from '../../../utilities';
import * as constants from '../../../constants';

export class ImbuItemPriceEditor extends Component {
    state = {
        inputs: []
    };
    componentDidMount = () => {
        this.initializeInputs();
    };
    markItemEdited = (id) => {
        const { inputs } = this.state;
        const input = getArrayElementInfo(inputs, 'id', id);

        if (!!input && !input.edited) {
            input.element.edited = true;
            Object.assign(inputs[input.elementIndex], input.element);

            this.setState({ inputs });
        }
    }
    onChangePrice = (e) => {
        const id = e.target.id.split('-')[0];
        const newPrice = toNumber(removeLeadingZero(limit(e.target.value, 6))) || 0;

        if (newPrice >= constants.IMBU_ITEM_PRICE_MIN && newPrice <= constants.IMBU_ITEM_PRICE_MAX) {
            this.props.context.changeItemProp(id, 'value', parseInt(newPrice));
        }

        this.markItemEdited(id);
    }
    onChangeCount = (e) => {
        const id = e.target.id.split('-')[0];
        const newCount = toNumber(removeLeadingZero(limit(e.target.value, 2))) || 0;

        if (newCount >= constants.IMBU_ITEM_COUNT_MIN && newCount <= constants.IMBU_ITEM_COUNT_MAX) {
            this.props.context.changeItemProp(id, 'Count', parseInt(newCount));
        }

        this.markItemEdited(id);
    }
    initializeInputs = () => {
        const { itemPrices } = this.props;

        if (!!itemPrices) {
            let inputs = [];

            itemPrices.map(itemPrice => {
                const inputState = {
                    id: itemPrice.itemName,
                    edited: false
                }
                inputs = [...inputs, inputState];
            });
    
            this.setState({ inputs });
        }
    }
    render() {
        const { inputs } = this.state;
        const { itemPrices, imbuementOptions } = this.props;
        return (
            <If condition={!!itemPrices && inputs.length > 0}>
                <Then>
                    <PricesAlert variant='info' heading='Items'>
                        <ImbuItems
                            itemPrices={itemPrices}
                            imbuementOptions={imbuementOptions}
                            inputs={inputs}
                            onChangePrice={(e) => this.onChangePrice(e)}
                            onChangeCount={(e) => this.onChangeCount(e)}
                        />
                    </PricesAlert>
                </Then>
            </If>
        );
    }
}

export default withAppContext(ImbuItemPriceEditor);
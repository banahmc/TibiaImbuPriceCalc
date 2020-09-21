import React, { Component } from 'react';
import { If, Then } from 'react-if-elseif-else-render';
import _ from 'lodash';
import moment from 'moment';
import { ButtonToolbar, Button } from 'react-bootstrap';

import { AppContext } from '../../context/AppContext';

import ImbuLoadingOverlay from './ImbuLoadingOverlay.jsx';
import { Toolbar } from './Toolbar.jsx';
import { PricesStatusInfo } from '../prices/PricesStatusInfo.jsx';
import Imbuements from './Imbuements.jsx';
import { getArrayElementInfo } from '../../utilities';
import { dateTimeFormatter, defaultDateTimeFormat } from '../../formatters';
import { getItemPrices, getItemPricesFake } from '../../api/pricesApi';
import imbuementOptions from '../../../config/imbuementOptions.json';

const LOCALSTORAGE_ITEMPRICES_KEY = 'ItemPrices';

class ImbuItemCostAnalyzer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoadingData: false,
            itemPrices: [],
            imbuementOptions: imbuementOptions || []
        }
    }
    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve);
        });
    }
    saveItemPrices = (itemPrices) => {
        this.setStateAsync({ itemPrices: itemPrices });
        const expiresAt = dateTimeFormatter(moment().add(1, 'hours'));
        window.localStorage.setItem(LOCALSTORAGE_ITEMPRICES_KEY, JSON.stringify({ data: itemPrices, expiresAt: expiresAt }));
    }
    getPricesFromApi = () => {
        //const result = await getItemPrices();
        const result = getItemPricesFake();
        if (result.success) {
            this.saveItemPrices(result.data);
        }
    }
    loadItemPrices = async () => {
        const localStorageItemPrices = window.localStorage.getItem(LOCALSTORAGE_ITEMPRICES_KEY);
        if (!localStorageItemPrices) {
            this.getPricesFromApi();
        } else {
            const itemPricesLocalCache = JSON.parse(localStorageItemPrices);
            const expiresAt = moment(itemPricesLocalCache.expiresAt, defaultDateTimeFormat);
            if (expiresAt.isValid() && moment().isBefore(expiresAt)) {
                this.saveItemPrices(itemPricesLocalCache.data);
            } else {
                this.getPricesFromApi();
            }
        }
    }
    changeItemProp = (itemName, prop, value) => {
        const itemPrices = this.state.itemPrices;
        const itemInfo = getArrayElementInfo(itemPrices, 'itemName', itemName);

        if (!!itemInfo && itemInfo.element[prop] !== undefined) {
            itemInfo.element[prop] = value;
            Object.assign(itemPrices[itemInfo.elementIndex], itemInfo.element);

            this.setState({ itemPrices });
        }
    }
    reloadData = async () => {
        this.setStateAsync({ isLoadingData: true });
        await this.loadItemPrices();
        this.setStateAsync({ isLoadingData: false });
    }
    async componentDidMount() {
        await this.reloadData();
    }
    render() {
        const { isLoadingData, itemPrices, imbuementOptions } = this.state;
        const context = {
            //props
            isLoadingData: isLoadingData,
            itemPrices: itemPrices,
            imbuementOptions: imbuementOptions,
            //functions
            changeItemProp: this.changeItemProp
        };
        return (
            <AppContext.Provider value={context}>
                <ImbuLoadingOverlay active={isLoadingData}>
                    <PricesStatusInfo />
                    <If condition={itemPrices.length > 0 && imbuementOptions.length > 0}>
                        <Then>
                            <Toolbar>
                                <ButtonToolbar>
                                    <Button variant="primary" size="lg" style={{ marginLeft: '10px' }} onClick={this.reloadData}>Load Defaults</Button>
                                </ButtonToolbar>
                            </Toolbar>
                            <Imbuements />
                        </Then>
                    </If>
                </ImbuLoadingOverlay>
            </AppContext.Provider>
        );
    }
}

export default ImbuItemCostAnalyzer;
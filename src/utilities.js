import _ from 'lodash';

export const calculateImbuItemPrice = (price, count) => {
    return parseInt(price) * parseInt(count);
}

export const sumImbuItemPrices = (itemPrices) => {
    const prices = itemPrices.map(itemPrice => calculateImbuItemPrice(itemPrice.value, itemPrice.Count));
    const totalPrice = _.sumBy(prices, p => p);

    return totalPrice;
}

export const getArrayElementInfo = (array, key, value) => {
    array = array || [];
    const element = array.filter(x => x[key] === value);
    const elementIndex = array.findIndex(x => x[key] === value);
    
    let elementInfo = null;
    if (!!element && element.length > 0) {
        elementInfo = {
            element: element[0],
            elementIndex: elementIndex
        };
    }

    return elementInfo;
}

export const getItemImageId = (itemName) => {
    if (!itemName) return '';
    return itemName.replace(/\s+/g, '_').toLowerCase();
}
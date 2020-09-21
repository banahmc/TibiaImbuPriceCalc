import request from 'superagent';

const API_PRICES_URL = 'http://ti-rules.ovh/tibia/api/prices';

export const getItemPrices = async () => {
    let result = {
        data: [],
        message: 'Generic error',
        success: false
    };

    await request
        .get(API_PRICES_URL)
        .then(res => {
            if (res.statusCode === 200) {
                return {
                    data: res.body,
                    message: 'success',
                    success: true
                }
            }
        })
        .catch(err => {
            result.message = err;
            console.log('Error when calling item prices API', err);
        });

    return result;
}

export const getItemPricesFake = () => {
    const jsonData = '[{"id":1005289,"worldName":"Secura","checkTime":"2019-03-01T21:26:17Z","value":32999,"itemName":"Gold Token","offerType":"sell","Type":0,"Count":1},{"id":1005149,"worldName":"Secura","checkTime":"2019-03-01T21:24:02Z","value":3650,"itemName":"Silencer Claws","offerType":"sell","Type":1,"Count":25},{"id":1005147,"worldName":"Secura","checkTime":"2019-03-01T21:24:02Z","value":2699,"itemName":"Rope Belt","offerType":"sell","Type":1,"Count":25},{"id":1005151,"worldName":"Secura","checkTime":"2019-03-01T21:24:02Z","value":1500,"itemName":"Some Grimeleech Wings","offerType":"sell","Type":1,"Count":5},{"id":1005175,"worldName":"Secura","checkTime":"2019-03-01T21:24:05Z","value":2097,"itemName":"Protective Charm","offerType":"sell","Type":2,"Count":20},{"id":1005148,"worldName":"Secura","checkTime":"2019-03-01T21:24:02Z","value":4200,"itemName":"Sabretooth","offerType":"sell","Type":2,"Count":25},{"id":1005216,"worldName":"Secura","checkTime":"2019-03-01T21:25:07Z","value":1150,"itemName":"Vexclaw Talon","offerType":"sell","Type":2,"Count":5},{"id":1005181,"worldName":"Secura","checkTime":"2019-03-01T21:24:05Z","value":1800,"itemName":"Vampire Teeth","offerType":"sell","Type":3,"Count":25},{"id":1005112,"worldName":"Secura","checkTime":"2019-03-01T21:23:02Z","value":6399,"itemName":"Bloody Pincers","offerType":"sell","Type":3,"Count":15},{"id":1005172,"worldName":"Secura","checkTime":"2019-03-01T21:24:05Z","value":12698,"itemName":"Piece of Dead Brain","offerType":"sell","Type":3,"Count":5}]';
    return {
        data: JSON.parse(jsonData),
        message: '',
        success: true,
        status: 200
    };
}
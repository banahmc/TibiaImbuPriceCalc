import React, { useContext } from 'react';
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
import moment from 'moment';
import _ from 'lodash';

import { AppContext } from '../../context/AppContext';

import PricesNotFoundAlert from './alerts/PricesNotFoundAlert.jsx';
import PricesUpToDateAlert from './alerts/PricesUpToDateAlert.jsx';
import PricesOutdatedAlert from './alerts/PricesOutdatedAlert.jsx';
import PricesLoadingAlert from './alerts/PricesLoadingAlert.jsx';

const sortByCheckTimes = (itemPrices) => {
    const checkTimes = itemPrices.map(x => x.checkTime);
    if (checkTimes && checkTimes.length > 1) {
        return _.orderBy(checkTimes, (o) => {
            return moment(o);
        }, ['desc']);
    } else {
        return checkTimes;
    }
}

export const PricesStatusInfo = () => {
    const context = useContext(AppContext);
    const { isLoadingData, itemPrices } = context;
    const maxCheckTime = sortByCheckTimes(itemPrices)[0];
    const maxCheckTimeMoment = !!maxCheckTime ? moment(maxCheckTime) : undefined; 
    const pricesUpdateDiffHrs = !!maxCheckTime ? moment().diff(maxCheckTimeMoment, 'hours') : undefined;

    return (
        <If condition={isLoadingData}>
            <Then>
                <PricesLoadingAlert />
            </Then>
            <ElseIf condition={itemPrices.length == 0 || maxCheckTime === undefined || !maxCheckTimeMoment.isValid() || pricesUpdateDiffHrs === undefined}>
                <PricesNotFoundAlert />
            </ElseIf>                
            <ElseIf condition={pricesUpdateDiffHrs > 24}>
                <PricesOutdatedAlert updatedOn={maxCheckTimeMoment} hours={pricesUpdateDiffHrs}/>
            </ElseIf>
            <Else>
                <PricesUpToDateAlert updatedOn={maxCheckTimeMoment}/>
            </Else>
        </If>
    );
}

export default PricesStatusInfo;
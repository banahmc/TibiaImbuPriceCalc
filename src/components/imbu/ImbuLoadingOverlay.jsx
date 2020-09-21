import React, { useContext } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import Loader from 'react-spinners/CircleLoader';

import { AppContext } from '../../context/AppContext';

const ImbuLoadingOverlay = (props) => {
    const context = useContext(AppContext);
    return (
        <LoadingOverlay
            spinner={<Loader />}
            text='Fetching Item Prices...'
            active={context.isLoadingData}
            styles={{
                wrapper: {
                    marginBottom: '30px',
                    marginLeft: '5px'
                }
            }}
        >
            {props.children}
        </LoadingOverlay>
    );
}

export default ImbuLoadingOverlay;
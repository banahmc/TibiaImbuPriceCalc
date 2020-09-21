import React from 'react';
import { AppContext } from '../../context/AppContext';

export function withAppContext(Component) {
    return function WrapperComponent(props) {
        return (
            <AppContext.Consumer>
                {ctx => <Component  {...props} context={ctx} />}
            </AppContext.Consumer>
        );
    };
}
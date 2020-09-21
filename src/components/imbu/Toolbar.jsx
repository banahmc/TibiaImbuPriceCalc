import React from 'react';

export const Toolbar = (props) =>
    <div style={{ marginBottom: '10px', justifyContent: 'center', display: 'flex' }}>
        {props.children}
    </div>
;

export default Toolbar;
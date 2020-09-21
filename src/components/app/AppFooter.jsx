import React from 'react';

const AppFooter = () =>
    <footer>
        <div className="footer navbar navbar-light bg-light fixed-bottom">
            {(new Date()).getFullYear()} &copy; A3f
        </div>
    </footer>
;

export default AppFooter;
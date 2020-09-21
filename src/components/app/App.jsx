import React from 'react';
import AppHeader from './AppHeader.jsx';
import AppFooter from './AppFooter.jsx';
import '../../styles/app.css';
import ImbuItemCostAnalyzer from '../imbu/ImbuItemCostAnalyzer.jsx';

const App = () =>
    <>
        <AppHeader />
        <ImbuItemCostAnalyzer />
        <AppFooter />
    </>
;

export default App;
import React from 'react';
import './App.css';
import ComplicatedTab from './component-compound-pattern/bad-practice/bad-tab.component';
import CompounedComponentBasedTab
    from './component-compound-pattern/good-practice/compounded-tab.component';

function App() {
    return (
        <>
            <ComplicatedTab/>
            <CompounedComponentBasedTab/>
        </>
    );
}

export default App;

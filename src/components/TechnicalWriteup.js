import React from 'react';
import Sidebar from './SideBar';
import Content from './Content';
import '../style/TechnicalWriteup.css';

const TechnicalWriteup = () => {
    return (
        <div className="two-column-layout">

            <Content />
            <Sidebar />
        </div>
    );
};

export default TechnicalWriteup;

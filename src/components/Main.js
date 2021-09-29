import React from "react";
import './Main.css';
import Field from '../components/Field';
import InfoBar from '../components/InfoBar';
import LeftBar from '../components/LeftBar';

const Main = () => {
    return (
        <div id='Main'>
        <LeftBar/>
        <Field/>
        <InfoBar/>
        </div>
    )
}

export default Main;
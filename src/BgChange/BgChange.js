import React, { useState } from 'react';
import Select from 'react-select'

const BgChange = () => {
    let colors = [
        {
            value:1,
            label:"red"
        },
        {
            value:2,
            label:"blue"
        },
        {
            value:3,
            label:"orange"
        },
        {
            value:1,
            label:"green"
        }
    ]
    const [bgColor, setBgColor] = useState(colors.label);
    const handleBgChange = (e) =>{
       setBgColor(e.label) 
    }

    return (
        <div>
            <style>{ 'body {background-color:'+bgColor+';}' }</style>
            <h1>this is bgchange home</h1>
            <Select options={colors} onChange = {handleBgChange}></Select>
        </div>
    );
};

export default BgChange;
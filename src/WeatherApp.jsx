import React, { Fragment, useState} from "react";
import AppTop from './top/AppTop.jsx';
import AppButtom from './Bottom/AppBottom.jsx';
import InfoIcons from './info/InfoBoxs.jsx';
import background from "./img/background.jpg";


const Component =  () => {
    const [inputText, setInputText] = useState("");
    const [showData, setShowData] = useState({name:""});
    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleShow = (event) => {
        event.preventDefault();
        setShowData({
            name: inputText,
        });
        setInputText('');
    };
    return(
    <Fragment>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Rubik:wght@300&display=swap');
        </style>
        <div className="App">
            <img src= {background} className="image" />
        </div>
                <div className="divbox">
                    <AppTop />
                    <AppButtom />  
                    <InfoIcons />    
                </div>
    </Fragment>    
        );
};

export default Component;
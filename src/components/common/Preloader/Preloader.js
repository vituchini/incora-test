import preloader from "../../../logo.svg";
import React from "react";
import '../../../App.css';

let Preloader = (props) => {
    return (
        <div>
            <img  className={'logo'} src={preloader} alt={'loader'}/>
        </div>
)}
 export default Preloader
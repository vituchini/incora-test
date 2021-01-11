import preloader from "../../../logo.svg";
import React from "react";
import '../../../App.css';
import s from './Preloader.module.css'

let Preloader = (props) => {
    return (
        <div className={s.preloaderWrapper}>
            <img  className={s.preloader} src={preloader} alt={'loader'}/>
        </div>
)}
 export default Preloader
import React from "react";
import s from './FormsControls.module.css'
import {Field} from "redux-form";

export const TextArea = ({input, meta:{touched,error}, ...props}) => {
    const hasError = touched && error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <div>{error}</div>}
        </div>
    )
}
export const Input = ({input, meta:{touched,error}, ...props}) => {
    const hasError = touched && error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const CreateField = (placeholder, name, validators, component,props={},text='') =>
    <div>
        <Field name={name} placeholder={placeholder} component={component} validate={validators} {...props}/>{text}
    </div>
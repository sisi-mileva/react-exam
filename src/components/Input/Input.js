import React from 'react';
import styles from './Input.css'

const input = (props) => {
    let component = <input {...props.options} onChange={props.changeHandler} />;
    if (props.componentType === 'textarea') {
        component = <textarea {...props.options} onChange={props.changeHandler} />;
    }
    if (props.componentType === 'select') {
        component = (
            <select
                value={props.value}
                onChange={props.changeHandler}>
                {props.options.selectOptions.map(option => <option key={option.value} value={option.value}> {option.title} </option>)}
            </select >);
    }

    let classes = [];
    if (!props.isOK) {
        classes.push(styles.Invalid);
    }
    return (
        <div className={classes}>
            <label> {props.label}: </label>
            {component}
        </div>
    )
}

export default input;


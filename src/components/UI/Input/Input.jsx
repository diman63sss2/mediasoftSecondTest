import React from 'react';
import cl from './Input.module.css';

const Input = ({id, title, ...props}) => {
    return (
        <div className={cl.container}>
            <label htmlFor={id} className={cl.title}>{title}</label>
            <input {...props} id={id} className={cl.input} />
        </div>

    );
};

export default Input;
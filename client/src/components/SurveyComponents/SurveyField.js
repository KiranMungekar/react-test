import React, { Component } from 'react';

export default ({input, label, meta:{error, touched}}) =>{
    
    return(
        <div>
            <label>{label}</label>
            <input {...input} />
            <div className="red-text" style={{marginBottom:'10px'}}>{touched && error}</div>
        </div>
    );
}
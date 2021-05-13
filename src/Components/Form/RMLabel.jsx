import React from 'react';

const RMLabel = (props) => {
    return (
        <label className="RMFormLabel" style={{width:props.label_width}} >{props.label_text}</label>
    )
}

export default RMLabel;
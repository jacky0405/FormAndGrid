import { TextField } from '@material-ui/core';
import React from 'react';
import RMLabel from './RMLabel.jsx';
import RMFormController from './RMFormController.jsx'

const RMTextBox = (props) => {

    const handleTextChange = (v, id) => {
        props.onChange(v,id);
    }

    return (
        <RMFormController key={"FormController_"+props.idx}>
            <RMLabel 
                key={"RMTextLebel_" + props.idx}
                label_text={props.label_text} 
                label_width={props.label_width}/>
            <TextField 
                key={"TextField_"+props.idx}
                variant="outlined"
                value={props.value}
                placeholder={props.placeholder}
                type={props.type}
                disabled={props.disabled}
                onChange={(e) => {handleTextChange(e.target.value, props.id)}}/>
        </RMFormController>

    );
}

export default RMTextBox;
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import React from 'react';
import RMFormController from './RMFormController';
import RMLabel from './RMLabel';

const RMRadioButton = (props) => {

    const handleGenderChange = (v,id) => {
        props.onChange(v,id);
    }

    return (
        <RMFormController key={"FormController_"+props.idx}>
            <RMLabel 
                key={"RMRaioLebel_" + props.idx}
                label_text={props.label_text} 
                label_width={props.label_width}/>
            <RadioGroup row aria-label="gender" value={props.value} onChange={(e) => {handleGenderChange(e.target.value,props.id)}} >
                {
                    props.items.map( (f,idx) => 
                        <FormControlLabel
                            key={"Radio_" + idx}
                            value={f.value}
                            control={<Radio/>}
                            label={f.text}
                            disabled={props.disabled}
                            />
                    )
                }
            </RadioGroup>
        </RMFormController>
    )

}

export default RMRadioButton;
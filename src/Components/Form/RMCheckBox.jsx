import { Checkbox, FormControlLabel } from '@material-ui/core';
import React from 'react';
import RMFormController from './RMFormController.jsx'
import RMLabel from './RMLabel.jsx'

const RMCheckBox = (props) => {

    const getCheckBoxList = (v) => {
        let list = {};

        props.items.forEach((f,idx) => {
            list[f.value] = false;
        })

        if(v !== []){
            v.forEach((f) => {
                list[f] = true;
            })
        }
        
        return list;
    };

    const handleCheckBoxChange = (v,id) => {
        let v_modi = [];
        Object.keys(v).forEach((k) => {
            if(v[k]){
                v_modi.push(k);
            }
        })
        props.onChange(v_modi,id);
    };

    return (
        <RMFormController key={"FormController_"+props.idx}>
            <RMLabel 
                key={"RMCheckLebel_" + props.idx}
                label_text={props.label_text} 
                label_width={props.label_width}/>
            {
                props.items.map((f,idx) => 
                    <FormControlLabel
                        key={f.id + "_" + idx}
                        control={<Checkbox checked={getCheckBoxList(props.value)[f.value]} value={f.value}/>}
                        label={f.text}
                        disabled={props.disabled}
                        onChange={(e)=>{handleCheckBoxChange({...getCheckBoxList(props.value),[e.target.value]:e.target.checked},props.id)}}/>) 
            }   
        </RMFormController>
    )
}

export default RMCheckBox;
import { Select } from '@material-ui/core';
import React from 'react';
import RMFormController from './RMFormController';
import RMLabel from './RMLabel';

const RMOptionsBox = (props) => {

    const handleOptionsChange = (v,id) => {
        props.onChange(v,id);
    }

    return (
        <RMFormController key={"FormController_"+props.idx}>
            <RMLabel
                key={"RMOptionsLebel_" + props.idx}
                label_text={props.label_text} 
                label_width={props.label_width}
                />
            <Select
                native
                style={{width: props.width}}
                key={"RMOptionsBox_" + props.idx}
                value={props.value}
                onChange={(e) => {handleOptionsChange(e.target.value, props.id)}}
                className="RMOptions">
                
                <option key={"RMOprion_1"} value="">{props.placeholder}</option>
                {
                    props.items.map((f,idx) => 
                        <option key={"RMOption_"+idx} value={f.value}>{f.text}</option>
                    )
                }

            </Select>
        </RMFormController>
    )
}

export default RMOptionsBox;
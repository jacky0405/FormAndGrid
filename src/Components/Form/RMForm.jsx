import React from 'react';
import RMCheckBox from './RMCheckBox';
import RMOptionsBox from './RMOptionsBox';
import RMRadioButton from './RMRadioButton';
import RMTextBox from './RMTextBox';

const RMForm = (props) => {

    const handleFormChange = (v,id) => {
        props.onChange(v,id)
    }

    let _Fields = [];
    props.field.forEach((f,idx) => {
        if(f.type === "RMTextField")
        {
            _Fields.push(
                <RMTextBox
                    key={"OuterTextField_"+idx}
                    idx={idx} 
                    id={f.id}
                    label_width={f.label_width}
                    label_text={f.label_text}
                    placeholder={f.placeholder}
                    style={{width:f.width}}
                    value={props.data[f.id]}
                    disabled={f.disabled}
                    onChange={(v,id) => handleFormChange(v,id)}
                />
            );
        }
        else if(f.type === "date")
        {
            _Fields.push(
                <RMTextBox
                    key={"FormDate_"+idx}
                    idx={idx}
                    id={f.id}
                    label_width={f.label_width}
                    label_text={f.label_text}
                    placeholder={f.placeholder}
                    value={props.data[f.id]}
                    disabled={f.disabled}
                    type="date"
                    onChange={(v,id) => handleFormChange(v,id)}
                    />
            )
        }
        else if(f.type === "checkbox")
        {
            _Fields.push(
                <RMCheckBox
                    key={"FormCheckBox_"+idx}
                    idx={idx}
                    id={f.id}
                    label_width={f.label_width}
                    label_text={f.label_text}
                    value={props.data[f.id]}
                    disabled={f.disabled}
                    items={f.items}
                    onChange={(v,id) => handleFormChange(v,id)}
                    />
            )
        }
        else if(f.type === "Radio")
        {
            _Fields.push(
                <RMRadioButton
                    key={"FormRadio_"+idx}
                    idx={idx}
                    id={f.id}
                    label_width={f.label_width}
                    label_text={f.label_text}
                    value={props.data[f.id]}
                    disabled={f.disabled}
                    items={f.items}
                    onChange={(v,id) => handleFormChange(v,id)}
                    />
            )
        }
        else if(f.type === "options")
        {
            _Fields.push(
                <RMOptionsBox
                    key={"FormOptionBox_"+idx}
                    idx={idx}
                    id={f.id}
                    label_width={f.label_width}
                    label_text={f.label_text}
                    width={f.width}
                    placeholder={f.placeholder}
                    value={props.data[f.id]}
                    disabled={f.disabled}
                    items={f.items}
                    onChange={(v,id) => handleFormChange(v,id)}
                    />
            )
        }
    })

    return (
        <>
            {_Fields}
        </>       
    )
    

}

export default RMForm;
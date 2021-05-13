import { Button } from '@material-ui/core';
import React from 'react';

const RMButton = (props) => {

    return (
        <Button 
            id={props.id}
            variant="contained"
            size="small"
            disabled={props.disabled}
            onClick={props.onClick}
        >{props.text}</Button>
    )
}

export default RMButton;
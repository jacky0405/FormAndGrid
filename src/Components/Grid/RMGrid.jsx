import { Button, Tooltip } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import React from 'react';
import CreateIcon from '@material-ui/icons/Create';

const RMGrid = (props) => {

    const columns = [
        {
            field: "Button",
            headerName: " ",
            sortable: false,
            width: 60,
            disableClickEventBubbling: true,
            renderCell:(params) => {
                const onClick = () => {
                    const api = params.api;
                    const fields = api
                        .getAllColumns()
                        .map((c) => c.field)
                        .filter((c) => c !== "__check__" && !!c);
                    const thisRow = {};

                    fields.forEach((f) => {
                        if(f !== "Button"){
                            thisRow[f] = params.getValue(f);
                        }
                    });
                    
                    props.onClick(thisRow.id);
                }
                // return <CreateIcon key={Math.random()} style={{cursor: "pointer"}} onClick={onClick}></CreateIcon>
                // return <CreateIcon style={{cursor: "pointer"}} onClick={onClick}></CreateIcon>
                
                return (
                    <Button style={{height:"30px", width:"30px"}} onClick={onClick}>
                        <Tooltip title="編輯" >
                            <CreateIcon style={{cursor: "pointer", float:"left"}}></CreateIcon>
                        </Tooltip>
                    </Button>
                )
            }
        },
        {
            field: "id",
            headerName: "員編",
            width: 100
        },
        {
            field: "Name",
            headerName: "姓名",
            width: 100
        },
        {
            field: "SexDisplay",
            headerName: "性別",
            width: 100
        },
        {
            field: "Birthday",
            headerName: "生日",
            width: 150
        },
        {
            field: "TrafficTypeDisplay",
            headerName: "交通方式",
            width: 200
        },
        {
            field: "EatingDisplay",
            headerName: "葷素",
            width: 100
        }   
    ]

    const handleSelectItem = (id) => {
        props.onChange(id);
    }
    

    return (
        <div style={{height: 300, width: '100%'}}>
            <DataGrid
                key={props.id}
                rows={props.data}
                columns={columns}
                checkboxSelection
                onSelectionModelChange={(e)=>{handleSelectItem(e.selectionModel)}}
                />
        </div>
        
    )
}

export default RMGrid;
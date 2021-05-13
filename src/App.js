import './CSS/style.css';
import RMFormTitle from './Components/Form/RMFormTitle.jsx';
import RMTbar from './Components/Form/RMTbar.jsx';
import RMButton from './Components/Form/RMButton.jsx';
import RMForm from './Components/Form/RMForm.jsx'
import React, { useState } from 'react';
import RMGrid from './Components/Grid/RMGrid'


function App() {

  const [addState, setAddState] = useState(false);
  const [editState, setEditState] = useState(false);
  const [saveState, setSaveState] = useState(true);
  const [selectedGridItem, setSelectedGridItem] = useState([]);

  const FormField = [
      {
        id: "UserID",
        type: "RMTextField",
        label_width: 100,
        label_text: "員編:",
        width: 200,
        placeholder: "請輸入員工編號",
        disabled: editState
      },
      {
        id: "Name",
        type: "RMTextField",
        label_width: 100,
        label_text: "姓名:",
        width: 200,
        placeholder: "請輸入姓名",
        disabled: false
      },
      {
        id: "Sex",
        type: "Radio",
        label_width: 100,
        label_text: "姓別:",
        width: 200,
        items:[
          {id:"radio1", text:"男",value:"0"},
          {id:"radio2", text:"女",value:"1"}
        ]
      },
      {
        id: "Birthday",
        type: "date",
        label_width: 100,
        label_text: "生日:",
        width: 200
      },
      {
        id: "Commute",
        type: "checkbox",
        label_width: 100,
        label_text: "交通方式:",
        width: 200,
        items: [
          {text:"騎車", value:"0"},
          {text:"開車", value:"1"},
          {text:"公車", value:"2"}
        ]
      },
      {
        id: "Eating",
        type: "options",
        label_width: 100,
        label_text: "葷素:",
        width: 200,
        placeholder: "請選擇葷素",
        items:[
          {text: "葷", value: "0"},
          {text: "素", value: "1"}
        ]
      }
    ];

    
    const [GridData, setGridData] = useState([
      {
        id: "001",
        Name: "小明",
        Sex: "0",
        SexDisplay: "男",
        Birthday: "2021-04-22",
        TrafficType:["0"],
        TrafficTypeDisplay: "騎車",
        Eating: "0",
        EatingDisplay: "葷"
      },
      {
        id: "002",
        Name: "阿華",
        Sex: "1",
        SexDisplay: "女",
        Birthday: "2021-04-23",
        TrafficType:["1","2"],
        TrafficTypeDisplay: "開車、公車",
        Eating: "1",
        EatingDisplay: "素"
      }
    ]
    )

    const [formData, setFormData] = useState(
      {
        UserID: "",
        Name: "",
        Sex: "0",
        Birthday: "",
        Commute: [],
        Eating: ""
      }
    )
    
    const handleFormChange = (v,id) => {
      let newFormData = formData;
      newFormData[id] = v;
      setFormData({...newFormData});
    }

    const handleFormAddClick = (obj) => {
      if (obj["UserID"] === ""){
        alert("請輸入員編!");
        return;
      }
      else if (GridData.findIndex(f => f.id === obj["UserID"]) !== -1) {
        alert("員編已存在，請重新輸入!");
        return;
      }
      if (obj["Name"] === ""){
        alert("請輸入姓名!");
        return;
      }
      
      let newGridData = [...GridData];
      let emptyFormData = {
        UserID: "",
        Name: "",
        Sex: "0",
        Birthday: "",
        Commute: [],
        Eating: ""
      };
      let newObj = {
        id: obj["UserID"],
        Name: obj["Name"],
        Sex: obj["Sex"],
        SexDisplay: (obj["Sex"] === "0")? "男":"女",
        Birthday: obj["Birthday"],
        TrafficType: obj["Commute"],
        TrafficTypeDisplay: obj["Commute"].map((f)=>{
          switch(f){
            case "0":
              return "騎車";
            case "1":
              return "開車";
            default:
              return "公車";
          }
        }).join("、"),
        Eating: obj["Eating"],
        EatingDisplay: (obj["Eating"] === "0")? "葷":((obj["Eating"] === "1")?"素":"")
      }
      newGridData.push(newObj);
      setGridData(newGridData);
      setFormData({...emptyFormData});
    }

    const handleGridEditClick = (id) => {
      let selectedObj = {};
      GridData.forEach((f) => {
        if(f.id === id){
          selectedObj = f;
        }
      })
      let changeToForm = {
        UserID: selectedObj.id,
        Name: selectedObj.Name,
        Sex: selectedObj.Sex,
        Birthday: selectedObj.Birthday,
        Commute: selectedObj.TrafficType,
        Eating: selectedObj.Eating
      }
      
      setFormData({...changeToForm});
      setEditState(true);
      setAddState(true);
      setSaveState(false);
    }

    const handleFormSaveClick = (obj) => {
      let index = GridData.findIndex(f => f.id === obj.UserID);
      let emptyFormData = {
        UserID: "",
        Name: "",
        Sex: "",
        Birthday: "",
        Commute: [],
        Eating: ""
      };
      console.log(index);
      let newObj = {
        id: obj["UserID"],
        Name: obj["Name"],
        Sex: obj["Sex"],
        SexDisplay: (obj["Sex"] === "0")? "男":"女",
        Birthday: obj["Birthday"],
        TrafficType: obj["Commute"],
        TrafficTypeDisplay: obj["Commute"].map((f)=>{
          switch(f){
            case "0":
              return "騎車";
            case "1":
              return "開車";
            default:
              return "公車";
          }
        }).join("、"),
        Eating: obj["Eating"],
        EatingDisplay: (obj["Eating"] === "0")? "葷":((obj["Eating"] === "1")?"素":"")
      }
      const newGridData = [...GridData];
      newGridData[index] = newObj;
      console.log(newGridData);
      setGridData(newGridData);
      setFormData({...emptyFormData});
      setEditState(false);
      setAddState(false);
      setSaveState(true);
    }

    const handleGridSelectedChange = (id) => {
      setSelectedGridItem([...id]);
    }

    const handleRemoveBtn = (id) => {
      let newGridData = [...GridData];
      for(var i=0; i < id.length; i++) {
        let index = newGridData.findIndex(f => f.id === id[i]);
        console.log(index);
        newGridData.splice(index,1);
      }
      console.log(newGridData);
      setGridData(newGridData);
    }

  return (
    <>
      <RMFormTitle title="基本資料"/>
      <RMTbar>
        <RMButton
          id="addBtn"
          text="新增"
          disabled={addState}
          onClick={() => {handleFormAddClick(formData)}}/>
        <RMButton
          id="saveBtn"
          text="儲存"
          disabled={saveState}
          onClick={() => handleFormSaveClick(formData)}
        />
        <RMButton
          id="newWindowBtn"
          text="開視窗"/>
      </RMTbar>
      <RMForm
        field={FormField}
        data={formData}
        onChange={(v,id) => handleFormChange(v,id)}/>
      
      <RMFormTitle title="Grid"/>
      <RMTbar>
        <RMButton
          id="deleteBtn"
          text="刪除"
          onClick={() => handleRemoveBtn(selectedGridItem)}
          />
      </RMTbar>
      <RMGrid
        id="RMGrid"
        data={GridData}
        onClick={(id) => handleGridEditClick(id)}
        onChange={(id) => handleGridSelectedChange(id)}
        />
    </>  
  );
}

export default App;

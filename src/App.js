import React, { useEffect, useState } from 'react'
import { Col, message, Row } from 'antd';
import FormSide from './components/FormSide';
import Result from './components/Result';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({});
  const [resultData, setResultData] = useState([]);
  const [emailData, setEmailData] = useState();
  const [inputData, setInputData] = useState();
  const [textData, setTextData] = useState();
  const [date, setDate] = useState();
  const [type, setType] = useState([{id:1,name:"Input",disabled:false},{id:2,name:"TextArea",disabled:false},{id:3,name:"Datepicker",disabled:false},{id:4,name:"email",disabled:false}]);

  const changeFormData = (data) =>{
      let temp=[...resultData]
      temp.push({label:data.label,placeholder:data.placeholder,type:data.types})
      setResultData(temp)
      console.log(temp)
      type.forEach(element => {
        if(element.name==data.label)
        {
          element.disabled===true
        }
      });
      //vaxta gore deyise bilmedim, statede disabled true edecekdim :) 
  }
  const changeDatePicker=(date, dateString) =>{
setDate(dateString)
  }
  const changeEmail=(data)=>{
    setEmailData(data.target.value)
  }
  const changInput=(data)=>{
    inputData(data.target)
  }
  const changTextArea=(data) =>{
    setTextData(data.target.value)
  }
  const removeLast =()=>{
let temp =[...resultData]
temp.splice(resultData.length-1)
setResultData(temp)
  }
  const postData=()=>{
    let data={
      date:date,
      email:emailData,
      input:inputData,
      textArea:textData
    }
    axios.post("http://localhost:3000",data)
    .then(res=>{
      message.success("Success")
    })
  }
  return (
    <div className="App">
     <Row>
       <Col span={12}>
       <FormSide type={type} onFinish={changeFormData}></FormSide>
       </Col>
       <Col span={12}>
       <Result postData={postData} changInput={changInput} changTextArea={changTextArea} changeDatePicker={changeDatePicker}
       changeEmail={changeEmail} resultData={resultData} removeLast={removeLast}> </Result>
       </Col>
     </Row>
    </div>
  );
}

export default App;

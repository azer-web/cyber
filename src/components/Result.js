import { Button, DatePicker, Input } from 'antd'
import React, { useEffect } from 'react'

export default function Result(props) {
    const { resultdata } = props
    useEffect(() => {
        console.log(props)
    }, [props])
    return (
        <div >
            {
                props?.resultData?.map(item => {
                    return (
                            <div key={item.type}>
              <label>{item?.label}</label>
             {
                 item?.type==="Input"?
                 <Input onChange={props?.changInput} placeholder={item?.placeholder}></Input>:
                 item?.type=="TextArea"?
                 <Input.TextArea onChange={props?.changTextArea} placeholder={item?.placeholder}></Input.TextArea>
                 :item?.type=="Datepicker"?
                 <DatePicker onChange={props?.changeDatePicker} placeholder={item?.placeholder}></DatePicker>:
                 <Input type="email" onChange={props?.changeEmail} placeholder={item?.placeholder}></Input>
             }
                        </div>
                    )
                }
                )
            }
            <Button onClick={props?.postData}>submit</Button>
            <Button onClick={props?.removeLast}>Remove last</Button>
        </div>
    )
}

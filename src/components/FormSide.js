import React from 'react'
import { Form, Row, Col, Input, Select, Button } from 'antd';
const { Option } = Select;
export default function FormSide(props) {
    const [form] = Form.useForm();


    return (
        <div>
            <Form form={form} onFinish={props?.onFinish} initialValues={{ user_data: '' }} layout="vertical">
                <Row gutter={16}>

                    <Col span={24}>
                        <Form.Item
                            name="label"
                            label="Label"
                            rules={[{ required: true, message: 'Zəhmət olmasa label daxil edin' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="placeholder"
                            label="PlaceHolder"
                            rules={[{ required: true, message: 'Zəhmət olmasa placeholder daxil edin' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="types"
                            label="Type"
                            rules={[{ required: true, message: 'Zəhmət olmasa type secin' }]}
                        >
                        <Select>
                        {
                                props?.type?.map(item => (
                                    <Option disabled={item.disabled} key={item.name}>
                                        {item.name}
                                    </Option>
                                ))
                            }
                        </Select>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item >
                            <Button style={{ justifyContent: 'center' }} type="primary" htmlType="submit">
                                Add to Form            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

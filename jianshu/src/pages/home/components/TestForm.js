import React, {Component} from 'react'
import {Form,DatePicker,Button,Input} from 'antd'
import moment from 'moment'
class TestForm extends Component {
  formRef = React.createRef();
  onFinish(values) {
    console.log("values:", values)
  }
  componentDidMount() {
    console.log("aa:", this.formRef.current)
    this.formRef.current.setFieldsValue({DatePicker: moment("2020-09-13", "YYYY/MM/DD"), kk:"haha", cc: "bbb"})
  }
  render() {
    return <Form ref={this.formRef} onFinish={this.onFinish}>
      <Form.Item label="DatePicker" name="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="input" name="kk" >
        <Input />
      </Form.Item>
      <Button htmlType="submit">SUBMIT</Button>
    </Form>
  }
}
export default TestForm
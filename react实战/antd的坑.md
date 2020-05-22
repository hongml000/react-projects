# Form表单
## DatePicker中的初始值设置
 DatePicker中的初始值设置必须是Moment对象
```js
import React, {Component} from 'react'
import {Form,DatePicker,Button,Input} from 'antd'
// 需要引入moment，将后台转的字符串转换成Moment对象
import moment from 'moment'
class TestForm extends Component {
  formRef = React.createRef();
  onFinish(values) {
    console.log("values:", values)
  }
  componentDidMount() {
    console.log("aa:", this.formRef.current)
    // 表格初始值设置
    this.formRef.current.setFieldsValue({DatePicker: moment("2020-09-13"), kk:"haha", cc: "bbb"})
  }
  render() {
    return <Form ref={this.formRef} onFinish={this.onFinish}>
      // name值不可少，否则最后打印出的values值无法识别这个dom，就没有对应的值
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
```
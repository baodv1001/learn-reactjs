import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Checkbox } from 'antd';
InputField.propTypes = {
    
};

function InputField(props) {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div>
            <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="todo"
        rules={[
          {
            required: true,
            message: 'Please input your task!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      </Form>
        </div>
    );
}

export default InputField;
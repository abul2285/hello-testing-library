import React from 'react';
import { Form, Input } from 'antd';

const ForgetPassword = () => {
  const onKeyDown = (event) => {
    event.preventDefault();
  };
  return (
    <Form>
      <Form.Item name='email' label='Email'>
        <Input
          size='large'
          onKeyDown={onKeyDown}
          placeholder='Enter your email here'
        />
      </Form.Item>
    </Form>
  );
};

export default ForgetPassword;

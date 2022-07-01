import React from 'react';
import { Form, Input } from 'antd';

const ResetPassword = ({ disable }) => {
  return (
    <Form>
      <Form.Item name='email' label='Email'>
        <Input
          size='large'
          disabled={disable}
          placeholder='Enter your email here'
        />
      </Form.Item>
    </Form>
  );
};

export default ResetPassword;

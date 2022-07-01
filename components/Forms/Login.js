import { Form, Input } from 'antd';
import React, { useState } from 'react';

const Login = () => {
  const [value, setValue] = useState();
  const [disable, setDisable] = useState();

  const onChange = (event) => {
    const { value } = event.target;

    if (!disable) {
      setValue(value);
    }
  };

  const handleFocus = () => {
    setDisable(true);
  };

  return (
    <Form>
      <Form.Item label='Email'>
        <Input
          size='large'
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          placeholder='Enter your email here'
        />
        <p>Your name is: {value}</p>
      </Form.Item>
    </Form>
  );
};

export default Login;

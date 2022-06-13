import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';
import Container from '../components/Container/Container';

const SignIn = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  return (
    <Container>
      <Form layout='vertical' data-testid='form'>
        <h2>Sign In</h2>
        <br />
        <Form.Item label='Username' name='username'>
          <Input
            size='large'
            placeholder='username'
            value={user.username}
            onChange={(event) =>
              setUser({ ...user, username: event.target.value })
            }
          />
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <Input
            size='large'
            placeholder='password'
            value={user.password}
            onChange={(event) =>
              setUser({ ...user, password: event.target.value })
            }
          />
        </Form.Item>
        <Form.Item name='rememberMe'>
          <Checkbox>Remember Me</Checkbox>
        </Form.Item>
        <Button
          type='primary'
          block
          htmlType='submit'
          size='large'
          disabled={!user.username || !user.password}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;

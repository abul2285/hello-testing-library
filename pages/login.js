import { Button, Form, Input } from 'antd';
import React from 'react';
import Container from '../components/Container/Container';

const Login = () => {
  return (
    <Container>
      <Form layout='vertical'>
        <Form.Item label='Email Address' help='subscribe to our newsletter!'>
          <Input size='large' placeholder='enter an email' />
        </Form.Item>
        <br />
        <Button type='primary' htmlType='submit' size='large'>
          Subscribe
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

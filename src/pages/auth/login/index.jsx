import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import 'antd/dist/reset.css'; 
import logo from '../../../../public/elhagz.png'
import sign from '../../../../public/signin.png'


const { Title } = Typography;

const LoginPage = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left side: Login Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        <div className="mb-8">
          <img src={logo} alt="Elhagz Logo" className="h-12" />
        </div>
        <Title level={2} className="text-2xl font-semibold mb-4">Login</Title>
        <p className="text-gray-600 mb-6">Kickstart your night life journey with Tap In!</p>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          className="w-full max-w-sm"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter your email!' }]}
          >
            <Input placeholder="Enter Email" className="border rounded-md p-2" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password placeholder="Enter Password" className="border rounded-md p-2" />
          </Form.Item>

          <Form.Item>
            <a className="text-blue-500" href="">
              Forgot Password?
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full bg-red-500 hover:bg-red-600 border-0 rounded-md p-2 text-white">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>

      {/* Right side: Cafe Image */}
      <div className="w-1/2 hidden md:block relative">
        <img
          src={sign}
          alt="Cafe"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
import React from 'react';
import { Form, Input, Select, Radio, Button } from "antd";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../../redux/alertsSlice';
const { Option } = Select;

function Register() {
  const dispatch =useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log(values);
    try {
      dispatch(showLoading());
      const response = await axios.post('http://localhost:5000/api/user/register', values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error('Something went wrong');
    }
  };

  return (
    
    <div className='authentication'>
      <div className='authentication-form card p-3 '>
        <h1 className='card-title'>Welcome to Family Care Dispensary</h1>
        <Form layout='vertical' onFinish={onFinish}>
        
          <Form.Item label='Role' name='role' rules={[{ required: true, message: 'Please select your role!' }]}>
            <Select placeholder='Select a role'>
              <Option value='patient'>Patient</Option>
              <Option value='doctor'>Doctor</Option>
            </Select>
          </Form.Item>
          
          <Form.Item label='Name' name='name' rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input placeholder='Name' />
          </Form.Item>
          
          <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please input a valid email!' }]}>
            <Input placeholder='Email' />
          </Form.Item>
          
          <Form.Item label='Address' name='address' rules={[{ required: true, message: 'Please input your address!' }]}>
            <Input placeholder='Address' />
          </Form.Item>
          
          <Form.Item label='Gender' name='gender' rules={[{ required: true, message: 'Please select your gender!' }]}>
            <Radio.Group>
              <Radio value='male'>Male</Radio>
              <Radio value='female'>Female</Radio>
              <Radio value='other'>Other</Radio>
            </Radio.Group>
          </Form.Item>
          
          <Form.Item label='Age' name='age' rules={[{ required: true, message: 'Please input your age!' }]}>
            <Input type='number' placeholder='Age' />
          </Form.Item>

          <Form.Item label='Password' name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input placeholder='Password' type='password' />
          </Form.Item>
          
          <Form.Item>
            <Button className='primary-button mt-2' htmlType='submit'>Register</Button>    
          </Form.Item>

          <Link to='/login' className='anchor mt-2'>CLICK HERE TO LOGIN</Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;

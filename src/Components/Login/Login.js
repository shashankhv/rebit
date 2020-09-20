import React from 'react'
import {Container ,LoginDiv , StyledInput  ,StyledButton} from './styles'
import login from '../../Assets/login.svg'
import {Form } from 'antd'
import { UserOutlined  ,LockOutlined  } from '@ant-design/icons';
const Login = ()=> {
    return (
        <Container>
            <LoginDiv>
<img src={login} alt=""/>
<span>

    <Form name="Login">
<label>Username</label>
<Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!',}]}>
<StyledInput prefix={<UserOutlined/>}/>
</Form.Item>
<label>Password</label>
<Form.Item name="password"  rules={[{ required: true, message: 'Please input your Password!' }]}>
<StyledInput prefix={<LockOutlined  />}  type="password"/>
</Form.Item>
    </Form>
</span>
<StyledButton type="primary" >Login</StyledButton>
            </LoginDiv>

        </Container>
    )
}

export default Login

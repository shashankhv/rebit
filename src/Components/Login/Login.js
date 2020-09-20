import React from 'react'
import {Container ,LoginDiv , StyledInput  ,StyledButton} from './styles'
import{Link} from 'react-router-dom'
import login from '../../Assets/login.svg'
import {Form } from 'antd'
import { UserOutlined  ,LockOutlined  } from '@ant-design/icons';
const Login = ()=> {
    const [userName, setUserName] = React.useState("")
    const [password , setPassword] = React.useState("")
 
    return (
        <Container>
            <LoginDiv>
<img src={login} alt=""/>
<span>

    <Form name="Login">
<label>Username</label>
<Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!',}]}>
<StyledInput prefix={<UserOutlined/>} onChange={(e)=>{
setUserName(e.target.value)
}}/>
</Form.Item>
<label>Password</label>
<Form.Item name="password"  rules={[{ required: true, message: 'Please input your Password!' }]}>
<StyledInput prefix={<LockOutlined  />} onChange={(e)=> setPassword(e.target.value)}  type="password"/>
</Form.Item>
    </Form>
</span>
<Link to="/content">

<StyledButton type="primary"  >Login</StyledButton>
</Link>
<br/>
<p style={{textAlign : "center"}}>Or</p>
<Link to="/signup">
<StyledButton type="primary" >Sign Up</StyledButton>
</Link>

            </LoginDiv>

        </Container>
    )
}

export default Login

import React from 'react'
import signup from '../../Assets/signup.svg'
import { Form , Select ,} from 'antd'
import { UserOutlined  ,LockOutlined ,MailOutlined } from '@ant-design/icons';
import {Container , StyledInput ,StyledSelect , StyledButton} from './styles'
const SignUp = ()=> {
const [userName , setUserName] = React.useState("")
const [email , setEmail] = React.useState("")
const [plan , setplan] = React.useState("")
const [password , setpassword] = React.useState("")

const {Option} = Select
console.log("data :" + userName , email , plan , password)
    return (
        <Container>
            <img src={signup} alt=""/>
<Form>
<label>Username</label>
<Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!',}]}>
<StyledInput size="medium" onChange={(e)=> setUserName(e.target.value)}  prefix={<UserOutlined/>}/>
</Form.Item>
<label>Email</label>
<Form.Item name="Email" onChange={(e)=> setEmail(e.target.value)} rules={[{ required: true, message: 'Please input a valid Email!',type : "email"}]}>
<StyledInput size="medium"  prefix={<MailOutlined />}/>
</Form.Item>
<label>Password</label>
<Form.Item name="password" onChange={(e)=> setpassword(e.target.value)} rules={[{ required: true, message: 'Please input your Password!' }]}> 
    <StyledInput type="password" size="medium" prefix={<LockOutlined  />} />
</Form.Item>
<label>Subscription Plan </label>
<Form.Item name="Select">

<StyledSelect size="medium" defaultValue="lucy" onChange={(e)=> setplan(e)} >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </StyledSelect>
</Form.Item>
<Form.Item name="Button">
    <span style={{display : "flex" , justifyContent : "center"}}>
<StyledButton type="primary" > SignUp</StyledButton>
    </span>
        
</Form.Item>
</Form>
        </Container>
    )
}

export default SignUp

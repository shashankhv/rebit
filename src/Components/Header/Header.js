import React from 'react'
import {StyledHeader ,Content ,StyledText } from './styles'
import {Link} from 'react-router-dom'
import logo from '../../Assets/logo.svg'
import user from '../../Assets/user.svg'
import {Modal } from 'antd'
const Header = () =>{
const [modal , setModal] = React.useState(false)


return (
        <>
        <StyledHeader>
            <Content>
              <Link to="home">
<img src={logo} alt=""/>
              </Link>
<StyledText  ><Link to="/files" style={{color : "gray"}}> 
Files
</Link></StyledText>
<StyledText>Devices</StyledText>
<StyledText>Report</StyledText>
<StyledText > <Link to="/recycle" style={{color : "gray"}}> Recycle Bin</Link></StyledText>
<img src={user} alt="" onClick={()=>{setModal(true)}} style={{cursor : 'pointer'}} />
<StyledText>Logout</StyledText>


            </Content>
        </StyledHeader>

<Modal visible={modal} footer={null} width={300} onCancel={()=> setModal(false)} > <div style={{marginTop : "25px"}}>
    <p>Username </p>
    <p>Subscription-Plan </p>
    <p>Subscription Ends on </p>
    </div></Modal>





    

        </>
    )
}

export default Header

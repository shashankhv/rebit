import styled from '@emotion/styled'

import {Input , Button} from 'antd'

export const Container = styled.div`
display : flex;
justify-content : space-around;
align-items : center;
background : white;
height : 100vh;
width : 100vw;
`

export const LoginDiv = styled.div`
width : 22vw;
height : 400px;
display : flex;
flex-direction : column;
justify-content : center;
`
export const StyledInput = styled(Input)`
background: #ffffff;
border: 1px solid #d9dde4;
box-sizing: border-box;
border-radius: 6px;
height: 40px;
width: 22vw;
align-self: center;
`
export const StyledButton = styled(Button)`
background : black;
border-radius: 6px;
border-color : black;
width : 100%;
`  
import React from 'react'
import {StyledHeader ,Content ,StyledText ,FileSpan , FileDiv ,DeleteText , RestoreText , UploadSpan} from './styles'
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import logo from '../../Assets/logo.svg'
import user from '../../Assets/user.svg'
import {Modal , Input} from 'antd'
const { Search } = Input;
const { Dragger } = Upload;
const Header = () =>{
const [modal , setModal] = React.useState(false)
const [files , setFiles] = React.useState(false)
const [bin , setBin] = React.useState(false)

const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

const something = {
    "FileNAme" : 'Device id',
    "else" : 'asasd'
}
const clickHandler = (e)=>{
  
if(e ==="files"){
    setFiles(true)
    setBin(false)

}
else if(e==="bin"){
    setBin(true)
    setFiles(false)

}
}

return (
        <>
        <StyledHeader>
            <Content>
<img src={logo} alt=""/>
<StyledText onClick={()=>clickHandler("files")} >Files</StyledText>
<StyledText>Devices</StyledText>
<StyledText>Report</StyledText>
<StyledText onClick={()=>clickHandler("bin")}>Recycle Bin</StyledText>
<img src={user} alt="" onClick={()=>{setModal(true)}} style={{cursor : 'pointer'}} />
<StyledText>Logout</StyledText>


            </Content>
        </StyledHeader>

<Modal visible={modal} footer={null} width={300} onCancel={()=> setModal(false)} > <div style={{marginTop : "25px"}}>
    <p>Username </p>
    <p>Subscription-Plan </p>
    <p>Subscription Ends on </p>
    </div></Modal>

{files &&  <FileDiv>
    <h1> Files</h1>
    <Search style={{width : "30vw"}} placeholder="input search text" onSearch={value => console.log(value)} enterButton />
{Object.keys(something).map((item ,index )=>{
    
return <FileSpan>
    {item} <span>
        <RestoreText>Restore</RestoreText> <DeleteText> Delete</DeleteText>
        </span>
    </FileSpan>
})}

<UploadSpan>

<Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </Dragger>,
</UploadSpan>


    </FileDiv>}
{bin && <h1>Recycle Bin</h1>}
        </>
    )
}

export default Header

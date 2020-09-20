import React from 'react'
import { Input} from 'antd'
import { Upload, message } from 'antd';
import { FileDiv ,FileSpan ,RestoreText,DeleteText ,UploadSpan} from '../Header/styles'
import { InboxOutlined } from '@ant-design/icons';
import Header from '../Header/Header'
const { Dragger } = Upload;

const { Search } = Input;




const Files = () => {

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

    return (<>
        <Header/>
    

        <FileDiv>

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
    
    
        </FileDiv>
       
        </>
    
    )
}

export default Files

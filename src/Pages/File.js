import React, { createElement } from 'react'
import { useState, useEffect } from 'react';
import { Upload, download } from '../services/fileService';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ListIcon from '@mui/icons-material/List'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import styled from 'styled-components'
import { AllFiles } from '../services/fileService';

const DataContainer = styled.div`
    flex: 1 1;
    padding: 10px 0px 0px 20px;
`

const DataHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    height: 40px;
    .headerLeft {
        display: flex;
        align-items: center;
    }
    .headerRight svg {
        margin:0px 10px;
    }
`

const DataGrid = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
`

const DataFile = styled.div`
    text-align: center;
    border: 1px solid rgb(204 204 204 / 46%);
    margin: 10px;
    min-width: 200px;
    padding: 10px 0px 0px 0px;
    border-radius: 5px;
    svg {
        font-size: 60px;
        color:gray
    }
    p {
        border-top: 1px solid #ccc;
        margin-top: 5px;
        font-size: 12px;
        background: whitesmoke;
        padding: 10px 0px;
    }
`
const DataListRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    p {
        display: flex;
        align-items: center;
        font-size: 13px;
        b {
            display: flex;
            align-items: center;
        }
        svg {
            font-size: 22px;
            margin:10px
        }
    }
`

const File = () => {
    const userId = localStorage.getItem("userId");
    const [selectedFile, setSelectedFile] = useState(null);
    const [files, setFiles] = useState([]);
    const [uploading,setUploading] = useState(false);
    if(userId){
        useEffect(() => {
            const params = {
                userId:userId
            }
            AllFiles(params).then((response) => {
                console.log(response);
                setFiles(response);
            }).catch((error) => {
                // console.log(error);
            })
        }, [userId])
    }
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = (event) => {
        event.preventDefault();
        if(!selectedFile){
            console.log("empty");
            return;
        }
        setUploading(true);
        const formData = new FormData();
        formData.append('file',selectedFile);
        formData.append('userId',userId);
        Upload(formData).then((response) => {
            // console.log(response);
            // console.log("success");
            window.location.reload();
        }).catch((error) => {
            console.log(error);
            console.log("error");
        })
        setUploading(false);
    };

    const handleDownload = (file) => {
        // console.log(file);
        const params = {
            fileId: file.fileId
        }
        download(params).then((response) => {
            const blob = new Blob([response], {type: 'application/octect-stream'});
            const blobUrl = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = file.fileName;
            link.click();
            URL.revokeObjectURL(blobUrl);
        }).catch((error)=>{
            console.log(error);
        })
    }
    if(userId){
        return (
            <>
                <nav>
                    <ul>
                    <Button>
                        <Link to="/">Home</Link>
                    </Button>
                    <Button>
                        <Link to="/logout">Logout</Link>
                    </Button>
                    </ul>
                </nav>
                <input type = "file" onChange={handleFileChange}></input>
                <button onClick={handleUpload}>Upload</button>
                <DataContainer>
                    <DataHeader>
                        <div className='headerLeft'>
                            <p>My Drive</p>
                            <ArrowDropDownIcon />
                        </div>
                        <div className='headerRight'>
                            <ListIcon />
                            <InfoOutlinedIcon />
                        </div>
                    </DataHeader>  
                    <DataListRow>
                        <p> <b>Name <ArrowDownwardIcon /></b> </p>
                        <p> <b>Owner</b> </p>
                        <p> <b>Last Modified</b> </p>
                        <p> <b>File Size</b> </p>
                    </DataListRow>
                    {files.map(file => (
                        <DataListRow key = {file.fileId}>
                            <Button onClick={() => handleDownload(file)}>{file.fileName}</Button>
                            <p > <b>Me</b> </p>
                            <p> <b>{file.uploadDate}</b></p>
                            <p> <b>{file.fileSize}</b></p>
                        </DataListRow>
                    ))}
                </DataContainer>              
            </>
        );
    }else{
        return (
            <div>
                <nav>
                    <ul>
                    <Button>
                        <Link to="/">Home</Link>
                    </Button>
                    <Button>
                        <Link to="/login">Login</Link>
                    </Button>
                    <Button>
                        <Link to="/register">SignUp</Link>
                    </Button>
                    </ul>
                </nav>
            </div>
          );
    }
  
}

export default File

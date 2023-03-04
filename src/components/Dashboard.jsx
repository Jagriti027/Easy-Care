import React, { useEffect, useState } from 'react'
import { Web3Storage } from 'web3.storage'
import './dashboard.css'
import { useNavigate } from 'react-router-dom'
import FileItem from './FileItem'
const Dashboard = ({ Signer }) => {
    const [files, setFiles] = useState([])
    const nav = useNavigate()
    const fetchData = async () => {
        const allFiles = await Signer.getAllFiles()
        setFiles(allFiles)
        console.log(allFiles)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <header className='top'>
                <h1>EasyCare</h1>
            </header>
            <div className='dash'>
                <h2>Dashboard</h2>
                <div className='dash-btm'>
                    <h3>{JSON.parse(localStorage.getItem("user")).name}</h3>
                    <button className='button' onClick={() => nav("/add-file")}>ADD</button>
                </div>
                <div className='data'>
                    {files.length != 0 ? files?.map(file => {
                        return <FileItem file={file} />
                    })
                        : <div>No record available</div>
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard
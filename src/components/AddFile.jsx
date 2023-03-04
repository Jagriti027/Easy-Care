import React from 'react'
import { Web3Storage } from 'web3.storage'
import './dashboard.css'
import { useNavigate } from 'react-router-dom'
const AddFile = ({ Signer }) => {
    const nav = useNavigate()
    const save = async (e) => {
        e.preventDefault()
        const client = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDlDNDE0NTFDMjc5ZjBBMDYxOTNiMDc5YTcxMkNEMjAzYUE1ZjA1REYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjA4MjI0MzI3MzIsIm5hbWUiOiJEYXBwIn0.EvAVqJ042nWSR78UJ-OESamhZfFAGY2zpdj80uNMx5k" })
        const cid = await client.put(e.target[0].files)
        const transaction = await Signer.uploadFile(cid, e.target[0].files[0].name, String(new Date().getTime()))
        transaction.wait().then((e) => {
            nav("/dashboard")
        })
    }
    return (
        <>
            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form onSubmit={(e) => save(e)} >
                <input type="file" name="Import File" id="imptFile" />
                <div class="image-preview" id="image-preview">
                    <img src="" alt="Image Preview" class="image-preview__image" />
                    <span class="image-preview__default-text">Image Preview</span>
                </div>
                <button type='submit' >Upload</button>
            </form>
        </>
    )
}

export default AddFile
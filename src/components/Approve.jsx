import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./approve.css"

const Approve = ({ Signer }) => {
    const { hash } = useParams()
    const nav = useNavigate()
    const approveAddress = (e) => {
        e.preventDefault()
        Signer.approveAccess(e.target[0].value, hash).then(() => {
            alert("Approved successfully")
            nav("/dashboard")
        })

    }

    return (
        <div  >
            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form onSubmit={(e) => approveAddress(e)}  >
                <label for="Address">Address</label>
                <input type="text" placeholder="Address" id="Address" />
                <button type='submit' >  Approve </button>
            </form>
        </div>
    )
}

export default Approve
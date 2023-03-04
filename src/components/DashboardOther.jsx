import React from 'react'
import './dashboardOther.css'
const DashboardOther = ({ Signer }) => {
    const getFile = async (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
        await Signer.canAccess(String(e.target[0].value)).then((res) => {
            if (res) {
                Signer.getFile(e.target[0].value).then((e) => {
                    window.open(`https://${e.fileCid}.ipfs.w3s.link/${e.fileName}`)
                })
            }
            else {
                alert("You cant access this files")
            }
        })
    }
    return (
        <>
            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form onSubmit={(e) => getFile(e)}>
                <h3>Doctor's Dashboard</h3>
                <label for="File">File id</label>
                <input type="text" placeholder="Enter File id" />
                <button type='submit' >View</button>
            </form>
        </>
    )
}

export default DashboardOther
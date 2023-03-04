import React from 'react'
import './dash.css'
import FileItem from './components/FileItem'

const Dash = () => {
    return (
        <>
            <header className='top'>
                <h1>EasyCare</h1>
            </header>
            <div className='dash'>
                <h2>Dashboard</h2>
                <div className='dash-btm'>
                    <h3>USERNAME</h3>
                    <button className='button'>ADD</button>
                </div>
                <div className='data'>
                    <FileItem fileName='Lornjkdnak' fileCreatedAt='23/07/2022' />
                </div>
            </div>
        </>
    )
}

export default Dash
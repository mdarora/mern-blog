import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Home = () => {
    return (
    <>
        <Header></Header>
        <div className="home-wrapper">
            <div className="posts">
                <p>post</p>
            </div>
            <Sidebar></Sidebar>
        </div>
    </>
    )
}

export default Home

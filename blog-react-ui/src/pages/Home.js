import React from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'

const Home = () => {
    return (
    <>
        <Header></Header>
        <div className="home-wrapper">
            <div className="posts">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
            <Sidebar></Sidebar>
        </div>
    </>
    )
}

export default Home

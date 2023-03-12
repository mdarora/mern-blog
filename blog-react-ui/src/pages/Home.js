import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();
    
    useEffect(() => {
        let apiRoute = `/api/posts`;

        if(search){
            apiRoute = `/api/posts${search}`;
        }
      
        const getPosts = async() =>{
            const res = await fetch(apiRoute, {
                method: "GET"
            });
            const result = await res.json();

            if(result.message){
                setPosts(result.posts);
            }
        }
        getPosts();
    }, [search]);
    
    return (
    <>
        <Header></Header>
        <div className="home-wrapper">
            <div className="posts">
                {posts.map((post, index) => (
                    <Post key={index} post={post}/>
                ))}
            </div>
            <Sidebar></Sidebar>
        </div>
    </>
    )
}

export default Home

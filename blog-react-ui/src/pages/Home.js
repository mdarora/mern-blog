import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      
        const getPosts = async() =>{
            const res = await fetch("/api/posts", {
                method: "GET"
            });
            const result = await res.json();

            if(result.message){
                setPosts(result.posts);
            }
        }
        getPosts();
    }, []);
    
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

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const SinglePost = () => {
    const {id} = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
      const getPost = async () => {
        const res = await fetch(`/api/posts/${id}`);
        const result = await res.json();

        if(result.message){
            setPost(result.post);
        }
    }
    getPost();
    
    }, [id]);
    
    return (
    <main className="single-post-page">
        <div className="single-post">
            <div className="spost-img">
                <img src={post.image} alt="beautiful beach with a sunset" />
            </div>
            <h1 className="spost-title">
                {post.title}
            </h1>
            <div className="spost-info-btns">
                <div className="spost-info">
                    <p className="spost-author">Author:
                        <span className="spost-author-name">
                            <Link to={`/?user=${post.username}`}>{post.username}</Link>
                        </span> 
                    </p>
                    <p className="spost-time">{new Date(post.createdAt).toDateString()}</p>
                </div>
                <div className="spost-btns">
                    <i className="far fa-edit"></i>
                    <i className="far fa-trash-alt"></i>
                </div>
            </div>
            <p className="spost-desc">
                {post.desc}
            </p>
        </div>
        <Sidebar></Sidebar>
    </main>
    )
}

export default SinglePost

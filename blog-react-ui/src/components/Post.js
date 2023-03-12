import React from 'react'
import { Link } from 'react-router-dom'

const post = ({post}) => {
    return (
    <>
        <div className="post">
            <Link to="/post">
                <div className="post-img">
                    <img src={post.image} alt={`image : ${post.title}`} />
                </div>
            </Link>
            <div className="postBody">
                <div className="post-cats">
                    {post.categories.map((cat, i) => (
                        <span key={i}>{cat}</span>
                    ))}
                </div>
                <div className="post-title">
                    <Link to="/post">
                        <h3>{post.title}</h3>
                    </Link>
                </div>
                <div className="post-time">{new Date(post.createdAt).toDateString()}</div>
                <p className="post-desc">
                    {post.desc}
                </p>
            </div>
        </div> 
    </>
    )
}

export default post

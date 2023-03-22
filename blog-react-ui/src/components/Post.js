import React from 'react'
import { Link } from 'react-router-dom'

const post = ({post}) => {
    const publicFolder = "http://localhost:5500/images/";
    return (
    <>
        <div className="post">
            <Link to={`/post/${post._id}`}>
                <div className="post-img">
                    <img src={publicFolder + post.image} alt={post.title} />
                </div>
            </Link>
            <div className="postBody">
                <div className="post-cats">
                    {post.categories.map((cat, i) => (
                        <span key={i}>
                            <Link to={`/?cat=${cat}`}>{cat}</Link>
                        </span>
                    ))}
                </div>
                <div className="post-title">
                    <Link to={`/post/${post._id}`}>
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

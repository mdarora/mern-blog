import React from 'react'
import { Link } from 'react-router-dom'

const post = () => {
    return (
    <>
        <div className="post">
            <div className="post-img">
                <img src="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="beautiful beach with a sunset" />
            </div>
            <div className="post-cats">
                <span>Music</span>
                <span>Life</span>
                <span>Nature</span>
            </div>
            <div className="post-title">
                <Link to="/post">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                </Link>
            </div>
            <div className="post-time">1 hour ago</div>
            <p className="post-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odio fugit illo perspiciatis culpa excepturi velit omnis adipisci, aperiam, placeat facere voluptatem, cum repudiandae nemo ullam repellendus perferendis suscipit maxime saepe ad praesentium porro error tempora! Recusandae maiores commodi aut nam voluptates aliquid eius animi.
            </p>
        </div> 
    </>
    )
}

export default post

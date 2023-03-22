import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import LoginContext from '../contexts/LoginContext';

const Write = () => {
    const history = useHistory();
    const {isloggedin, loggedUser} = useContext(LoginContext);
    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState(null);

    if(!isloggedin){
        history.push("/login");
    }

    const submitPost = async (e) => {
        e.preventDefault();

        const newPost = {
            title,
            desc,
            username:loggedUser.username,
            userId: loggedUser.id,
        }

        if(image){
            const imageName = `${Date.now()}${loggedUser.username}.jpeg`;
            newPost.image = imageName;

            const imageData = new FormData();
            imageData.append('name', imageName);
            imageData.append("file", image);

            try {
                await fetch('/api/upload', {
                    method: 'POST',
                    credentials: "include",
                    body: imageData
                });
            } catch (error) {
                console.log(error);
            }
        }


        try {
            const res = await fetch("/api/posts", {
                method: 'POST',
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPost)
            });

            const result = await res.json();

            if(result.message){
                history.push(`/post/${result.post._id}`);
            }
            
        } catch (error) {
            console.log(error);
        }

    }
    
    


    return (
    <main className="write-page">
        <h2>Create a new Post</h2>
        {image && 
        <div className="write-img">
            <img src={URL.createObjectURL(image)} alt="beautiful beach with a sunset" />
        </div>
        }
        <form className="write-form" onSubmit={submitPost}>

            <div className="write-from-group write-title-file">
                <label title="Choose file" htmlFor="file-input">
                    <i className="fas fa-plus"></i>
                    <input type="file" id="file-input" accept='image/*' onChange={e => setImage(e.target.files[0])} hidden />
                </label>
                <input type="text" placeholder="Title here" value={title} onChange={e => setTitle(e.target.value)} autoFocus={true}/>
            </div>

            <div className="write-from-group">
                <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="Tell your story..." cols="30" rows="10"></textarea>
            </div>

            <div className="write-submit-btn">
                <button type="submit">Publish</button>
            </div>

        </form>
    </main>
    )
}

export default Write

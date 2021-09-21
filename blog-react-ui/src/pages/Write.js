import React from 'react'

const Write = () => {
    return (
    <main className="write-page">
        <div className="write-img">
            <img src="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="beautiful beach with a sunset" />
        </div>
        <form className="write-form">

            <div className="write-from-group write-title-file">
                <label title="Choose file" htmlFor="file-input">
                    <i className="fas fa-plus"></i>
                    <input type="file" id="file-input" hidden />
                </label>
                <input type="text" placeholder="Title here" autoFocus={true}/>
            </div>

            <div className="write-from-group">
                <textarea placeholder="Tell your story..." cols="30" rows="10"></textarea>
            </div>

            <div className="write-submit-btn">
                <button type="submit">Publish</button>
            </div>

        </form>
    </main>
    )
}

export default Write

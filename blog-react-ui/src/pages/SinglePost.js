import React from 'react'
import Sidebar from '../components/Sidebar'

const SinglePost = () => {
    return (
    <main className="single-post-page">
        <div className="single-post">
            <div className="spost-img">
                <img src="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="beautiful beach with a sunset" />
            </div>
            <h1 className="spost-title">
                Lorem ipsum dolor sit amet.
            </h1>
            <div className="spost-info-btns">
                <div className="spost-info">
                    <p className="spost-author">Author: <span className="spost-author-name">MD Arora</span> </p>
                    <p className="spost-time">2 hours ago</p>
                </div>
                <div className="spost-btns">
                    <i className="far fa-edit"></i>
                    <i className="far fa-trash-alt"></i>
                </div>
            </div>
            <p className="spost-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum reiciendis nostrum molestiae ipsum, ducimus expedita, doloribus doloremque temporibus perspiciatis dolores maxime. Ratione facilis excepturi tempora maiores ab officiis rerum saepe obcaecati ipsum architecto nemo, quibusdam, odit, a incidunt veritatis perspiciatis est maxime voluptatibus? Pariatur tempora, officiis ducimus reprehenderit, consequatur distinctio sapiente fuga accusamus libero asperiores temporibus, blanditiis nisi a dolor molestiae tenetur cumque numquam illum exercitationem! Quos, voluptate? Maiores aspernatur veritatis explicabo et perferendis eum sequi deserunt similique molestias? Quos saepe ipsum iusto rem sit earum modi incidunt, quasi officiis illum quo optio eligendi dolores error, beatae inventore eum nihil sed impedit similique facilis nisi unde? Ratione atque esse laboriosam expedita. Magni dolor adipisci perferendis dolorum corporis unde velit in repellat. Praesentium, repellendus repudiandae ullam cum itaque assumenda! Voluptates reprehenderit possimus repellat consectetur, ab ullam. Reprehenderit labore pariatur inventore molestias iste exercitationem, suscipit facere voluptatem, laboriosam debitis libero hic voluptatum corporis voluptas odit tenetur sit facilis enim quod perspiciatis ullam, nobis ut! Omnis aliquam veniam dolor cumque quam, quis est modi ratione libero officiis tempore eos ipsum obcaecati et dolores necessitatibus asperiores vel deserunt eveniet tenetur sapiente voluptas dolorum atque voluptatem? Repudiandae repellat quaerat vero, impedit consequatur quas quos dolor obcaecati, et ipsum voluptatum doloremque nisi laborum dicta! Rem molestias eum expedita consequatur assumenda repudiandae eos doloribus nam debitis vel illo provident et ab dolore, alias in praesentium velit earum voluptatibus. Animi magnam ad, beatae quam incidunt assumenda labore natus officia facere expedita vero rem similique dolor perferendis laudantium laborum sequi reprehenderit quos veritatis. Eligendi eius itaque quidem corporis quis, voluptates voluptatum eaque vel voluptatibus dignissimos iusto tempore? Tempore veritatis temporibus modi blanditiis velit corporis nam est aperiam nemo impedit, possimus molestias excepturi cumque delectus. Qui beatae ipsam ipsum dolore dignissimos harum, officia tempora in impedit, quidem iusto!
            </p>
        </div>
        <Sidebar></Sidebar>
    </main>
    )
}

export default SinglePost

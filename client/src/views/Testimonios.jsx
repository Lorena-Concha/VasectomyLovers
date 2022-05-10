import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Testimonios = () => {
    const [posts, setPosts] = useState();

    const getPosts = () => {
        axios.get('http://localhost:8000/api/post')
            .then(res => {
                setPosts(res.data.posts);
            })
            .catch(err => console.log("Error:", err))
        }
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className='container '>
            <h1>Testimonios</h1>
            <h5>haz click para comentar</h5>
            <div className='row justify-content-center'>
            {posts?.map((post,i)=>
                <div className='col-3 testimonios m-1 p-2 rounded' key={i}>
                    <div ><Link to={`/comentarios/${post._id}`} className="btn btn-outline-light ">{post.title}</Link></div>
                    <div className='text'>{post.text} {post.author.firstName} <p className='p text'> Usuario: {post.author.lastName} </p></div>
                    <div class="w-100"></div>
                </div>
            )}
            </div>
        </div>
    );
}

export default Testimonios;

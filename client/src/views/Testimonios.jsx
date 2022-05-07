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
        <div>
            {posts?.map((post,i)=>
                <div key={i}>
                    <div><Link to={`/comentarios/${post._id}`}>{post.title}</Link></div>
                    <div>{post.text} {post.author.firstName} {post.author.lastName}</div>
                </div>
            )}
        </div>
    );
}

export default Testimonios;

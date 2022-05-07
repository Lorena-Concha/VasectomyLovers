import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Comentarios = () => {
    const { id } = useParams();
    const [post, setPost] = useState();
    const [comment, setComment] = useState();
    const [clas, setClas] = useState('d-none');
    useEffect(() => {
        axios.get("http://localhost:8000/api/post/" + id)
            .then((res) => {
                setPost(res.data.post);
                console.log(res.data.post);
            })
    }, [])
    const comentar = () => {
        setClas('');
    }
    return (
        <div>
            <div><h1> {post?.author.firstName} {post?.author.lastName} {post?.title}</h1></div>
            <div><h3>{post?.text} <button onClick={comentar}>Comentar</button></h3></div>
            {post?.comments.map((comment, i) =>
                <div key={i}>{comment.text} {comment.author.firstName}</div>
            )}
            <div className={clas}>
                <input type="text"  placeholder='Ingresa tu comentario' onChange={(e) => setComment(e.target.value)}  ></input>
                <button onClick={enviar}>Enviar</button>
            </div>
        </div>
    );
}

export default Comentarios;

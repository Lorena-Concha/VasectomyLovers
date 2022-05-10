import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../contexts/userContext';

const Comentarios = () => {
    const { id } = useParams();
    const [post, setPost] = useState();
    const [comment, setComment] = useState();
    const [counter, setCounter] = useState(0);
    const [clas, setClas] = useState('d-none');
    const { user, setUser } = useUser();
    useEffect(() => {
        axios.get("http://localhost:8000/api/post/" + id)
            .then((res) => {
                setPost(res.data.post);
                console.log(res.data.post);
            })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:8000/api/post/" + id)
            .then((res) => {
                setPost(res.data.post);
                console.log(res.data.post);
            })
    }, [counter])
    const comentar = () => {
        setClas('');
    }
    const setearComentario=(e)=>{
        setComment(e.target.value);
    }
    const enviar = () => {
        axios.post('http://localhost:8000/api/comment/', { text: comment, author: user._id })
            .then(res => {
                console.log(res);
                axios.put('http://localhost:8000/api/post/' + id, { title: post.title, text: post.text, author: post.author._id, comments: [...post.comments, res.data.comment] })
                .then(res => {
                    console.log(res);
                    setComment('');
                    setClas('d-none');
                    setCounter(counter + 1);
                });
            });
    }
    return (
        <div className='container'>
            <div className='comentarios'>
                <div>
                    <h4 className='p'> Usuario : {post?.author.firstName} {post?.author.lastName} <p>{post?.title}</p></h4>
                </div>
                <div><p>{post?.text} 
                    <div>
                        <button onClick={comentar} className='btn btn-outline-light'>Comentar</button>
                        </div></p>
                    </div>
                </div>
                <div >
            {post?.comments.map((comment, i) =>
                <div key={i}>{comment.text} <p className='p'>{comment.author.firstName}</p></div>
            )}
            <div className={clas}>
                <br></br>
                <input type="text" value={comment} className="input" placeholder='Ingresa tu comentario' onChange={(e) => setearComentario(e)}  ></input>
                <br></br>
                <button onClick={enviar} className='btn btn-outline-light mt-2'>Enviar</button>
            </div>
            </div>
            
        </div>
    );
}

export default Comentarios;

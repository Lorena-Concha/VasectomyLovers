import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../contexts/userContext';

const Experiences = () => {

    const [posts, setPosts] = useState();
    const [title, setTitle] = useState();
    const [postId, setPostId] = useState('');
    const [text, setText] = useState();
    const { user, setUser } = useUser();
    const [counter, setCounter] = useState(0);
    const getPosts = () => {
        axios.get('http://localhost:8000/api/postByUser/' + user._id)
            .then(res => {
                setPosts(res.data.posts);
            })
            .catch(err => console.log("Error:", err))
    }
    useEffect(() => {
        getPosts();
    }, []);
    useEffect(() => {
        getPosts();
    }, [counter]);
    const guardarTestimonio = () => {
        if (postId === '') {
            axios.post('http://localhost:8000/api/post/', { title: title, text: text, author: user._id })
                .then(res => {
                    console.log(res);
                    setTitle("");
                    setText("");
                    setCounter(counter + 1);
                });
        }else{
            axios.put('http://localhost:8000/api/post/'+postId, { title: title, text: text, author: user._id })
                .then(res => {
                    console.log(res);
                    setTitle("");
                    setText("");
                    setPostId('');
                    setCounter(counter + 1);
                });
        }
    }

    const editarTestimonio = (idPost,title,text) =>{
        setPostId(idPost);
        setTitle(title);
        setText(text);
    }

    const deleteTestimonio = (idPost) => {
        axios.delete("http://localhost:8000/api/post/" + idPost)
            .then((res) => {
                console.log("eliminada: ", res);
                getPosts();
                setCounter(counter + 1);
            });
    };
    return (

        <div  className='container d-flex flex-row justify-content-around'>
            <div>
                <h3>Testimonios</h3>
                <p>Titulo</p>
                <input  className='black text-dark' type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='escribe un título'></input>
                <p>Escribe Aquí:</p>
                <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder='Cuentanos tu experiencia' className='form-control' cols="30" rows="10"></textarea>
                <button onClick={() => guardarTestimonio()} className='mt-4 btn btn-outline-light'>Enviar</button>
            </div>
            <div className='myexperience'>
                {posts?.map((post, i) =>
                    <div key={i} className="experiencia rounded">
                        <h4 className='titulo p-2'>{post.title} <br></br><button onClick={() => editarTestimonio(post._id,post.title,post.text)}
                            className="btn btn-outline-light m-2">Editar</button><button onClick={() => deleteTestimonio(post._id)}
                            className="btn btn-outline-light">Eliminar</button></h4>
                        <p className='text p-3'>{post.text}</p>
                        {post.comments.map((comment, j) =>
                            <div key={j}>
                                <p>{comment.text}</p>
                                <p className='p'>{comment.author.firstName} {comment.author.lastName}</p>
                            </div>)}
                    </div>

                )}
            </div>
            </div>
    );
}

export default Experiences;

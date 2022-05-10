import React from 'react';
import Footer from '../components/Footer';
import { useUser } from "../contexts/userContext";


const Home = () => {
    const { user, setUser } = useUser();

    return (
        <div >
           
            <div>
                    <div className='d-flex justify-content-center'>
                    <div className='d-flex justify-content-start'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/JkLc27sqruM?playlist=JkLc27sqruM&loop=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className='d-flex flex-column mensaje m-2' >
                            <h3>¿Quieres ser un Vasectomy Lover?</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    );
}

export default Home;

import React from 'react';
import Footer from '../components/Footer';
import { useUser } from "../contexts/userContext";


const Home = () => {
    const { user, setUser } = useUser();

    const renderFooter = () => {
        if (user) {
            return (
               <Footer/>
            )
        } else {
            return (
                <div className='d-flex '>
                    <p>Registrate</p>
                </div>
            )
        }
    }

    return (
        <div>
           
            <div>
                <div className='d-flex justify-content-center'>
                    <div className='d-flex justify-content-start'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/JkLc27sqruM?playlist=JkLc27sqruM&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className='d-flex flex-column mensaje m-2' >
                            <h3>¿Qué es la Vasectomía?</h3>
                            <p className="mensaje">La vasectomía (también llamada esterilización masculina)</p>
                            <p> es un procedimiento quirúrgico (operación) seguro y efectivo</p>
                            <p> que te protege contra embarazos de manera permanente.</p>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    );
}

export default Home;

import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';

const Experiences = () => {

    return (
        
        <div className='d-flex justify-content-start m-4'>
            <div>
                <NavBar/>
            </div>
            <div>
            <h3>Testimonios</h3>
            <button className='m-2'>Enviar</button>
            <p>Escribe Aquí:</p>
            <textarea placeholder='Cuentanos tu experiencia' className='form-control' cols="30" rows="10"></textarea>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Experiences;

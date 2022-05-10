import React from 'react';
import espermeograma from "../assests/espermiograma.png"


const Espermeograma = () => {
    return (
        <div className='container d-flex flex-row justify-content-between'>
            <div className='mt-4'>
                <h4>Tu Espermeograma una vez vasectomizado debe ser asi: </h4>
                <img src={espermeograma} width="460" ></img>
            </div>
            <div className='mt-4'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rqvHRf7DuQc?playlist=rqvHRf7DuQc&loop=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       
            </div>
        </div>
    )
}

export default Espermeograma;
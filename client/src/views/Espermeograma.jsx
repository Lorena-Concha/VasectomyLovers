import React from 'react';
import espermeograma from "../assests/espermiograma.png"


const Espermeograma = () => {
    return (
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rqvHRf7DuQc?playlist=rqvHRf7DuQc&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       
            <h3>Tu Espermeograma una vez vasectomizado debe ser asi: </h3>
            <img src={espermeograma} width="560" height="315"></img>
        </div>
    )
}

export default Espermeograma;
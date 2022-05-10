import React from 'react';
import Respo from "../assests/responsabilidad.jpg";

const ResponsabilidadAfectiva = () => {
    return (
        <div className='d-flex flex-row justify-content-around m-3'>
            <div >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/MpwYrSnyeeg?playlist=MpwYrSnyeeg&loop=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className='m-4'>
                    <p>Cualquier vínculo (Amistad, pareja, familia, etc) Requiere responsabilidad afectiva.</p>
                    <p>La resonsabilidad afectiva viene a decirnos que cuidemos a la otra persona para eviar, no el sufriente, pero sí el dolor innecesario. Se trata de hacerce cargo, enfrentar las situaciones, de ser claros en los vínculos que deseamos formar y acernos resopnsables de estos.</p>
                </div>
            </div>
            <div>
                <h3>Hacernos cargo de nuestro Amor</h3>
                <img src={Respo}  width="560"></img>
            </div>
        </div>
    );
}

export default ResponsabilidadAfectiva;

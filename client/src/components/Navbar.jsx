import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className='container d-flex justify-content-around'>
                <div className="btn mb-5">
                    <button type="button" className="btn btn-warning m-1 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Información
                    </button>
                    <div className="dropdown-menu">
                        <Link to="/queeslavasectomia" className="dropdown-item btn btn-segundary">¿Qué es la Vasectomía?</Link>
                        <Link to="/donderealizarcelavasectomia" className="dropdown-item btn btn-secundary" >¿Dónde realizarse la Vasectomía?</Link>
                        <Link to="/mitos" className="dropdown-item btn btn-secundary">Mitos</Link>
                    </div>
                    <div className="btn-group">
                    <button type="button" className="btn btn-danger dropdown-toggle m-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Vasectomy Lovers
                    </button>
                    <div className="dropdown-menu">
                        <Link to="/experiencias" className="dropdown-item btn ">Mi experiencia</Link>
                        <Link to="/testimonios" className="dropdown-item ">Testimonios</Link>
                        <Link to="/espermeograma" className="dropdown-item ">Espermeograma</Link>
                    </div>
                    </div>
                    <div className="btn-group">
                    <button type="button" className="btn btn-success m-1 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Responsabilidad Afectiva
                    </button>
                    <div className="dropdown-menu">
                        <Link to="/queeslaresponsabilidadafectiva" className="dropdown-item btn btn-warning" href="#">¿Qué es la responsabilidad afectiva?</Link>
                        <Link to="/est"className="dropdown-item btn btn-warning">EST</Link>
                    </div>
                    </div>
                    <Link to="/contacta" type="button" className="btn btn-info m-1" aria-haspopup="true" aria-expanded="false">
                        Contacta un Vasectomy Lovers
                    </Link>
                    
                </div>
            </div>
        </div>
    );
}

export default NavBar;

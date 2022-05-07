import React from 'react';
import { Link } from 'react-router-dom';
import Experiences from './Experiences';

const NavBar = () => {
    return (
        <div>
            <div>
                <div className="btn-group">
                    <button type="button" className="btn btn-secundary dropdown-toggle m-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Información
                    </button>
                    <div className="dropdown-menu">
                        <Link to="/queeslavasectomia" className="dropdown-item btn btn-segundary">¿Qué es la Vasectomía?</Link>
                        <Link to="/donderealizarcelavasectomia" className="dropdown-item btn btn-secundary" >¿Dónde realizarse la Vasectomía?</Link>
                        <Link to="/mitos" className="dropdown-item btn btn-secundary">Mitos</Link>
                    </div>
                    <div className="btn-group">
                    <button type="button" className="btn btn-warning dropdown-toggle m-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Vasectomy Lovers
                    </button>
                    <div className="dropdown-menu">
                        <Link to="/experiencias" className="dropdown-item btn btn-segundary">Mi experiencia</Link>
                        <Link to="/testimonios" className="dropdown-item btn btn-segundary">Testimonios</Link>
                        <Link to="/expermiograma" className="dropdown-item btn btn-segundary">Espermiograma</Link>
                    </div>
                    </div>
                    <div className="btn-group">
                    <button type="button" className="btn btn-warning dropdown-toggle m-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Responsabilidad Afectiva
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item btn btn-warning" href="#">¿Qué es la responsabilidad afectiva?</a>
                        <a className="dropdown-item btn btn-warning" href="#">EST</a>
                    </div>
                    </div>
                    <button type="button" className="btn btn-warning m-1 " aria-haspopup="true" aria-expanded="false">
                        Contacta un Vasectomy Lovers
                    </button>
                    
                </div>
            </div>
        </div>
    );
}

export default NavBar;

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
                        <a className="dropdown-item btn btn-secundary" href="#">¿Dónde realizarse la Vasectomía?</a>
                        <a className="dropdown-item btn btn-secundary" href="#">¿Cúanto sale la Vasectomía?</a>
                        <a className="dropdown-item btn btn-secundary" href="#">Mitos</a>
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
